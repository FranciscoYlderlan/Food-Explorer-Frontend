import { Container, IngredientsArea } from './styles'
import { Select } from '../Select'
import { Input } from '../Input'
import { TextArea } from '../TextArea'
import { AddIngredients } from '../AddIngredients'

export function FormDish({ children }) {
  return (
    // TODO: Adicionar required
    <Container>
      <h1>Novo prato</h1>
      <Input
        labelPlaceholder="Nome"
        placeholder="Exemplo: Salada Ceasar"
        type="text"
        errorMessage="Este campo é obrigatório."
      />
      <Input
        labelPlaceholder="Preço"
        placeholder="R$ 00,00"
        type="number"
        step="0.01"
        errorMessage="Informe valores numéricos."
      />
      <Select
        options={['Refeições', 'Sobremesas', 'Bebidas', 'Entregue']}
        selected="Bebidas"
        labelName={'Categoria'}
      />
      <IngredientsArea>
        <AddIngredients value="Pão" />
        <AddIngredients isNew placeholder="Adicionar" />
      </IngredientsArea>
      <TextArea
        labelPlaceholder="Descrição"
        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
        name="message"
        errorMessage="Este campo é obrigatório."
      />
    </Container>
  )
}
