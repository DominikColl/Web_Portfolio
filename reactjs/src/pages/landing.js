import React, { Component, Fragment } from 'react';
import '../styles.css'
class Landing extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <section id='attention'>
                    <h1>Dominik Coll</h1>
                </section>
                <section id='projectSection'>
                    <h2>Projects</h2>
                    <ul id='projectList'>
                        <li><p>Quiz App</p></li>
                        <li><p>LiveFm API</p></li>
                        <li><p>Task Manager</p></li>
                        <li><p>Twitter Clone</p></li>
                    </ul>
                </section>
                <section id='blogSection'>
                    <h2>Blog Articles</h2>
                    <ul id='blogList'>
                        <li><p>Version Control</p></li>
                        <li><p>Temp</p></li>
                        <li><p>Temp</p></li>
                        <li><p>Temp</p></li>
                    </ul>
                </section>
            </Fragment>

        );
    }
}

export default Landing;