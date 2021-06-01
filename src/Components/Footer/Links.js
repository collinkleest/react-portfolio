import React from 'react';
import styled from 'styled-components';

const LinksContainer = styled.div`
    margin-left: 30px;
`;

const StyledLink = styled.a`
    color: black;
    text-decoration: none;
`;

const Links = (props) => {

    return (
        <LinksContainer>
            <p style={{borderBottom: '2px solid black'}}>
                Links
            </p>
            <p>
                <StyledLink 
                    target="_blank" 
                    href="https://github.com/collinkleest"
                    rel="noopener noreferrer"
                >
                    Github
                </StyledLink>
            </p>
            <p>
                <StyledLink 
                    target="_blank" 
                    href="https://linkedin.com/in/collinkleest"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </StyledLink>
            </p>
            <p>
                <StyledLink 
                    target="_blank" 
                    href="https://dev.to/collinkleest"
                    rel="noopener noreferrer"
                >
                    Dev.to
                </StyledLink>
            </p>
            <p>
                <StyledLink 
                    target="_blank" 
                    href="https://www.youtube.com/channel/UCmTsz3Z6GxzTxfwGTz7nKkg"
                    rel="noopener noreferrer"
                >
                    YouTube
                </StyledLink>
            </p>
        </LinksContainer>
    )

}

export { Links };