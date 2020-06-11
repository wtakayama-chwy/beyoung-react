import React from 'react'
import styled from 'styled-components'
import StyledButton from '../Button/StyledButton'
import StyledInput from '../Input/StyledInput'

const StyledForm = styled.form`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    height: 40vh;
    min-width: 300px;
`

const Login = () => {
  return (
    <>
        <StyledForm>
            <h1>Login</h1>
            <StyledInput />
            <StyledButton type="tertiary">Entrar</StyledButton>
        </StyledForm>
    </>
  )
}

export default Login