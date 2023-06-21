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

        width: 100vw;
        height: 100vh;

        font-size: 1.6rem;
        
        /* background-color: ${({ theme }) => theme.COLORS.DARK_400}; */
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        
    }


`
