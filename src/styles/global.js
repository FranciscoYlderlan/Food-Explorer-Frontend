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
            display: grid;

        }
    }

    button, select, a, textarea, input, link {
        font-size: 1.6rem;
    }

`
