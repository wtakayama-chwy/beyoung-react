import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MyThemeProvider } from './components/Themes/ThemeContext';
import Header from './components/Header/Header';
import styled from 'styled-components';

const Wrapper = styled.div`
    /* Center Container */
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
`

ReactDOM.render(
    <MyThemeProvider>   
        <Header />
        <Wrapper>
            <App />
        </Wrapper>     
    </MyThemeProvider>,
    document.getElementById('root')
);