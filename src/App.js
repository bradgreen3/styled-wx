import React from 'react';
import Search from "./components/Search";
import Display from "./components/Display";
import {AppProvider} from "./AppContext";
import {MemoryRouter, Route} from "react-router-dom";
import Header from "./components/Header";
import styled, {createGlobalStyle} from 'styled-components';
import {Footer} from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  html, body, #root, #root>div {
    margin: 0;
    padding: 0;
    background: #f3f3f3
    height: 100%;
    width: 100%;
  }
`;

const AppWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const App = () => {
    return (
        <AppWrapper>
            <MemoryRouter styles={{width: '100%'}}>
                <GlobalStyle/>
                <Header/>
                <AppProvider>
                    <Route path="/" exact component={Search}/>
                    <Route path="/display" exact component={Display}/>
                </AppProvider>
                <Footer/>
            </MemoryRouter>
        </AppWrapper>
    );
};

export default App;
