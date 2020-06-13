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
       
    h5 {
        text-transform: uppercase;        
    }
    p {
        padding: 0;
        font-size: 0.8em;
    }
`

const DeliveryData = (detalhes) => {

    const address = detalhes.address
    const paymentMethod = detalhes.payment_method

    return (
        <StyledDeliveryData>
            {address && (
                <>
                    <h5>Entregar em:</h5>
                    <p>{address.street}, {address.number}</p>
                    <p>{address.city}, {address.state} - {address.postcode}</p>
                    <h5>Forma de pagamento:</h5>
                    <p>{paymentMethod}</p>
                </>
            )}
        </StyledDeliveryData>
    )
}

export default DeliveryData