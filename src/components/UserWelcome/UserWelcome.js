import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledWelcome = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
`

const UserWelcome = () => {
    return (
        <StyledWelcome>
            <h3>Olá, Maria!</h3>
            <Link to="">SAIR</Link>
        </StyledWelcome>
    )
}

export default UserWelcome