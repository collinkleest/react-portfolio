import React from "react"; 
import styled from 'styled-components';
import { ContactInput, ContactInputArea } from "./ContactInput.js";

const SendMessage = (fName, lName, email, subject, message) => {
    
}


const Contact = (props) => {
    
    const ContactContainer = styled.div`
        position: relative;
        top: 100px;
        display: flex;
        margin-right: auto;
        margin-left: auto;
        justify-content: center;
        align-items: center;
        width: 100%;
    `;
    
    const ContactContentContainer = styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        width: 500px;
        padding: 10px 20px 20px 20px;
        background-color: white;
        border-radius: 5px;
    `;

    const SendButton = styled.button`
        margin-top: 5px;
        background-color: #007aff;
        border-radius: 4px;
        font-family: 'Roboto Mono', sans-serif;
        font-size: 20px;
    `;
    
    return (
        <ContactContainer>
            <ContactContentContainer>
                <h4>Contact Me!</h4>
                <ContactInput id="FirstName">
                    First Name
                </ContactInput>
                <ContactInput id="LastName">
                    Last Name
                </ContactInput>
                <ContactInput id="EmailAddress">
                    Email Address
                </ContactInput>
                <ContactInput id="Subject">
                    Subject
                </ContactInput>
                <ContactInputArea id="Message">
                    Message
                </ContactInputArea>
                <SendButton>
                    Send Message
                </SendButton>
            </ContactContentContainer>
        </ContactContainer>
    );
};

export { Contact };