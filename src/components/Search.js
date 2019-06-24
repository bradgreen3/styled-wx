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
                    icon: response.data.currently.icon
                }))
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
            <Button
                onClick={onClickHandler}
            >
                Search
            </Button>
        </SearchWrapper>
    )
};

export default withRouter(Search);