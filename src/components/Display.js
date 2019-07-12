import React, {useContext} from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import Icon from "./Icon/index";
import {AppContext} from "../AppContext";
import CurrentConditions from "./CurrentConditions";

const DisplayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const IconWrapper = styled.div`
    width: 14vw;
`;

const StyledButton = styled.button`
    background: "white";
    color: "#8697cb";
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #8697cb;
    border-radius: 3px;
    transition-duration: 0.4s;
    &:hover {
        color: white;
        background: #8697cb;
    }
`;

const TemperatureText = styled.div`
    display: flex;
    font-size: 10em;
`;

const TemperatureAndIconWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 40vw;
`;

const DegreeSymbol = styled.span`
    font-size: 0.5em;
`;

const AdditionalDetailsWrapper = styled.div`
    width: 40vw;
    display: flex;
    justify-content: space-around;
    align-items: baseline;
`;

const Text = styled.p`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    padding: ${props => props.padding};
    width: fit-content;
    margin: 0;
`;

const Display = ({history}) => {
    const [{conditions, icon}, setState] = useContext(AppContext);

    return (
        <DisplayWrapper>
            <TemperatureAndIconWrapper>
                <IconWrapper>
                    <Icon name={icon}/>
                </IconWrapper>
                <TemperatureText>{conditions.temperature}<DegreeSymbol>°</DegreeSymbol></TemperatureText>
            </TemperatureAndIconWrapper>
            <AdditionalDetailsWrapper>
                <Text color={"black"} fontSize={"4vh"} padding={"0 0 0 0.4em"}>
                    {conditions.summary}
                </Text>
                <Text color={"#8697cb"} fontSize={"2vh"} padding={"0"}>
                    Feels like {conditions.apparentTemperature}°
                </Text>
            </AdditionalDetailsWrapper>
            <CurrentConditions conditions={conditions}/>
            <StyledButton onClick={() => history.goBack()}>Back</StyledButton>
        </DisplayWrapper>
    )
};

export default withRouter(Display);