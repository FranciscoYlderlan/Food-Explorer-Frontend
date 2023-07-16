import { useState, createContext, useContext, useEffect } from 'react'
import { api } from '../services/api'
import decode from 'jwt-decode'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toastConfig } from '../services/toast'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  // const [search, setSearch] = useState('')

  // function isObjectInLocalStorage(key) {
  //   const storedValue = localStorage.getItem(key)

  //   //Se o valor não existir no localStorage ou for igual a null, o objeto não existe
  //   return storedValue !== null
  // }

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

  useEffect(() => {
    const user = localStorage.getItem('@food-explorer:user')
    const token = localStorage.getItem('@food-explorer:token')
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    setData({
      user: JSON.parse(user),
      token,
    })
  }, [])
  return (
    <AuthContext.Provider
      value={{
        signIn,
        isAnAdmin,
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
