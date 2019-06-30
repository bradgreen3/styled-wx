import React from 'react';
import Search from "./components/Search";
import Display from "./components/Display";
import {AppProvider} from "./AppContext";
import {MemoryRouter, Route} from "react-router-dom";
import Header from "./components/Header";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f3f3f3
  }
`;

const App = () => {
    return (
        <MemoryRouter styles={{width: '100%'}}>
            <GlobalStyle/>
            <Header/>
            <AppProvider>
                <Route path="/" exact component={Search}/>
                <Route path="/display" exact component={Display}/>
            </AppProvider>
        </MemoryRouter>
    );
};

export default App;
