import React, {useContext} from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {AppContext} from "../AppContext";
import Icon from "./Icon/index";
import CurrentConditions from "./CurrentConditions";

const DisplayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledIcon = styled(Icon)`
    
`

const Display = () => {

    const [state, setState] = useContext(AppContext);

    return (
        <DisplayWrapper>
            <StyledIcon name={state.icon}/>
            <CurrentConditions conditions={state.conditions}/>
        </DisplayWrapper>
    )
};

export default withRouter(Display);