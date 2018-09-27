import React, { Component } from 'react';
import axios from 'axios';

export default class Test extends Component {
    async componentDidMount() {
        const user = {
            email: 'test@gmaaaaail.com',
            password: 'ohaiohaioh'
        }

        const resp = await axios.post('/api/login', user);

        console.log('Login Response:',resp);

        // const resp = await axios.get('/api/test');
        // console.log('Test Response:', resp);
        // const user = await axios.get('/api/user');
        // console.log('User Data:',user);
    }
    
    render() {
        return (
            <h1>API Testing Component</h1>
        )
    }
}