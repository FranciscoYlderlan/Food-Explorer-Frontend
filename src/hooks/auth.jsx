import { useState, createContext, useContext } from 'react'
import { api } from '../services/api'
import jwt_decode from 'jwt-decode'
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
          error: 'Não foi possível efetuar login.',
          ...toastConfig,
        },
      )
      const { user, token } = response.data

      api.defaults.headers.common.Authorization = `Bearer ${token}`

      const decodedToken = await jwt_decode(token)

      const isAdmin = decodedToken ? decodedToken.isAdmin : null
      console.log(isAdmin)

      setData({ user, token })
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.description)
      }
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
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
