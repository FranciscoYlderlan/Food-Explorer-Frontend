import {
  Container,
  Logo,
  OptionsIn,
  OptionsOut,
  Links,
  CircleIcon,
  ButtomContainer,
} from './styles'
import { Button } from '../Button'
import { Input } from '../Input'
import { TextLink } from '../TextLink'
import { Squash as Hamburger } from 'hamburger-react'
import { Receipt, SignOut, MagnifyingGlass } from '@phosphor-icons/react'

import Polygon from '../../assets/Polygon1.svg'

import { useState, useEffect } from 'react'

export function Header({ handleMenuClick }) {
  const [isOpen, setIsOpen] = useState(false)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  function checkedOnchangeWindowSize() {
    const width = window.innerWidth
    setWindowWidth(width)
  }
  function handleIsOpen() {
    localStorage.setItem('@food-explorer:isActive', !isOpen)
    setIsOpen(!isOpen)
    handleMenuClick()
  }
  window.addEventListener('resize', checkedOnchangeWindowSize)

  useEffect(() => {
    const isActive = localStorage.getItem('@food-explorer:isActive')
    setIsOpen(JSON.parse(isActive))
  }, [])

  return (
    <Container>
      {windowWidth < 1024 && (
        <Hamburger toggled={isOpen} toggle={handleIsOpen} />
      )}
      <Logo>
        <img src={Polygon} alt="Logomarca" />
        <h3>food explorer</h3>
      </Logo>

      {windowWidth >= 1024 && (
        <>
          <Input
            icon={MagnifyingGlass}
            placeholder="Busque por pratos ou ingredientes"
          />
          <TextLink title="Meus Favoritos" />
          <TextLink title="Histórico" />
          {/* TODO: trocar para carrinho */}
          <Button icon={Receipt} title="Pedidos (0)"></Button>
        </>
      )}

      {windowWidth < 1024 && (
        <>
          {isOpen ? (
            <OptionsIn isOpen={isOpen && windowWidth <= 1024}>
              <Input
                icon={MagnifyingGlass}
                placeholder="Busque por pratos ou ingredientes"
              />
              <Links>
                <TextLink title="Meus Favoritos" />
                <TextLink title="Histórico de pedidos" />
                <TextLink title="Sair" />
              </Links>
            </OptionsIn>
          ) : (
            <OptionsOut isOpen={isOpen && windowWidth <= 1024}>
              <Input
                icon={MagnifyingGlass}
                placeholder="Busque por pratos ou ingredientes"
              />
              <Links>
                <TextLink title="Meus Favoritos" />
                <TextLink title="Histórico de pedidos" />
                <TextLink title="Sair" />
              </Links>
            </OptionsOut>
          )}
        </>
      )}
      {windowWidth < 1024 ? (
        <ButtomContainer>
          <CircleIcon>
            <span>0</span>
          </CircleIcon>
          {/* TODO: trocar para carrinho */}
          <Receipt size={40} />
        </ButtomContainer>
      ) : (
        <ButtomContainer>
          <SignOut size={40} />
        </ButtomContainer>
      )}
    </Container>
  )
}
