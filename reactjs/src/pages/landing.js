import React, { Component, Fragment } from 'react';
import '../styles.css'
class Landing extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <h1>Landing page</h1>
                <h2>Projects</h2>
                <ul id='projectList'>
                    <li>Quiz App</li>
                    <li>LiveFm API</li>
                    <li>Task Manager</li>
                    <li>Twitter Clone</li>
                </ul>
                <h2>Blog Articles</h2>
                <ul id='blogList'>
                    <li>Version Control</li>
                    <li>Temp</li>
                    <li>Temp</li>
                    <li>Temp</li>
                </ul>
            </Fragment>

        );
    }
}

export default Landing;