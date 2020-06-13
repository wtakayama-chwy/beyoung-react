import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { textColor } from '../components/Themes/theme'

const StyledLink = styled.div`

    #link {
        text-decoration: none;
        color: ${textColor};
        :hover {
            color: #d2d2d2; 
        }
    }
`

const LinkWrapper = props =>{
    return (
        <StyledLink>
            <NavLink id="link" {...props} />
        </StyledLink>
    )
}
export default LinkWrapper