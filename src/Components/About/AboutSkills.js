import React from 'react';
import styled from 'styled-components';
import { Skill } from "./Skill.js";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faDocker } from "@fortawesome/free-brands-svg-icons/faDocker";
import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { faAws } from "@fortawesome/free-brands-svg-icons/faAws"; 
import { faTools } from "@fortawesome/free-solid-svg-icons/faTools";

const MainContainer = styled.div`
    width: 100%;
    background-color: #eaf2fa;
`;

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const AboutSkills = (props) => {

    return (
        <MainContainer>
            <h1 
                style={{textAlign: 'center'}}
            > 
                Skills 
            </h1>
            <SkillsContainer>
                <Skill
                    icon={faCode}
                    title="Programming Langs"
                    skills="Java, Python, Javascript"
                />
                <Skill
                    icon={faDocker}
                    title="DevOps"
                    skills="Docker, Kubernetes, Github Actions"
                />
                <Skill
                    icon={faDatabase}
                    title="Databases"
                    skills="MongoDB, SQL, Reddis"
                />
            </SkillsContainer>
            <SkillsContainer>
                <Skill
                    icon={faReact}
                    title="Web Technologies"
                    skills="React, NodeJS, Redux, Sass, Typescript, Web Components"
                />
                <Skill
                    icon={faAws}
                    title="Cloud Engineering"
                    skills="AWS, Heroku, GCP"
                />
                <Skill
                    icon={faTools}
                    title="Tooling"
                    skills="Git, Postman, Intellij, VS Code"
                />
            </SkillsContainer>
        </MainContainer>
    );

}

export { AboutSkills };