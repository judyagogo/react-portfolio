import React, { Component } from 'react';
import Projectcard from '../components/Projectcard';
import project1pic from '../img/vc.jpg';
import project2pic from '../img/poems.jpg';
import project3pic from '../img/change-calculator.jpg';
class Projects extends Component {

    render() {
        return (
            <div className="condiv projects">                    
                <h1 className="subtopic">My Projects</h1>

                <img src={project1pic} className="project-img"></img>
                <Projectcard title="Vicious Cycles Website" skill1="HTML + CSS"  skill2="Writing for the web" skill3="Image Optimization" />

                <img src={project2pic} className="project-img"></img>
                <Projectcard title="Poetry Website" skill1="Weebly website builder" skill2="Template customiztion" skill3="Page layout" />

                <img src={project3pic} className="project-img"></img>
                <Projectcard title="Change Calculator" skill1="HTML" skill2="CSS" skill3="JavaScript" />
            </div>
        )
    }
}
export default Projects