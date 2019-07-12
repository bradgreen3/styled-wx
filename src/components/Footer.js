import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    display: flex;
    background: #556080;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
`;

const FooterText = styled.p`
    color: #8697cb;
`;

export const Footer = () => {
    return (
        <FooterWrapper>
            <FooterText>
                Icons designed by Smashicons from Flaticon
            </FooterText>
        </FooterWrapper>
    )
};

//TODO: add 'powered by google' to site