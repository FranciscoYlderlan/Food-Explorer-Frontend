import {
  Container,
  TextLinkStyled,
  AddItemStyled,
  ListItems,
  Text,
  Info,
  Action,
  Content,
} from './styles'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { Tag } from '../../components/Tag'

import { PiCaretLeftBold } from 'react-icons/pi'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { toastConfig } from '../../services/toast'

import { api } from '../../services/api'

import { useAuth } from '../../hooks/auth'

import { URLImageFormatter } from '../../utils/formatting.js'

import dishPlaceholder from '../../assets/placeholder-dish.svg'
import { Button } from '../../components/Button'

export function Preview() {
  const { isAnAdmin, goToHome } = useAuth()
  const [dish, setDish] = useState()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const navigate = useNavigate()
  const params = useParams()
  function handleComeBack() {
    navigate(-1)
  }
  function handleClickUpdatePage(id) {
    navigate(`/update/${id}`)
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
      <Header handleMenuClick={handleMenuClick} handleChangeInput={goToHome} />
      <Main>
        {(!isOpenMenu || windowWidth > 1024) && (
          <>
            <TextLinkStyled
              title="voltar"
              icon={PiCaretLeftBold}
              onClick={handleComeBack}
            />
            {dish && (
              <Content>
                <img
                  src={URLImageFormatter(dish.picture, dishPlaceholder)}
                  alt={dish.name}
                />
                <Info>
                  <Text>
                    <h1>{dish.name}</h1>
                    <p>{dish.description}</p>
                    <ListItems>
                      {dish.ingredients.map(({ name }, index) => {
                        return <Tag key={index} title={name} />
                      })}
                    </ListItems>
                  </Text>
                  {isAnAdmin() ? (
                    <Button
                      title="Editar prato"
                      onClick={() => handleClickUpdatePage(dish.id)}
                    />
                  ) : (
                    <Action>
                      <AddItemStyled
                        item={dish}
                        isAdmin={isAnAdmin()}
                        isPreview={true}
                      />
                    </Action>
                  )}
                </Info>
              </Content>
            )}
          </>
        )}
      </Main>
      <Footer />
    </Container>
  )
}
