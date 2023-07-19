import { Container, TextLinkStyled, ListItemsStyled } from './styles'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { PurchaseItem } from '../../components/PurchaseItem'

import { PiCaretLeftBold } from 'react-icons/pi'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
import { toastConfig } from '../../services/toast'

import { api } from '../../services/api'

export function Favorites() {
  const [keyword, setKeyword] = useState('')
  const [favorites, setFavorites] = useState([])
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const navigate = useNavigate()
  function handleComeBack() {
    navigate(-1)
  }
  function checkedOnchangeWindowSize() {
    const width = window.innerWidth
    setWindowWidth(width)
  }
  window.addEventListener('resize', checkedOnchangeWindowSize)
  function handleMenuClick() {
    setIsOpenMenu(JSON.parse(localStorage.getItem('@food-explorer:isActive')))
  }
  async function fetchSearchFavorites() {
    try {
      const response = await toast.promise(
        api.get(`/favorite_dishes/?keyword=${keyword}`),
        {
          ...toastConfig,
        },
      )
      setFavorites(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data.description)
      else toast.error('Erro ao tentar carregar os pratos.')
    }
  }

  useEffect(() => {
    localStorage.setItem('@food-explorer:isActive', false)
    fetchSearchFavorites()
  }, [])
  return (
    <Container>
      <Header handleMenuClick={handleMenuClick} />
      <Main>
        {(!isOpenMenu || windowWidth > 1024) && (
          <>
            <TextLinkStyled
              title="voltar"
              icon={PiCaretLeftBold}
              onClick={handleComeBack}
            />
            <h2>Meus Favoritos</h2>
            <ListItemsStyled>
              {favorites &&
                favorites.map((dish, index) => (
                  <PurchaseItem
                    key={index}
                    item={dish}
                    isFavoritePage
                    removeItem={() => {}}
                  />
                ))}
            </ListItemsStyled>
          </>
        )}
      </Main>
      <Footer />
    </Container>
  )
}
