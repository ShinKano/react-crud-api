import React from 'react';
import styled from 'styled-components';
//
import Input from './Input';
import SendButton from './SendButton';


const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="form">
            <p>name</p>
            <Input type="text" name="name" />
            <p>I want to...</p>
            <Input type="text" name="wishname" />
            <p>Type</p>
            <Input type="text" name="type" />
            <p>I want to because...</p>
            <Input type="text" name="disc" />
            <SendButton>send</SendButton>
        </form>
    );
}

export default Form;

//https://twitter.shin-kano.com/wishlist/functions.php?f=register