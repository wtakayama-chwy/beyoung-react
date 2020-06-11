import React from 'react'
import styled from 'styled-components'
import { invertColor, textColor } from '../Themes/theme'

const StyledInputDiv = styled.div`

    position: relative;
    max-width: 300px;
    width: 100%;    

    input {
        background: transparent;
        width: inherit;
        height: 42px;
        border-radius: 3px;
        border: 1px solid #646464;
        box-sizing: border-box;
        padding: 0.8em;
        color: ${textColor};
    }
    label {
        position: absolute;
        left: 0;
        bottom: 100%;
        padding: 0 0.5em;
        cursor: pointer;
        transform: translate(16px,50%);
        background: ${invertColor};
        border: 
    }
`

const StyledInput = () => {
    return (
        <>
            <StyledInputDiv>
                <input type="email"/>
                <label htmlFor="email">E-mail</label>
            </StyledInputDiv>
        </>
    )
}

export default StyledInput