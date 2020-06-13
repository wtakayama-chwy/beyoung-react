import React, { useState } from 'react'
import LinkWrapper from '../../services/LinkWrapper'
import styled from 'styled-components'

import StyledButton from '../Button/StyledButton'
import StyledInput from '../Input/StyledInput'

import { invertColor } from '../Themes/theme'
import { spacing } from '../Helpers/spacing'

const StyledForm = styled.form`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;    
    min-width: ${spacing.container};
    height: calc(100vh - 54px);

    a { 
      text-decoration: none;
      color: ${invertColor};
    }
`

const Login = () => {

  const [email, setEmail] = useState('')

  function updateInput(value) { 
    const formattedValue = value.replace('@', '%40')
    setEmail(formattedValue) 
  }

  return (
    <>
        <StyledForm>
            <h1>Login</h1>
            <StyledInput updateInput={updateInput} type="email" label="E-mail"/>
            <LinkWrapper to={`/pedidos/${email}`}>
              <StyledButton type="tertiary">
                Entrar
              </StyledButton>
            </LinkWrapper>
        </StyledForm>
    </>
  )
}

export default Login