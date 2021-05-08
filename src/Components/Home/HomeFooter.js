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
        color: #dbd9e8;
        margin-top: 20px;
        align-items: center;
        -webkit-box-align: center;
    `;

    const iconStyle = {
        margin: "0px 10px 0px 10px",
    }

    return(
        <ContainerStyled>
            <FontAwesomeIcon style={iconStyle} icon={faLinkedin} size="2x" />
            <FontAwesomeIcon style={iconStyle} icon={faGithub} size="2x" />
            <FontAwesomeIcon style={iconStyle} icon={faYoutube} size="2x" />
			<FontAwesomeIcon style={iconStyle} icon={faEnvelopeOpen} size="2x" />
        </ContainerStyled>
    );

}

export { HomeFooter }