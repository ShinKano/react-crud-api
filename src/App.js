import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/Global';
import axios from 'axios';
//
import Form from './components/Form'
import Posts from './components/Posts'


const App = () => {

    const [ datas, setDatas ] = useState([]);
    const [ updated, setUpdated ] = useState(false);

    useEffect(() => {
        axios.get(
            'https://cors-anywhere.herokuapp.com/https://twitter.shin-kano.com/wishlist/functions.php?f=genapi'
            )
            .then((data) => {
                console.log(data.data);
                setDatas(data.data);
                document.querySelector('.send-button').textContent = 'Send!';
            })
            .catch((error) => {
                console.log(error);
            })
    },[updated]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        document.querySelector('.form').reset();
        document.querySelector('.send-button').textContent = 'Sending...🐟';
        fetch('https://cors-anywhere.herokuapp.com/https://twitter.shin-kano.com/wishlist/functions.php?f=register', {
            method: 'POST',
            body: formdata,
        }).then(response => {
            console.log(response);
            
            setUpdated(!updated);
        });
    };

    return (
        <>
            <Wrapper>
                <h1>Shere What you want to do...🐟</h1>
                <Form handleSubmit={handleSubmit} />
                <div>
                    {datas.reverse().map(data => <Posts 
                        key={data.ID}
                        data={data}
                    />)}
                </div>
            </Wrapper>
            <GlobalStyles />
        </>
    );
}

export default App;

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    /* border: 1px solid; */
    text-align: center;
`;
