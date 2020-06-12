import { createGlobalStyle } from 'styled-components'
import { mediaQuery } from './Helpers/mediaQuery'
import { backgroundColor, textColor } from './Themes/theme';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    body {
        font-family: "Open Sans", Helvetica, sans-serif, arial;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        font-size: 16px;
        font-weight: 300;
        line-height: 1.2222222222em;
        text-align: left;
        background: ${backgroundColor};
        color: ${textColor};    
        @media ${mediaQuery.mobile} {    
            width: 100%;    
        }
        h1, h2, h3, h4, h5, h6, p {
            padding: 0.5rem 0;
        }
        ul, li {
            list-style: none;
        }
    }    
`