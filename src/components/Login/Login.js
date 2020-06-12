import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import StyledButton from '../Button/StyledButton'
import StyledInput from '../Input/StyledInput'

import { invertColor } from '../Themes/theme'

const StyledForm = styled.form`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    height: 40vh;
    min-width: 300px;

    a { 
      text-decoration: none;
      color: ${invertColor};
    }
`

const Login = () => {
  return (
    <>
        <StyledForm>
            <h1>Login</h1>
            <StyledInput />
            <Link to="/pedidos">
              <StyledButton type="tertiary">
                Entrar
              </StyledButton>
            </Link>
        </StyledForm>
    </>
  )
}

export default Login