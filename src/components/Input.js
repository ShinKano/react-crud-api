import React from 'react';
import styled from 'styled-components';


const Input = (props) => {
    return (
            <StyledInput type={props.type} name={props.name} value={props.value} />
    );
};

export default Input;


const StyledInput = styled.input`
    width: 80%;
    height: 36px;
    border-radius: 4px;
    font-size: 20px;
    padding: 10px;
    margin: 10px auto 20px auto;
`;