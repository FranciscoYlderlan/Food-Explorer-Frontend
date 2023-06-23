import React from 'react'
import ReactDOM from 'react-dom/client'

import { theme } from './styles/theme.js'
import GlobalStyle from './styles/global.js'
import { ThemeProvider } from 'styled-components'

import { Button } from './components/Button/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button title="Pedidos (0)" />
    </ThemeProvider>
  </React.StrictMode>,
)
