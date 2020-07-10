import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Information Technology: Advanced Web Developer" where="Wake Tech Community College" from="2019" to="Present" />

                <Widecard title="Bachelor of Science in Telecommunications and Film" where="University of Oregon" from="September 1987" to="June 1991" />
            </div>
        )
    }
}
export default Education