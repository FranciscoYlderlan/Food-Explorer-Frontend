import { useState, createContext, useContext, useEffect } from 'react'
import { api } from '../services/api'
import decode from 'jwt-decode'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toastConfig } from '../services/toast'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

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
    localStorage.removeItem('@food-explorer:user')
    localStorage.removeItem('@food-explorer:token')
    setData({})
  }
  function isAnAdmin() {
    const notIsEmpty = Object.keys(data).length !== 0
    if (notIsEmpty) {
      const decodedToken = decode(data.token)

      const isAdmin = decodedToken ? decodedToken.isAdmin : null
      return isAdmin
    }
  }
  useEffect(() => {
    const user = localStorage.getItem('@food-explorer:user')
    const token = localStorage.getItem('@food-explorer:token')

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
