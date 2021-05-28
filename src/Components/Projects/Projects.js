import React from "react";
import { ProjectCard } from "./ProjectCard.js";


const Projects = (props) => {
    return (
        <ProjectCard
            imageSrc="https://raw.githubusercontent.com/collinkleest/varia/master/assets/varialogo.png"
            title="Varia"
            description="Varia is an open source discord bot written in Typescript and Node.js. Varia uses Discord.js to connect to discord servers and has commands for music control."
            githubLink="https://github.com/collinkleest/varia"
            demoLink="http://variabot.herokuapp.com/"
        >
        </ProjectCard>    
    );
};

export { Projects };