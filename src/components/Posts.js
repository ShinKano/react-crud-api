import React from 'react';
import styled from 'styled-components';

const Posts = (props) => {

    const wishname = props.data.wishname;
    const name     = props.data.name;
    const type     = props.data.type;
    const disc     = props.data.disc;

    return (
        <PostDiv>
            <h5>{name} wants to </h5>
            <h4>{wishname}</h4>
            <p>{type}</p>
            <p>{disc}</p>
        </PostDiv>
    );
}

const PostDiv = styled.div`
    border: 1px solid;
    border-radius: 5px;
    margin: 12px auto;
    padding: 10px;
`;


export default Posts;