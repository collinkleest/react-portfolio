import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const HomeListItem = (props) => {
    const HomeListItemStyle = styled.li`
            display: block;
            overflow: visible;
            transition: margin-left 400ms ease;
            text-align: -webkit-match-parent;
            color: #dbd9e8;
            padding: 5px 0px 5px 0px;
            margin: 5px 0px 5px 0px; 
            font-size: 22px; 
            &:hover {
                margin-left: 22px;
                color: rgb(211, 237, 75);
            }
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

    const LinkStyle = {
        textDecoration: 'none',
    }
    
    return (
        <HomeListStyle>
                <Link style={LinkStyle} to="/about">
                    <HomeListItem>
                        About
                    </HomeListItem>
                </Link>
            <HomeListItem>
                <Link style={LinkStyle} to="/workexperience">
                    <HomeListItem>
                        Work Experience
                    </HomeListItem>
                </Link>
            </HomeListItem>
            <HomeListItem>
                <Link style={LinkStyle} to="/projects">
                    <HomeListItem>
                        Projects
                    </HomeListItem>
                </Link>
            </HomeListItem>
            <HomeListItem>
                <Link style={LinkStyle} to="/resume">
                    <HomeListItem>
                        Resume
                    </HomeListItem>
                </Link>
            </HomeListItem>
            <HomeListItem>
                <Link style={LinkStyle} to="/contact">
                    <HomeListItem>
                        Contact
                    </HomeListItem>
                </Link>
            </HomeListItem>
        </HomeListStyle>
    );
}

export { HomeList, HomeListItem }