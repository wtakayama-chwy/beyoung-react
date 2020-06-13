import styled from 'styled-components'
// Helpers
import { colors } from '../Helpers/colors'
import { spacing } from '../Helpers/spacing'
import { mediaQuery } from '../Helpers/mediaQuery'
// Themes
import { buttonTextColor, buttonBackgroundColor } from '../Themes/theme'

const StyledButton = styled.button`
    display: flex;
    align-items: center;   
    justify-content: center; 
    width: 100vw;
    max-width: ${spacing.container};    
    min-height: 42px;
    padding: 0.5em 1em;
    border: none;
    border-radius: 0.1em;
    cursor: pointer;
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-align: center;
    color: ${buttonTextColor};
    background: ${buttonBackgroundColor};

    @media ${mediaQuery.mobile} {
        max-width: ${spacing.containerMobile};
    }
    :focus {
        outline: none;    
    }
    :hover {
        background: ${colors.gray};
    }
`;

export default StyledButton;