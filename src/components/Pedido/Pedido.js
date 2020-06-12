import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { invertColor } from '../Themes/theme'

import UserWelcome from '../UserWelcome/UserWelcome'
import Button from '../Button/StyledButton'

const StyledPedido = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    border: 1px solid black;
    padding: 2em;
    min-width: 20em;
    background: ${invertColor};

    h3 {
        margin-bottom: -0.5em;
        text-transform: uppercase;
    }

    h4 {
        font-weight: 600;
    }
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    button {
        margin-top: 2em;
    }
`

const Pedido = () => {
    return (
        <>
            <UserWelcome />
            <StyledPedido>
                <h3>Número do Pedido</h3>
                <h4>234</h4>
                <div>
                    <h4>Data da Compra</h4>
                    <time>24/05/2020</time>
                </div>
                <div>
                    <h4>Status</h4>
                    <p>Separando</p>
                </div>
                <div>
                    <h4>Total</h4>
                    <p>R$420,00</p>
                </div>
                <Link to="/pedidos/detalhes">
                    <Button type="tertiary">VER COMPLETO</Button>
                </Link>
            </StyledPedido>
        </>
    )
}
export default Pedido