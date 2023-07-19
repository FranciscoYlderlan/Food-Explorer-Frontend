import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    :root {
      --toastify-color-dark: ${({ theme }) => theme.COLORS.DARK_200};

        --toastify-color-info: ${({ theme }) => theme.COLORS.CAKE_100};
        --toastify-color-success: ${({ theme }) => theme.COLORS.MINT};
        --toastify-color-warning: ${({ theme }) => theme.COLORS.CARROT_100};
        --toastify-color-error: ${({ theme }) => theme.COLORS.TOMATO_300};
        
        --toastify-font-family: 'Poppins';
        --toastify-text-color-dark: ${({ theme }) => theme.COLORS.LIGHT_300};


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
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
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
