import React from 'react'
import ReactDOM from 'react-dom/client'

import { theme } from './styles/theme.js'
import GlobalStyle from './styles/global.js'
import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import { AuthProvider } from './hooks/auth.jsx'
// TODO: Alinhar todos os css organizadamente e agrupados por função
ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </ThemeProvider>,
)
