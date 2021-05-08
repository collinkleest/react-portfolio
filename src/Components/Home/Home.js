import React from 'react';
import styled from 'styled-components';
import Logo from "../../assets/img/ck-logo1.png";
import { HomeList } from "./HomeList.js";
import { HomeFooter } from "./HomeFooter.js";

const Home = (props) => {

    const Container = styled.div`
        position: relative;
        left: 0px;
        right: 0px;
        bottom: 0px;
        width: 100%;
        max-width: 1200px;
        display: flex;
        display: --webkit-flex;
        margin-right: auto;
        margin-left: auto;
        justify-content: center;
        align-items: center;
    `;

    const HomeContentContainer = styled.div`
        position: relative;
        z-index: 1;
        display: flex;
        display: --webkit-flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        max-width: 900px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        -ms-flex-align: start; 
    `;

    const StyledImage = styled.img`
        margin-bottom: 40px;
        width: 150px;
        height: 150px;
        display: inline-block;
        vertical-align: middle;
    `;

    const StyledDivider = styled.div`
        width: 180px;
        height: 1px;
        margin-bottom: 24px;
        background-color:  #dbd9e8;
    `;

    return (
        <Container>
            <HomeContentContainer>
                <StyledImage src={Logo} />
                <StyledDivider />
                <HomeList />
                <StyledDivider />
                <HomeFooter />
            </HomeContentContainer>
        </Container>
    );    
};

export { Home };