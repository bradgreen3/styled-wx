import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import secrets from '../secrets';
import {withRouter} from 'react-router-dom';
import {AppContext} from "../AppContext";

const SearchWrapper = styled.div`
`;

const Input = styled.input`
`;

const Button = styled.button`
`;

const Search = ({history}) => {

    const [coordinates, setCoordinates] = useState('');
    const [state, setState] = useContext(AppContext);

    const onClickHandler = () => {
        axios.get(`/forecast/${secrets.apiKey}/${coordinates}`)
            .then((response) => {
                setState(state => ({
                    ...state,
                    icon: response.data.currently.icon,
                    conditions: {
                        temperature: response.data.currently.temperature,
                        dewPoint: response.data.currently.dewPoint
                    }
                }));
                history.push('/display')
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <SearchWrapper>
            <Input
                onChange={({target: {value}}) => setCoordinates(value)}
                value={coordinates}
            />
            <Button onClick={onClickHandler}>
                Search
            </Button>
        </SearchWrapper>
    )
};

export default withRouter(Search);

/*<div>Icons made by <a href="https://www.flaticon.com/<?=_('authors').'/'?>smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>*/