import React from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltUp} from "@fortawesome/free-solid-svg-icons";

const CurrentConditionsWrapper = styled.div`
    background: #fff;
    width: 40vw;
    display: flex;
    margin: 10vh 0 3vh 0;
`;

const CurrentConditionsUlWrapper = styled.div`
    margin: 0;
    width: 50%;
    display: flex;
    align-items: center;
`;

const CurrentConditionsUl = styled.ul`
    padding-left: 0;
    list-style: none;
    line-height: 1.5em;
    margin: 0;
`;

const ArrowWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65%;
    flex-direction: column;
`;

const Arrow = styled(FontAwesomeIcon)`
    animation: spin 0.5s linear 1;
    animation-fill-mode: forwards;
    
    @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(${props => props.direction}deg);}
    }
`;

const ConditionText = styled.li`
    width: 100%;
    color: #73777a;
`;

const WindText = styled.p`
    margin: 0;
    text-align: center; 
`;

const CurrentConditions = ({conditions: {dewPoint, humidity, windSpeed, windGust, pressure, uvIndex, cloudCover, visibility, windBearing}}) => {

    return (
        <CurrentConditionsWrapper>
            <ArrowWrapper>
                <Arrow icon={faLongArrowAltUp} color={"#8697cb"} direction={windBearing} size={"5x"}/>
                <WindText>Winds of {windSpeed} mph, gusting to {windGust} mph</WindText>
            </ArrowWrapper>
            <CurrentConditionsUlWrapper>
                <CurrentConditionsUl>
                    <ConditionText>Dew Point: {dewPoint}°</ConditionText>
                    <ConditionText>Relative Humidity: {humidity}%</ConditionText>
                    <ConditionText>Pressure: {pressure} mb</ConditionText>
                    <ConditionText>UV Index: {uvIndex}</ConditionText>
                    <ConditionText>Cloud Cover: {cloudCover}%</ConditionText>
                    <ConditionText>Visibility: {visibility} miles</ConditionText>
                </CurrentConditionsUl>
            </CurrentConditionsUlWrapper>
        </CurrentConditionsWrapper>
    )
};

export default withRouter(CurrentConditions);