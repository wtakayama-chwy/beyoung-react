import React from 'react'
import { PropagateLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
            <PropagateLoader color={'#b4b4b4'} />
        </div>
    )
}

export default Loading