import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import App from './App';
import { IntlProvider } from 'react-intl';

import { MyThemeProvider } from './components/Themes/ThemeContext';
import Header from './components/Header/Header';

const Wrapper = styled.div`
    /* Center Container */
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
`

ReactDOM.render(
    <MyThemeProvider>
    <IntlProvider locale={'pt-BR'}>
        <Header />
        <Wrapper>
            <App />
        </Wrapper>     
    </IntlProvider>
    </MyThemeProvider>,
    document.getElementById('root')
);