import React, { Component } from 'react';
import '../styles.css'
class Landing extends Component {
    state = {}
    render() {
        return (
            <>
                <h1>Form</h1>
                <form>
                    <input type='text' placeholder='Name'></input>
                    <input type='text' placeholder='Email'></input>
                    <textarea type='text' placeholder=''></textarea>
                </form>
            </>
        );
    }
}

export default Landing;