import { useState, createContext, useContext, useEffect } from 'react'
import { api } from '../services/api'
import decode from 'jwt-decode'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toastConfig } from '../services/toast'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [orderQty, setOrderQty] = useState([])
  // const [search, setSearch] = useState('')

  async function signIn({ email, password }) {
    try {
      const response = await toast.promise(
        api.post('/sessions', { email, password }),
        {
          pending: 'Por favor aguarde...',
          ...toastConfig,
        },
      )
      const { user, token } = response.data

      localStorage.setItem('@food-explorer:user', JSON.stringify(user))
      localStorage.setItem('@food-explorer:token', token)

      localStorage.setItem('@food-explorer:order', JSON.stringify([]))
      setOrderQty(0)

      api.defaults.headers.common.Authorization = `Bearer ${token}`

      setData({ user, token })
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.description)
      }
    }
  }
  function signOut() {
    const rootUrl = window.location.protocol + '//' + window.location.host + '/'
    window.location.href = rootUrl

    localStorage.removeItem('@food-explorer:user')
    localStorage.removeItem('@food-explorer:token')
    setData({})
  }

  function isAnAdmin() {
    const token = localStorage.getItem('@food-explorer:token')
    if (token) {
      const decodedToken = decode(token)

      const isAdmin = decodedToken ? decodedToken.isAdmin : null
      return isAdmin
    }
  }
  // function handleSearchChange() {
  //   if (search) {
  //   }
  // }

  function handleAddItem({ id, qty, amount }) {
    const currentOrder = JSON.parse(
      localStorage.getItem('@food-explorer:order'),
    )
    const existingItem = currentOrder.find((item) => item.id === id)

    if (existingItem) {
      existingItem.qty += qty
      existingItem.amount += amount
      localStorage.setItem('@food-explorer:order', JSON.stringify(currentOrder))
    } else {
      localStorage.setItem(
        '@food-explorer:order',
        JSON.stringify([...currentOrder, { id, qty, amount }]),
      )
    }

    setOrderQty(
      JSON.parse(localStorage.getItem('@food-explorer:order')).reduce(
        (accumulator, current) => accumulator + current.qty,
        0,
      ),
    )
  }

  useEffect(() => {
    const user = localStorage.getItem('@food-explorer:user')
    const token = localStorage.getItem('@food-explorer:token')
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    setData({
      user: JSON.parse(user),
      token,
    })

    setOrderQty(
      JSON.parse(localStorage.getItem('@food-explorer:order')).reduce(
        (accumulator, current) => accumulator + current.qty,
        0,
      ),
    )
  }, [])
  return (
    <AuthContext.Provider
      value={{
        signIn,
        isAnAdmin,
        handleAddItem,
        orderQty,
        signOut,
        user: data.user,
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
