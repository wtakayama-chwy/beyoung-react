import React from 'react'
import styled from 'styled-components'

import { mediaQuery } from '../Helpers/mediaQuery'

const StyledDeliveryData = styled.div `
    margin-top: 2em;  
    width: 30%;
    display: flex;
    flex-flow: column;
    text-align: right;
    @media ${mediaQuery.mobile} {
        width: 90%;
        margin: 0 auto;
        text-align: center;
    }
       
    h4 {
        text-transform: uppercase;     
    }
    p {
        line-height: 1.2em;   
        padding: 0;
    }
`

const DeliveryData = (detalhes) => {

    const address = detalhes.address
    const paymentMethod = detalhes.payment_method

    return (
        <StyledDeliveryData>
            {address && (
                <>
                    <h4>Entregar em:</h4>
                    <p>{address.street}, {address.number}</p>
                    <p>{address.city}, {address.state} - {address.postcode}</p>
                    <h4>Forma de pagamento:</h4>
                    <p>{paymentMethod}</p>
                </>
            )}
        </StyledDeliveryData>
    )
}

export default DeliveryData