import React from 'react'
import { FormattedNumber } from 'react-intl'
import styled from 'styled-components'

const StyledResumoCompra = styled.div`    
    width: inherit;

    h3 {
        text-transform: uppercase;
    }
    hr {
        margin: 1em 0;
        color: #e2e2e2;
    }
    ul {
        li {
            display: contents;
            float: left;
        }
        label {
            float: right;
        }
    }
    div {
        padding: 0.5em 0; 

        h4 {
            display: contents;
            float: left;
        }
        label {
            float: right;
        }
    }
`

const ResumoCompra = (detalhes) => {

    const items = detalhes.items
    const freight = detalhes.freight

    return (
        <>
        {detalhes && (
            <StyledResumoCompra>
                <h3>RESUMO DA COMPRA</h3>
                <hr />
                {items && (
                    items.map(item => (
                        <ul key={item.name}>
                            <li>{item.qty}x {item.name}</li>
                            <label><FormattedNumber style={`currency`} currency="BRL" value={item.price} /></label>
                            <hr />
                        </ul>
                    ))
                )}
                {freight && (
                    <>
                    <div>
                        <h4>Prazo de entrega</h4>
                        <label>de {freight.from} a {freight.to} dias</label>
                    </div>   
                    <div>
                        <h4>Frete</h4>
                        <label><FormattedNumber style={`currency`} currency="BRL" value={freight.price} /></label>
                    </div>
                    <div>
                        <h4>Total</h4>
                        <label><FormattedNumber style={`currency`} currency="BRL" value={detalhes.total} /></label>
                    </div>
                    </>
                )}
            </StyledResumoCompra>
        )}
        </>
    )
}

export default ResumoCompra