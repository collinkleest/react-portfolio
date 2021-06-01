import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    margin-left: 30px;
`;

const Contact = (props) => {
    return (
        <Container>
            <p style={{borderBottom: '2px solid black'}}>
                Contact
            </p>
            <p>
                collinkleest@gmail.com
            </p>
            <p>
                +1 (484) 854-9485
            </p>
        </Container>
    );
}

export { Contact };