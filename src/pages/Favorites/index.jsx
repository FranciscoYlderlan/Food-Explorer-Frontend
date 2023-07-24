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

  async function handleRemoveFavorite(id) {
    try {
      await toast.promise(api.patch(`/favorite_dishes/${id}`), {
        pending: 'Por favor aguarde...',
        ...toastConfig,
      })
      fetchSearchFavorites()
    } catch (error) {
      if (error.response) toast.error(error.response.data.description)
      else toast.error('Erro ao tentar favoritar prato.')
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
            <span>
              <h2>Meus Favoritos</h2>
              {favorites.length === 0 && (
                <p>Nenhum prato adicionado como favorito</p>
              )}
            </span>
            <ListItemsStyled>
              {favorites.length > 0 &&
                favorites.map((dish, index) => (
                  <PurchaseItem
                    key={index}
                    item={dish}
                    isFavoritePage
                    removeItem={() => {
                      handleRemoveFavorite(dish.id)
                    }}
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
