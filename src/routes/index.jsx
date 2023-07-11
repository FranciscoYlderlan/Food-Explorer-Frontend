import { BrowserRouter } from 'react-router-dom'

import { AppAdminRoutes } from './app.admin.routes'

import { AppUserRoutes } from './app.user.routes'

import { AuthRoutes } from './auth.routes'

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  )
}
