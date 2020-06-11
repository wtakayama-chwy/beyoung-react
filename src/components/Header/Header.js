import React from 'react'
import styled from 'styled-components'
import { colors } from '../Helpers/colors'
import logo from '../../assets/logo/beyoung-logo.png'

const StyledHeader = styled.header`
    height: 54px;
    width: 100%;
    position: sticky;
    background-color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        height: 30px;
    }
`

function Header() {
  return (
    <>
        <StyledHeader>
            <img src={logo} alt="logo beyoung"/>
        </StyledHeader>
    </>
  )
}

export default Header;