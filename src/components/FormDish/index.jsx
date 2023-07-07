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
export function FormDish({ children, isNew }) {
  return (
    // TODO: Adicionar required nos inputs
    <Container>
      {isNew ? <h1>Novo prato</h1> : <h1>Editar Prato</h1>}
      <Col3>
        <InputFile
          labelPlaceholder="Imagem do prato"
          placeholder="Selecione imagem"
          errorMessage="Este campo é obrigatório."
          type="file"
        >
          <span>
            <UploadSimple size={32} />
            <span>Selecione imagem</span>
          </span>
        </InputFile>
        <Input
          labelPlaceholder="Nome"
          placeholder="Exemplo: Salada Ceasar"
          type="text"
          errorMessage="Este campo é obrigatório."
        />
        <Select
          options={['Refeições', 'Sobremesas', 'Bebidas']}
          selected="Bebidas"
          labelName={'Categoria'}
        />
      </Col3>
      <Col2>
        <WrapperAddIngredients>
          <label>Ingredientes</label>
          <IngredientsArea>
            <AddIngredients value="Pão" />
            <AddIngredients isNew placeholder="Adicionar" />
          </IngredientsArea>
        </WrapperAddIngredients>
        <Input
          labelPlaceholder="Preço"
          placeholder="R$ 00,00"
          type="number"
          step="0.01"
          errorMessage="Informe valores numéricos."
        />
      </Col2>
      <TextArea
        labelPlaceholder="Descrição"
        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
        name="message"
        errorMessage="Este campo é obrigatório."
      />
      <Buttons>
        {!isNew && <Button title="Excluir prato" />}
        <Button title="Salvar Alterações" />
      </Buttons>
    </Container>
  )
}
