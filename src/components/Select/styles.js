import styled from 'styled-components'
import { Dot } from '../Dot'

export const CustomSelect = styled.div`
  position: relative;
  display: inline-block;
`

export const SelectSelected = styled.div`
  background-color: #f1f1f1;
  padding: 8px 16px;
  cursor: pointer;
`

export const SelectOptions = styled.ul`
  position: absolute;
  background-color: #f1f1f1;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: ${({ open }) => (open ? 'block' : 'none')};
`

export const SelectOption = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  position: relative;
`

export const Icon = styled.span`
  display: inline-block;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 8px;
`

export const IconRed = styled(Dot)`
  background-color: red;
`

export const IconBlue = styled(Dot)`
  background-color: blue;
`

export const IconGreen = styled(Dot)`
  background-color: green;
`

export const Container = styled.div``
