import React from 'react';

const NotFound = () => {

    const styleText = {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        height: '70vh',
        paddingTop: '2em',
        lineHeight: '1.5em'
    }

    return (
        <>
            <h1 style={styleText}>Página Não Encontrada</h1>
        </>
    );
}

export default NotFound;