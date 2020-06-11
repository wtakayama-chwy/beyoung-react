import styled from 'styled-components'
// Helpers
import { colors } from '../Helpers/colors';
import { mediaQuery } from '../Helpers/mediaQuery';
// Themes
import { buttonTextColor } from '../Themes/theme';

const getStyle = type => {
    switch (type) {
        case 'primary': return `
            background: ${colors.primary}
        `
        case 'secondary': return `
            background: ${colors.secondary}
        `
        case 'tertiary': return `
            background: ${colors.tertiary}
        `
        default: return ``
    }
}

const StyledButton = styled.button`
    display: flex;
    align-items: center;   
    justify-content: center; 
    width: 100%;
    max-width: 300px;
    min-height: 42px;
    padding: 0.5em 1em;
    border: 0 solid ${colors.tertiary};
    cursor: pointer;
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-align: center;
    color: ${buttonTextColor};
    ${({ type }) => getStyle(type) };
    :focus {
        outline: none;    
    }
    @media ${mediaQuery.tablet} {
        height: 22px;
        margin-top: 20px;
        width: 52%;        
        padding: 2px 3.333333333333333%;
    }
`;

export default StyledButton;