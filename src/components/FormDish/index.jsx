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
export function FormDish({ dishData, isNew = false }) {
  const [dish, setDish] = useState({
    name: isNew ? dishData.name : '',
    ingredients: isNew ? dishData.ingredients : [],
    price: isNew ? dishData.price : '',
    description: isNew ? dishData.description : '',
  })
  const picture = isNew ? dishData.picture : ''

  const [dishFile, setDishFile] = useState(picture)

  function handleValue() {}

  function handleChange(e) {
    setDish({ ...dish, [e.target.name]: e.target.value })
  }

  function handleInputImage(e) {
    const file = event.target.files[0]
    setDishFile(file)
  }

  function handleCategorySelected(item) {
    setDish({ ...dish, category: item })
  }

  return (
    <Container>
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
            {dishFile ? (
              <span> {dishFile.name} </span>
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
            {dish.ingredients.map(({ ingredient, index }) => {
              return <AddIngredients key={index} value={ingredient} />
            })}
            <AddIngredients
              isNew
              placeholder="Adicionar"
              // onChange={(e) => handleNewTag(e)}
              // value={newTag}
              // onClick={handleAddTag}
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
        <Button title="Salvar Alterações" />
      </Buttons>
    </Container>
  )
}
