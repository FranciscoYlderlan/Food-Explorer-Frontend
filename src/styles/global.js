import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    :root {
        font-size: 62.5%;
    }
    
    body {

        height: 100vh;

        font-size: 1.6rem;
        
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        #root {
            width: 100%;
            height: 100%;
        }
    }
/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #4d585e transparent;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #4d585e;
    border-radius: 10px;
    /* border: 3px solid #ffffff; */
  }
    button, select, a, textarea, input, link {
        font-size: 1.6rem;
    }

`
