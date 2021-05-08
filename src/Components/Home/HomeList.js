import React from 'react';
import styled from 'styled-components';

const HomeListItem = (props) => {
    const HomeListItemStyle = styled.li`
            display: block;
            overflow: visible;
            transition: transform 400ms ease, -webkit-transform 400ms ease;
            text-align: -webkit-match-parent;
            color: #dbd9e8;
            padding: 5px 0px 5px 0px;
            margin: 5px 0px 5px 0px; 
            font-size: 22px; 
    `;

    return (
        <HomeListItemStyle>
            {props.children}
        </HomeListItemStyle>
    );
}

const HomeList = (props) => {
    const HomeListStyle = styled.ul`
            padding-left: 0px;
            list-style: none;
            margin-top: 0px;
            margin-bottom: 10px;
    `;
    
    return (
        <HomeListStyle>
            <HomeListItem>
                About
            </HomeListItem>
            <HomeListItem>
                Work Experience
            </HomeListItem>
            <HomeListItem>
                Projects
            </HomeListItem>
            <HomeListItem>
                Resume
            </HomeListItem>
            <HomeListItem>
                Contact
            </HomeListItem>
        </HomeListStyle>
    );
}

export { HomeList, HomeListItem }