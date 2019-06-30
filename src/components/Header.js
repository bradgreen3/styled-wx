import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    min-height: 1vh;
    background: #556080;
    justify-content: center;
`;

const StyledText = styled.p`
    color: #8697cb;
    font-size: 30px;
    font-style: bold;
`;

const Header = () => {
    return (
        <StyledHeader>
            <StyledText>StyledWx</StyledText>
        </StyledHeader>
    )
};

export default Header;