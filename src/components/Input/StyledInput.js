import React from 'react'
import styled from 'styled-components'
import { invertColor, textColor } from '../Themes/theme'
import { spacing } from '../Helpers/spacing'
import { mediaQuery } from '../Helpers/mediaQuery'

const StyledInputDiv = styled.div`

    position: relative;
    max-width: ${spacing.container};
    width: 100%;    
    margin: 2em 0;

    @media ${mediaQuery.mobile} {
        max-width: ${spacing.containerMobile};
    }

    input {
        background: transparent;
        width: inherit;
        height: 42px;
        border-radius: 3px;
        border: 1px solid #646464;
        box-sizing: border-box;
        padding: 0.8em;
        color: ${textColor};
        :focus {
            outline: none;
        }
    }
    label {
        position: absolute;
        left: 0;
        bottom: 100%;
        padding: 0 0.5em;
        transform: translate(16px,50%);
        background: ${invertColor};
    }
`

const StyledInput = (props) => {

    async function updateInput(value) {
        await props.updateInput(value)
    }

    return (
        <>
            <StyledInputDiv>
                <input type={props.type} onChange={(e) => updateInput(e.target.value)}/>
                {props.label && (
                    <label htmlFor={props.type}>{props.label}</label>
                )}
            </StyledInputDiv>
        </>
    )
}

export default StyledInput