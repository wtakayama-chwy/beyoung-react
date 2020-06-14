import React, { useState, useEffect, useCallback } from 'react'
import { FormattedNumber } from 'react-intl'
import styled from 'styled-components'

// Helpers
import { invertColor, textColor } from '../Themes/theme'
import { spacing } from '../Helpers/spacing'
import { mediaQuery } from '../Helpers/mediaQuery'
// Components
import LinkWrapper from '../../services/LinkWrapper'
import UserNotFound from '../Errors/UserNotFound'
import UserWelcome from '../UserWelcome/UserWelcome'
import Button from '../Button/StyledButton'
import ApiService from '../../services/api'
import Loading from '../Loading/Loading'

const StyledPedido = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    border-radius: 0.4em;
    margin: 1em;
    padding: 2em;
    min-width: 30em;
    background: ${invertColor};    
    @media ${mediaQuery.tablet} {
        min-width: 90%;
        padding: 1em;
        margin: 0.4em;
    }

    h3 {
        margin: 0 auto;
        margin-bottom: -0.5em;
        text-transform: uppercase;
    }

    h4 {
        font-weight: 600;
    }

    .pedido {
        margin: 0 auto;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .centeredButton {
        margin: 0 auto;
        button {
            margin-top: 2em;            
        }
    }
`

const StyledSearchBar = styled.input`
    
    background: transparent;
    min-width: ${spacing.container};
    margin: 1em 0;
    height: 42px;
    border-radius: 3px;
    border: 1px solid #646464;
    box-sizing: border-box;
    padding: 0.8em;
    color: ${textColor};
    :focus {
        outline: none;
    }
    @media ${mediaQuery.mobile} {
        min-width: ${spacing.containerMobile};
    }
    
`

const Pedido = (props) => {

    const apiService = ApiService
    const user = props.match.params.user
    const [name, setName] = useState('')
    const [pedidos, setPedidos] = useState([])
    const [validRes, setValidRes] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [isFiltered, setIsFiltered] = useState(false)
    const [loading, setLoading] = useState(true)

    const handleChange = e => {
        if (e.target.value) {
            setSearchTerm(e.target.value)
            setIsFiltered(true)
        } else {
            setIsFiltered(false)
        }
    }

    const getPedidos = useCallback(
        () => {
            setLoading(true)
            setTimeout(() => {
                apiService.ListPedidos(user)
                    .then(data => {
                        setPedidos(data)
                        setName(data[0].name)
                        setValidRes(true)
                        setLoading(false)
                    })
                    .catch(err => {
                        setValidRes(false)
                        setLoading(false)
                    })
            }, 300);
        },
        [apiService, user],
    )

    useEffect(() => {
        getPedidos()
    }, [getPedidos])

    useEffect(() => {
        let ids = pedidos.map(pedido => {
            return pedido.id
        })
        let results = ids.filter(id => {
            return String(id).includes(searchTerm)
        })
        let pResults = pedidos.filter(pedido => results.includes(pedido.id))
        setSearchResults(pResults)
    }, [searchTerm, pedidos])

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {!validRes && (
                        <UserNotFound />
                    )}
                    {name && (
                        <UserWelcome name={name} />
                    )}
                    <StyledSearchBar
                        type="text"
                        name="searchbar"
                        placeholder="Buscar pedido"
                        onChange={handleChange}
                    />
                    {pedidos && !isFiltered ? (
                        pedidos.map(pedido => (
                            <StyledPedido key={pedido.id}>
                                <h3>Número do Pedido</h3>
                                <h4 className="pedido">{pedido.id}</h4>
                                <div>
                                    <h4>Data da Compra</h4>
                                    <time>{pedido.date}</time>
                                </div>
                                <div>
                                    <h4>Status</h4>
                                    <p>{pedido.status}</p>
                                </div>
                                <div>
                                    <h4>Total</h4>
                                    <p><FormattedNumber style={`currency`} currency="BRL" value={pedido.total} /></p>
                                </div>
                                <LinkWrapper className="centeredButton" to={`/pedidos/${user}/detalhes/${pedido.id}`}>
                                    <Button>VER COMPLETO</Button>
                                </LinkWrapper>
                            </StyledPedido>
                        ))
                    ) : (
                            searchResults.map(pedido => (
                                <StyledPedido key={pedido.id}>
                                    <h3>Número do Pedido</h3>
                                    <h4 className="pedido">{pedido.id}</h4>
                                    <div>
                                        <h4>Data da Compra</h4>
                                        <time>{pedido.date}</time>
                                    </div>
                                    <div>
                                        <h4>Status</h4>
                                        <p>{pedido.status}</p>
                                    </div>
                                    <div>
                                        <h4>Total</h4>
                                        <p><FormattedNumber style={`currency`} currency="BRL" value={pedido.total} /></p>
                                    </div>
                                    <LinkWrapper className="centeredButton" to={`/pedidos/${user}/detalhes/${pedido.id}`}>
                                        <Button>VER COMPLETO</Button>
                                    </LinkWrapper>
                                </StyledPedido>
                            ))
                        )}
                </>
                )}

        </>
    )
}
export default Pedido