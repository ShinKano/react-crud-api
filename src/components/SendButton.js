import React from 'react';
import styled from 'styled-components';


const SendButton = () => {
    return (
        <Button className="send-button">Send!</Button>
    );
};

const Button = styled.button`
    width: 80%;
    height: 30px;
    font-size: 20px;
`;


export default SendButton;