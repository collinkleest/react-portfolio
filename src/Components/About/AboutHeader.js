import React from 'react';
import styled from 'styled-components';
import { HomeFooter } from "../Home/index.js";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: white;
`;

const HeaderLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
`;

const HeaderRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
`;

const HeaderImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`;


const AboutHeader = (props) => {

    return (
        <HeaderContainer>

            <HeaderLeft>            
                <HeaderImg 
                    src={props.img} 
                />
                <h2>
                    Collin K Kleest
                </h2>
                <h4>
                    Pennsylvania State University
                </h4>
                <HomeFooter />
            </HeaderLeft>
            
            <HeaderRight>
                <h2> About Me </h2>
                <p style={{fontSize: '20px'}}> 
                    I am an aspiring full stack developer, 
                    that graduated from Penn State University in 
                    2021 with a degree in Information Sciences and Technology.
                </p>
                <p style={{fontSize: '20px'}}> 
                    I am currently looking for a full-time position in Software Engineering.
                    More specifically a position in full stack web development.
                </p>
                <p style={{fontSize: '20px'}}>
                    I have worked multiple internships as a developer and a systems engineer at Pfizer, Vanguard and Rajant.
                </p>
            </HeaderRight>


        </HeaderContainer>

    );

}

export { AboutHeader }; 

