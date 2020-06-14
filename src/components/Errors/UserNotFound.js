import React from 'react'
import styled from 'styled-components'
import { FaArrowLeft as Icon } from 'react-icons/fa'
import LinkWrapper from '../../services/LinkWrapper'
import { spacing } from '../Helpers/spacing'

const StyledUser = styled.section`
    text-align: center;
    max-width: ${spacing.container};
    h2 {        
        line-height: 1.2em;
    }
    .link {
        margin-top: 0.8em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const UserNotFound = () => {
    return (
        <StyledUser>            
            <LinkWrapper className='link' to='/'>
                <Icon color='#e65d5d' />
                <h3 style={{ color: '#e65d5d' }}>Voltar</h3>
            </LinkWrapper>
            <h2>Usuário não encontrado</h2>
        </StyledUser>
    )
}

export default UserNotFound