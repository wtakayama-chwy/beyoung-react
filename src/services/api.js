const urlBase = 'http://localhost:5000'

const consumeApi = (param = '', method = 'GET', body) => {
    return fetch(`${urlBase}/${param}`, {
        method,
        headers: {
            'content-type': 'application/json',
        },
        body
    })
        .then(res => ApiService.HandleError(res))
        .then(res => res.json())
}

const ApiService = {

    ListPedidos: (email) => consumeApi(`${email}/orders.json`),

    ListDetalhes: (email, pedido) => consumeApi(`${email}/${pedido}.json`),

    HandleError: res => {
        if(!res.ok) {
            throw new Error(res.responseText)
        }
        return res
    }
}

export default ApiService