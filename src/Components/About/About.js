import React from "react";
import { AboutHeader } from "./AboutHeader.js";
import UpCloseImg from "../../assets/img/upclose.jpg";
import { AboutSkills } from "./AboutSkills.js";

const About = (props) => {
    return (
        <React.Fragment>
            <AboutHeader 
                img={UpCloseImg} 
            />
            <AboutSkills />
        </React.Fragment>
    );
};

export { About };