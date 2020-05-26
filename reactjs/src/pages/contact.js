import React, { Component } from 'react';
import API from '../API'
import '../styles.css'
class Landing extends Component {
    state = { name: 't', email: 't', reason: 't' }
    createContact = async (event) => {
        // const history = useHistory();
        event.preventDefault();
        console.log(this.state)
        const { name, reason, email } = this.state
        let success = await API.post('/submit/contact', { name, reason, email })
        console.log(success)
    }
    render() {
        return (
            <>
                <h1>Form</h1>
                <form>
                    <input type='text' placeholder='Name'></input>
                    <input type='text' placeholder='Email'></input>
                    <textarea type='text' placeholder=''></textarea>
                    <button onClick={this.createContact}>Submit</button>
                </form>
            </>
        );
    }
}

export default Landing;