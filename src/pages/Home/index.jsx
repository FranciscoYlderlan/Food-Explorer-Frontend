import { Container, Frame } from './styles'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { ListItems } from '../../components/ListItems'
import { Carousel } from '../../components/Carousel'
import Macarons from '../../assets/Macarons.png'
import { useState, useEffect } from 'react'

import { toast } from 'react-toastify'
import { toastConfig } from '../../services/toast'

import { api } from '../../services/api'

export function Home() {
  const [keyword, setKeyword] = useState('')
  const [categories, setCategories] = useState([])
  const [dishes, setDishes] = useState([])
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

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
    async function handleLoadingSelectOptions() {
      try {
        const response = await toast.promise(api.get('/category'), {
          ...toastConfig,
        })
        setCategories(response.data)
      } catch (error) {
        if (error.response) toast.error(error.response.data.description)
        else toast.error('Erro ao tentar carregar categorias.')
      }
    }
    async function fetchSearchDishes() {
      try {
        const response = await toast.promise(
          api.get(`/dish/?keyword=${keyword}`),
          {
            ...toastConfig,
          },
        )
        setDishes(response.data)
      } catch (error) {
        if (error.response) toast.error(error.response.data.description)
        else toast.error('Erro ao tentar carregar os pratos.')
      }
    }
    // TODO: mudar nome da função para category
    fetchSearchDishes().then(handleLoadingSelectOptions())
  }, [])
  return (
    <Container>
      <Header handleMenuClick={handleMenuClick} />
      <Main>
        {(!isOpenMenu || windowWidth > 1024) && (
          <>
            <Frame>
              <img src={Macarons} alt="Doces macarons" />
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </Frame>
            <ListItems>
              {categories.length > 0 &&
                categories.map((category, index) => {
                  return (
                    <Section
                      key={index}
                      title={category.name}
                      hasData={dishes[category.id]}
                    >
                      {dishes && <Carousel data={dishes[category.id]} />}
                    </Section>
                  )
                })}
            </ListItems>
          </>
        )}
      </Main>
      <Footer />
    </Container>
  )
}
