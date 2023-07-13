import {
  Container,
  IngredientsArea,
  InputFile,
  WrapperAddIngredients,
  Col3,
  Col2,
  Buttons,
} from './styles'
import { UploadSimple } from '@phosphor-icons/react'
import { Select } from '../Select'
import { Input } from '../Input'
import { TextArea } from '../TextArea'
import { AddIngredients } from '../AddIngredients'
import { Button } from '../Button'

import { useState } from 'react'
import { validateInput } from '../../utils/validations'

import { toast } from 'react-toastify'

import { api } from '../../services/api'

// eslint-disable-next-line no-useless-escape
const regexSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/

export function FormDish({ dishData, isNew = false }) {
  const picture = isNew ? dishData.picture : null
  const [dishPicture, setDishPicture] = useState(picture)
  // TODO: tratar captura do nome do arquivo para ser semelhante ao arquivo do estado

  const [dish, setDish] = useState({
    name: isNew ? dishData.name : '',
    ingredients: isNew ? dishData.ingredients : [],
    price: isNew ? dishData.price : '',
    description: isNew ? dishData.description : '',
  })

  const [newIngredient, setNewIngredient] = useState('')

  function handleAddIngredient() {
    const newIngredientIsEmpty = newIngredient === ''
    const containsIngredient = dish.ingredients.some(
      (ingredient) => ingredient.toLowerCase() === newIngredient.toLowerCase(),
    )
    const containsNumber =
      newIngredient.replace(/\d/g, '').length !== newIngredient.length
    const containsSpecialCharacters = regexSpecialCharacter.test(newIngredient)

    // TODO: alterar para mensagem em baixo do input ao invés de um toast nas próximas versões
    if (newIngredientIsEmpty)
      return toast.info('Informe o ingrediente antes de adicionar')
    if (containsIngredient)
      return toast.info('Este ingrediente já foi inserido.')
    if (containsNumber)
      return toast.info('Não é possível inserir valores númericos.')
    if (containsSpecialCharacters)
      return toast.info('Não é possível inserir caracteres especiais.')

    setDish((prevState) => ({
      ...prevState,
      ingredients: [
        ...prevState.ingredients,
        newIngredient.replace(/\s+$/, ''),
      ],
    }))
    setNewIngredient('')
  }
  function handleRemoveIngredient(deleted) {
    setDish((prevState) => ({
      ...prevState,
      ingredients: prevState.ingredients.filter(
        (ingredient) => ingredient !== deleted,
      ),
    }))
  }

  function handleChange(e) {
    setDish({ ...dish, [e.target.name]: e.target.value })
  }

  function handleInputImage(e) {
    const picture_ = event.target.files[0]
    setDishPicture(picture_)
    setDish((prevState) => ({ ...prevState, picture: picture_ }))
  }

  function handleCategorySelected(item) {
    setDish((prevState) => ({ ...prevState, category: item }))
  }

  function handleNewIngredient(e) {
    const { value } = e.target
    if (validateInput(value)) {
      setNewIngredient(value)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    try {
      if (newIngredient)
        return toast.info('Ingrediente informado não foi adicionado')

      if (dish.ingredients.length === 0)
        return toast.info('Informe pelo menos um ingredient.')

      console.log(dish)
    } catch (error) {}
  }
  return (
    <Container onSubmit={handleSubmit}>
      {isNew ? <h1>Novo prato</h1> : <h1>Editar Prato</h1>}
      <Col3>
        <InputFile
          labelPlaceholder="Imagem do prato"
          placeholder="Selecione imagem"
          errorMessage="Este campo é obrigatório."
          type="file"
          name="picture"
          onChange={handleInputImage}
        >
          <span>
            <UploadSimple size={32} />
            {dishPicture ? (
              <span> {dishPicture.name} </span>
            ) : (
              <span>Selecione imagem</span>
            )}
          </span>
        </InputFile>
        <Input
          labelPlaceholder="Nome"
          placeholder="Exemplo: Salada Ceasar"
          type="text"
          errorMessage="Este campo é obrigatório."
          name="name"
          onChange={handleChange}
          required
        />
        <Select
          options={['Refeições', 'Sobremesas', 'Bebidas']}
          selected="Bebidas"
          labelName={'Categoria'}
          onChange={handleCategorySelected}
        />
      </Col3>
      <Col2>
        <WrapperAddIngredients>
          <label>Ingredientes</label>
          <IngredientsArea>
            {dish.ingredients.map((ingredient, index) => {
              return (
                <AddIngredients
                  key={index}
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              )
            })}
            <AddIngredients
              isNew
              placeholder="Adicionar"
              onChange={(e) => handleNewIngredient(e)}
              value={newIngredient}
              onClick={handleAddIngredient}
            />
          </IngredientsArea>
        </WrapperAddIngredients>
        <Input
          labelPlaceholder="Preço"
          placeholder="R$ 00,00"
          type="number"
          name="price"
          step="0.01"
          errorMessage="Informe valores numéricos."
          onChange={handleChange}
          required
        />
      </Col2>
      <TextArea
        labelPlaceholder="Descrição"
        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
        name="description"
        errorMessage="Este campo é obrigatório."
        onChange={handleChange}
        required
      />
      <Buttons>
        {!isNew && <Button title="Excluir prato" />}
        <Button type="submit" title="Salvar Alterações" />
      </Buttons>
    </Container>
  )
}
