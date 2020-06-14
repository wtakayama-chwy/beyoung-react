import React from 'react'
import styled from 'styled-components'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'
import { colors } from '../Helpers/colors'
import { textColor } from '../Themes/theme'
import { mediaQuery } from '../Helpers/mediaQuery'

const StyledTrackPedido = styled.div `
    width: 40%;
    margin-top: 2em; 

    @media ${mediaQuery.mobile} {
        width: 90%;
        margin: 1.5em auto;
        text-align: center;
    }
    h3 {
        text-transform: uppercase;
    }
    ul {
        margin-top: 1em; 
        li {
            display: flex;
            align-items: center;
            padding: 0.4em 0;
            font-weight: 600;
            span {
                display: block;
                float: left;
                margin-right: 0.4em;
            }
            label {
                text-transform: uppercase;
            }
        }
    }
`

const TrackPedido = ({status}) => {

    const allStatus = [
        {pos: 1, label: 'Aguardando pagamento'},
        {pos: 2, label: 'Pagamento aprovado'},
        {pos: 3, label: 'Pedido em separação'},
        {pos: 4, label: 'Pedido em transporte'},
        {pos: 5, label: 'Pedido entregue'},
    ]

    return (
        <StyledTrackPedido>
            <h3>ACOMPANHE SEU PEDIDO</h3>
            <ul>
                {allStatus.map(el => (
                    <li key={el.pos}>
                        {(status === el.label) ?  (
                            <span><FaCheckCircle color={colors.green}/></span>
                        ) : (
                            <span><FaRegCircle color={colors.gray} /></span>
                        )}
                        <label>{el.label}</label>
                    </li>                
                ))}
            </ul>
        </StyledTrackPedido>
    )
}

export default TrackPedido