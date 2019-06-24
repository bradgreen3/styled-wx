import React, {useContext} from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {AppContext} from "../AppContext";

const DisplayWrapper = styled.div`
`;

const Display = () => {

    const [state, setState] = useContext(AppContext);

    return (
        <DisplayWrapper>
            {state.icon}
        </DisplayWrapper>
    )
};

export default withRouter(Display);