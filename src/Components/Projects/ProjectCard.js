import React from "react";
import styled from 'styled-components';

const ProjectCard = (props) => {

    const ProjectContainer = styled.div`
        display: flex;
        background-color: white;
        border-radius: 5px;
        padding: 5px;
    `;

    const ImageContainer = styled.img`
        width: 300px;
        height: 300px;
    `;

    const DetailsContainer = styled.div`
        margin-left: auto;
    `;

    return (
        <ProjectContainer>
            
            <div>
                <ImageContainer src={props.imageSrc}>
                </ImageContainer>
            </div>

            <DetailsContainer>
                <h1>
                    {props.title}
                </h1>
                <p>
                    {props.description}
                </p>
                <button>
                    <a 
                        href={props.githubLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                </button>
                <button>
                    <a 
                        href={props.demoLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Live Demo
                    </a>
                </button>    
            </DetailsContainer>            


        </ProjectContainer>
    );

}

export { ProjectCard };