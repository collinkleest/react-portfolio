import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SkillImg = styled.img`
    width: 64px;
    height: 64px;
`;

const SkillUL = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin-left: 0;
    justify-content: center;
    align-items: center;
`;

const Skill = (props) => {
    return (
        <SkillsContainer>
            <FontAwesomeIcon 
                icon={props.icon || faCode}
                size={props.size || "4x"}
            />
            <h2 style={{marginBottom: '0px'}}>
                {props.title}
            </h2>
            <p>
                {props.skills}
            </p>
        </SkillsContainer>
    );
}

export { Skill }; 