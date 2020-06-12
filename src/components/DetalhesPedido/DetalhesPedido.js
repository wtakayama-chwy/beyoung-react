import React from 'react'
import styled from 'styled-components'

import UserWelcome from '../UserWelcome/UserWelcome'

const StyledDetalhes = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    width: 300px;

    h3 {
        margin-bottom: -0.5em;
        text-transform: uppercase;
    }

    h4 {
        font-weight: 600;
    }

    div {
        width: inherit;
        hr {
            margin: 1em 0;
            color: #e2e2e2;
        }
        ul{
            li {
                display: contents;
                float: left;
            }
            label {
                float: right;
            }
        }
    }
`

const DetalhesPedido = () => {
    return (
        <>
            <UserWelcome />
            <StyledDetalhes>
                <h3>Número do Pedido</h3>
                <h4>234</h4>
                <div>
                    <h3>RESUMO DA COMPRA</h3>
                    <ul>
                        <hr/>
                        <li>1x Booster 30ml</li>
                        <label>R$199,00</label>
                        <hr/>
                    </ul>
                </div>
            </StyledDetalhes>
        </>
    )
}

export default DetalhesPedido