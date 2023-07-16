import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/auth'

import { AuthRoutes } from './auth.routes'
import { AppUserRoutes } from './app.user.routes'
import { AppAdminRoutes } from './app.admin.routes'

export function Routes() {
  const { user, isAnAdmin } = useAuth()
  // console.log(user, isAnAdmin())
  return (
    <BrowserRouter>
      {!user ? (
        <AuthRoutes />
      ) : !isAnAdmin() ? (
        <AppUserRoutes />
      ) : (
        <AppAdminRoutes />
      )}
    </BrowserRouter>
  )
}
