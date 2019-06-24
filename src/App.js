import React from 'react';
import {MemoryRouter, Route} from 'react-router-dom';
import Search from "./components/Search";
import Display from "./components/Display";
import {AppProvider} from "./AppContext";

const App = () => {
    return (
        <MemoryRouter>
            <AppProvider>
                <Route path="/" exact component={Search}/>
                <Route path="/display" exact component={Display}/>
            </AppProvider>
        </MemoryRouter>
    );
};

export default App;
