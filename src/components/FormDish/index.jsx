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

import { useState, useEffect } from 'react'
import { validateInput } from '../../utils/validations'

import { toast } from 'react-toastify'
import { toastConfig } from '../../services/toast'

import { api } from '../../services/api'

import { useParams } from 'react-router-dom'

import {
  removeHashFileName,
  currencyInputFormatter,
} from '../../utils/formatting'

// eslint-disable-next-line no-useless-escape
const regexSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/

export function FormDish({ dishData, isNew = false }) {
  const params = useParams()
  const [categories, setCategories] = useState([])

  const picture = !isNew ? dishData.picture : null
  const [dishPicture, setDishPicture] = useState(picture)
  // TODO: tratar captura do nome do arquivo para ser semelhante ao arquivo do estado
  const [dish, setDish] = useState({
    name: !isNew ? dishData.name : '',
    ingredients: !isNew ? dishData.ingredients : [],
    price: !isNew ? dishData.price : '',
    description: !isNew ? dishData.description : '',
  })
  const [newIngredient, setNewIngredient] = useState({ name: '' })

  function handleAddIngredient() {
    const newIngredientIsEmpty = newIngredient.name === ''

    const containsIngredient = dish.ingredients.some(
      (ingredient) =>
        ingredient.name.toLowerCase() === newIngredient.name.toLowerCase(),
    )

    const containsNumber =
      newIngredient.name.replace(/\d/g, '').length !== newIngredient.name.length
    const containsSpecialCharacters = regexSpecialCharacter.test(
      newIngredient.name,
    )

    // TODO: alterar para mensagem em baixo do input ao invés de um toast nas próximas versões
    if (newIngredientIsEmpty)
      return toast.info('Informe o ingrediente antes de adicionar.')
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
        { name: newIngredient.name.replace(/\s+$/, '') },
      ],
    }))
    setNewIngredient({ name: '' })
  }
  function handleRemoveIngredient(deleted) {
    setDish((prevState) => ({
      ...prevState,
      ingredients: prevState.ingredients.filter(({ name }) => name !== deleted),
    }))
  }

  function handleNewIngredient(e) {
    const { value } = e.target

    if (validateInput(value)) {
      setNewIngredient({ name: value })
    }
  }

  function handleChange(e) {
    setDish({ ...dish, [e.target.name]: e.target.value })
  }

  function handleInputImage(e) {
    const picture_ = event.target.files[0]
    setDishPicture(picture_)
    setDish((prevState) => ({ ...prevState, picture: picture_ }))
  }

  function handleInputCategory(item) {
    setDish((prevState) => ({ ...prevState, category_id: item }))
  }

  function handleCategorySelected() {
    if (!isNew) {
      const category = categories.find(
        (item) => item.id === dishData.category_id,
      )
      return [category.id, category.name]
    }
    return [categories[0].id, categories[0].name]
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (newIngredient.name)
      return toast.info('Ingrediente informado não foi adicionado.')

    if (dish.ingredients.length === 0)
      return toast.info('Informe pelo menos um ingrediente.')

    // const formattedIngrediets = dish.ingredients.map((item) => ({
    //   name: item,
    // }))

    try {
      const formData = new FormData()
      formData.append('picture', dish.picture)
      formData.append('name', dish.name)
      formData.append('category_id', dish.category_id)
      formData.append('ingredients', JSON.stringify(dish.ingredients))
      formData.append('price', dish.price)
      formData.append('description', dish.description)

      // console.log([...formData])
      // console.log(formData.get('ingredients'))
      if (!isNew) {
        await toast.promise(
          api.put(`/dish/${params.id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }),
          {
            pending: 'Por favor aguarde...',
            success: 'Prato editado sucesso!',
            ...toastConfig,
          },
        )
      } else {
        await toast.promise(
          api.post('/dish', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }),
          {
            pending: 'Por favor aguarde...',
            success: 'Prato cadastrado com sucesso!',
            ...toastConfig,
          },
        )
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.description)
      }
    }
  }

  async function handleDelete(e) {
    e.preventDefault()

    try {
      if (!isNew) {
        if (confirm('Tem certeza que deseja excluir este prato?')) {
          await toast.promise(api.delete(`/dish/${params.id}`), {
            pending: 'Por favor aguarde...',
            success: 'Prato deletado com sucesso.',
            ...toastConfig,
          })
        }
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.description)
      }
    }
  }

  useEffect(() => {
    async function fetchCategoryOptions() {
      try {
        const response = await toast.promise(api.get('/category'), {
          ...toastConfig,
        })
        setCategories(response.data)
      } catch (error) {
        if (error.response) toast.error(error.response.data.description)
        else toast.error('Erro ao tentar carregar categorias.')
      }
    }
    fetchCategoryOptions()
  }, [])
  return (
    <Container onSubmit={handleSubmit}>
      {!isNew ? <h1>Editar Prato</h1> : <h1>Novo prato</h1>}
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
              <span>
                {!dishPicture.name
                  ? removeHashFileName(dishPicture)
                  : dishPicture.name}
              </span>
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
          value={dish.name}
          onChange={handleChange}
          required
        />
        {categories.length > 0 && (
          <Select
            options={categories}
            selected={handleCategorySelected()}
            labelName={'Categoria'}
            onChange={handleInputCategory}
          />
        )}
      </Col3>
      <Col2>
        <WrapperAddIngredients>
          <label>Ingredientes</label>
          <IngredientsArea>
            {dish.ingredients.map((ingredient, index) => {
              return (
                <AddIngredients
                  key={index}
                  value={ingredient.name}
                  onClick={() => handleRemoveIngredient(ingredient.name)}
                />
              )
            })}
            <AddIngredients
              isNew
              placeholder="Adicionar"
              onChange={(e) => handleNewIngredient(e)}
              value={newIngredient.name}
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
          value={currencyInputFormatter(dish.price, 'number')}
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
        value={dish.description}
        onChange={handleChange}
        required
      />
      <Buttons>
        {!isNew && <Button title="Excluir prato" onClick={handleDelete} />}
        <Button type="submit" title="Salvar Alterações" />
      </Buttons>
    </Container>
  )
}
