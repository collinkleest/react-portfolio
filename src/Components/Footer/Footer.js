import React from 'react';
import styled from 'styled-components';
import CKKLogo from "../../assets/img/ck-logo1.png";
import { Links } from './Links.js';
import { Contact } from './Contact.js';

const Container = styled.div`
    background-color: #eaf2fa;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
`;

const LeftContainer = styled.div`
    margin-left: 20px; 
`;

const Footer = (props) => {
    return (
        <Container>
            <LeftContainer>
                <img 
                    src={CKKLogo}
                    alt="collin kleest logo"
                    style={{width: '64px', height: '64px'}}
                />
                <p>
                    Copyright
                </p>
                <p>
                    @Collin K Kleest
                </p>
            </LeftContainer>
            <Links />
            <Contact />
        </Container>
    );
}

export { Footer };