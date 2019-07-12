import React, {useContext, useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import secrets from '../secrets';
import {withRouter} from 'react-router-dom';
import {AppContext} from "../AppContext";
import Icon from "./Icon";
import Autosuggest from 'react-autosuggest';
import {AutoSuggestTheme} from "../util";

const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    flex: auto;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`;

const IconWrapper = styled.div`
    width: 15em;
`;

const uuidv4 = require('uuid/v4');

const Search = ({history}) => {

    const [state, setState] = useContext(AppContext);
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [sessionToken, setSessionToken] = useState(uuidv4());

    useEffect(() => {
        let timerID = setTimeout(() => setSessionToken(uuidv4()), 10000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    const onClickHandler = (placeId) => {
        axios.get(`/maps/api/place/details/json?placeid=${placeId}&fields=geometry&key=${secrets.googleKey}&sessionToken=${sessionToken}`)
            .then(({data: {result: {geometry: {location}}}}) => {
                axios.get(`/forecast/${secrets.darkskyKey}/${location.lat},${location.lng}`)
                    .then(({data: {currently}}) => {
                        setState(state => ({
                            ...state,
                            icon: currently.icon,
                            conditions: {
                                temperature: Math.round(currently.temperature),
                                dewPoint: Math.round(currently.dewPoint),
                                time: new Date(currently.time).toDateString(),
                                summary: currently.summary,
                                apparentTemperature: Math.round(currently.apparentTemperature),
                                windSpeed: Math.round(currently.windSpeed),
                                windGust: Math.round(currently.windGust),
                                windBearing: currently.windBearing,
                                humidity: currently.humidity * 100,
                                pressure: currently.pressure,
                                uvIndex: currently.uvIndex,
                                cloudCover: Math.round(currently.cloudCover * 100),
                                visibility: currently.visibility
                            }
                        }));
                        history.push('/display')
                    })
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const fetchSuggestions = (newValue) => {
        newValue.length >= 3 &&
        axios.get(`maps/api/place/autocomplete/json?input=${newValue}&types=(cities)&sessionToken=${sessionToken}&components=country:us&key=${secrets.googleKey}`)
            .then(({data: {predictions}}) => {
                setSuggestions(predictions.map(prediction => prediction = {
                    description: prediction.description,
                    placeId: prediction.place_id
                }));
            }).catch((error) => {
            console.log(error)
        })
    };

    const inputProps = {
        placeholder: 'Search location, zip...',
        value: input,
        onChange: (e, {newValue}) => {
            setInput(newValue);
            fetchSuggestions(newValue)
        }
    };

    const renderSuggestion = (suggestion) => {
        return (
            <span>
                {suggestion.description}
            </span>
        )
    };

    const getSuggestionValue = suggestion => suggestion.description;

    const onSuggestionsFetchRequested = ({value}) => {
        fetchSuggestions(value)
    };

    const clearSuggestions = () => {
        setSuggestions([]);
    };

    const onSuggestionSelected = (e, {suggestion: {placeId}}) => {
        onClickHandler(placeId)
    };

    return (
        <SearchContainer>
            <IconWrapper>
                <Icon name={"lightning"}/>
            </IconWrapper>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={clearSuggestions}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                    onSuggestionSelected={onSuggestionSelected}
                    theme={AutoSuggestTheme}
                />
        </SearchContainer>
    )
};

export default withRouter(Search);