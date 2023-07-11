import { createContext, useContext } from 'react'
import { api } from '../services/api'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toastConfig } from '../services/toast'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  async function signIn({ email, password }) {
    try {
      await toast.promise(api.post('/sessions', { email, password }), {
        pending: 'Por favor aguarde...',
        error: 'Não foi possível efetuar login.',
        ...toastConfig,
      })
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.description)
      }
    }
  }

  return (
    <AuthContext.Provider value={{ signIn }}>
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
