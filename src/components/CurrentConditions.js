import React from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";

const CurrentConditionsWrapper = styled.div`
    border: 3px solid #556080;
    min-width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const ConditionText = styled.p`
`;

const Button = styled.button`
`

const CurrentConditions = ({conditions: {temperature, dewPoint}, history}) => {
    return (
        <CurrentConditionsWrapper>
            <ConditionText>Temperature: {temperature}</ConditionText>
            <ConditionText>Dew Point: {dewPoint}</ConditionText>
            <Button onClick={() => history.goBack()}>Back</Button>
        </CurrentConditionsWrapper>
    )
};

export default withRouter(CurrentConditions);