import { Container, TextLinkStyled } from './styles'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { FormDish } from '../../components/FormDish'

import { PiCaretLeftBold } from 'react-icons/pi'

import { useState, useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { toast } from 'react-toastify'
import { toastConfig } from '../../services/toast'

import { api } from '../../services/api'

export function Update() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [dish, setDish] = useState(null)
  const navigate = useNavigate()
  const params = useParams()

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
  useEffect(() => {
    localStorage.setItem('@food-explorer:isActive', false)

    async function fetchSearchDish() {
      try {
        const response = await toast.promise(api.get(`/dish/${params.id}`), {
          pending: 'Por favor aguarde...',
          ...toastConfig,
        })
        setDish(response.data)
      } catch (error) {
        if (error.response) toast.error(error.response.data.description)
        else toast.error('Erro ao tentar carregar informações do prato.')
      }
    }

    fetchSearchDish()
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
            {dish && <FormDish dishData={dish} />}
          </>
        )}
      </Main>
      <Footer />
    </Container>
  )
}
