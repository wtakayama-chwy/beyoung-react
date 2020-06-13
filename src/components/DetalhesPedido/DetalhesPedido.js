import React, { useState, useEffect, useCallback} from 'react'
import styled from 'styled-components'

import { textColor, cardBackgroundColor } from '../Themes/theme'
import { spacing } from '../Helpers/spacing'
import UserWelcome from '../UserWelcome/UserWelcome'
import ResumoCompra from './ResumoCompra'
import TrackPedido from './TrackPedido'
import DeliveryData from './DeliveryData'
import ApiService from '../../services/api'
import { mediaQuery } from '../Helpers/mediaQuery'

const StyledDetalhes = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    width: ${spacing.container};
    padding: 3em 0;
    border: 1px solid ${textColor};
    border-radius: 0.8em;
    width: 70%;
    margin: 2em 0;
    background: ${cardBackgroundColor};
    @media ${mediaQuery.mobile} {
        width: 90%;
        margin: 1em auto;
    }

    .title-pedido {
        text-transform: uppercase;
        margin-bottom: 1.5em;
    }
`

const DetalhesPedido = (props) => {

    const apiService = ApiService
    const pedido = props.match.params.pedido
    const user = props.match.params.user

    const[name, setName] = useState('')
    const[detalhes, setDetalhes] = useState([])

    const getDetalhes = useCallback(
        () => {
            apiService.ListDetalhes(user, pedido)
                .then(data => {
                    setDetalhes(data)
                    setName(data.name)
                })
        },
        [apiService, pedido, user],
    )

    useEffect(() => {
        getDetalhes()
    },[getDetalhes])

    return (
        <>
            <UserWelcome name={name}/>
            <StyledDetalhes>
                <h3 className="title-pedido">Número do Pedido: {detalhes.id}</h3>
                <ResumoCompra {...detalhes}/>
                <TrackPedido {...detalhes}/>
                <DeliveryData {...detalhes}/>
            </StyledDetalhes>
        </>
    )
}

export default DetalhesPedido