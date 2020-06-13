import React from 'react'
import styled from 'styled-components'
import LinkWrapper from '../../services/LinkWrapper'
import { spacing } from '../Helpers/spacing'
import { mediaQuery } from '../Helpers/mediaQuery'

const StyledWelcome = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${spacing.container};
    margin-top: 2em;
    @media ${mediaQuery.mobile} {
        max-width: ${spacing.containerMobile};
    }
`

const UserWelcome = ( { name } ) => {

    return (
        <StyledWelcome>
            <h3>Olá, {name}</h3>
            <LinkWrapper to="">SAIR</LinkWrapper>
        </StyledWelcome >
    )
}

export default UserWelcome