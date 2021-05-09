import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons/faEnvelopeOpen";

const HomeFooter = (props) => {
    
    const ContainerStyled = styled.div`
        display: flex;
        margin-top: 20px;
        align-items: center;
        -webkit-box-align: center;
    `;

    const IconStyled = styled.a`
        margin: 0px 10px 0px 10px; 
        color: #787878;
        &:hover {
            color: 	#F8F8F8;
        }
    `;

    return(
        <ContainerStyled>
            <IconStyled 
                target="_blank" 
                href="https://linkedin.com/in/collinkleest"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </IconStyled>
            <IconStyled
                target="_blank" 
                href="https://github.com/collinkleest"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </IconStyled>
            <IconStyled
                target="_blank" 
                href="https://www.youtube.com/channel/UCmTsz3Z6GxzTxfwGTz7nKkg"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
			</IconStyled>
            <IconStyled
                target="_blank" 
                href="mailto:collinkleest@gmail.com?subject=Hi Collin!"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faEnvelopeOpen} size="2x" />
            </IconStyled>
        </ContainerStyled>
    );

}

export { HomeFooter }