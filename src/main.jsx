import React from 'react'
import ReactDOM from 'react-dom/client'

import { theme } from './styles/theme.js'
import GlobalStyle from './styles/global.js'
import { ThemeProvider } from 'styled-components'
import { Cart } from './pages/Cart'
// TODO: Alinhar todos os css organizadamente e agrupados por função
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Cart />
    </ThemeProvider>
  </React.StrictMode>,
)
