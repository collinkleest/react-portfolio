import React from "react";

const ContactInputArea = (props) => {
    return (
        <React.Fragment>
            <label htmlFor={props.id}>
                {props.children}
            </label>
            <textarea id={props.id}>
            </textarea>
        </React.Fragment>
    )
};

const ContactInput = (props) => {
    return (
        <React.Fragment>
            <label htmlFor={props.id}>
                {props.children}
            </label>
            <input id={props.id}>
            </input>
        </React.Fragment>
    )
};

export { ContactInput, ContactInputArea };