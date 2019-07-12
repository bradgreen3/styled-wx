import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    background: #556080;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
`;

const HeaderText = styled.p`
    color: #8697cb;
    font-size: 3rem;
    font-style: bold;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderText>StyledWx</HeaderText>
        </HeaderWrapper>
    )
};

export default Header;