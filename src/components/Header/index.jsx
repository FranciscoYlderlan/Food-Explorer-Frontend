import {
  Container,
  Logo,
  Text,
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

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

export function Header({
  handleMenuClick,
  handleChangeInput = () => {},
  placeholderSearch = 'Busque por pratos ou ingredientes',
  ...rest
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const { signOut, isAnAdmin, orderQty, searchKeyword } = useAuth()
  const navigate = useNavigate()

  function handleClickHistoryPage() {
    isAnAdmin() ? navigate(`/orders`) : navigate(`/orders/history`)
  }

  function handleClickFavoritePage() {
    navigate('/favorites')
  }

  function handleClickOrderPage() {
    navigate('/cart')
  }

  function handleClickCreatePage() {
    navigate('/create')
  }

  function handleClickHomePage() {
    navigate('/')
  }

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
    localStorage.setItem('@food-explorer:isActive', false)
    setIsOpen(false)
  }, [])
  // TODO: quando já tiver na página do menu fechar o menu para exibir a tela
  return (
    <Container>
      {windowWidth < 1024 && (
        <Hamburger toggled={isOpen} toggle={handleIsOpen} />
      )}
      <Logo isAdmin={isAnAdmin()} onClick={handleClickHomePage}>
        <img src={Polygon} alt="Logomarca" />
        <Text>
          <h3>food explorer</h3>
          <p>admin</p>
        </Text>
      </Logo>

      {windowWidth >= 1024 && (
        <>
          <Input
            value={searchKeyword}
            onChange={(e) => handleChangeInput(e)}
            icon={MagnifyingGlass}
            placeholder={placeholderSearch}
          />
          {!isAnAdmin() && (
            <TextLink
              title="Meus Favoritos"
              onClick={handleClickFavoritePage}
            />
          )}
          <TextLink title="Histórico" onClick={handleClickHistoryPage} />
          {!isAnAdmin() ? (
            <Button
              icon={Receipt}
              title={`Pedidos (${orderQty})`}
              onClick={handleClickOrderPage}
            />
          ) : (
            <Button title="Novo Prato" onClick={handleClickCreatePage} />
          )}
        </>
      )}

      {windowWidth < 1024 && (
        <>
          {isOpen ? (
            <OptionsIn isOpen={isOpen && windowWidth <= 1024}>
              <Input
                value={searchKeyword}
                onChange={(e) => handleChangeInput(e)}
                icon={MagnifyingGlass}
                placeholder={placeholderSearch}
              />
              <Links>
                {!isAnAdmin() ? (
                  <TextLink
                    title="Meus Favoritos"
                    onClick={handleClickFavoritePage}
                  />
                ) : (
                  <TextLink
                    title="Novo prato"
                    onClick={handleClickCreatePage}
                  />
                )}
                <TextLink
                  title="Histórico de pedidos"
                  onClick={handleClickHistoryPage}
                />
                <TextLink title="Sair" onClick={signOut} />
              </Links>
            </OptionsIn>
          ) : (
            <OptionsOut isOpen={isOpen && windowWidth <= 1024}>
              <Input
                value={searchKeyword}
                onChange={(e) => handleChangeInput(e)}
                icon={MagnifyingGlass}
                placeholder={placeholderSearch}
              />
              <Links>
                {!isAnAdmin() ? (
                  <TextLink
                    title="Meus Favoritos"
                    onClick={handleClickFavoritePage}
                  />
                ) : (
                  <TextLink
                    title="Novo prato"
                    onClick={handleClickCreatePage}
                  />
                )}
                <TextLink
                  title="Histórico de pedidos"
                  onClick={handleClickHistoryPage}
                />
                <TextLink title="Sair" onClick={signOut} />
              </Links>
            </OptionsOut>
          )}
        </>
      )}
      {windowWidth < 1024 ? (
        !isAnAdmin() ? (
          <ButtomContainer onClick={handleClickOrderPage}>
            <CircleIcon>
              <span>{orderQty}</span>
            </CircleIcon>
            <Receipt size={40} />
          </ButtomContainer>
        ) : (
          <span />
        )
      ) : (
        <ButtomContainer>
          <SignOut size={40} onClick={signOut} />
        </ButtomContainer>
      )}
    </Container>
  )
}
