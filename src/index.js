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
    height: calc(100vh - 54px); /* 54px = header height */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
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