import React, { Component } from 'react';

class Projectcard extends Component {
    render() {
        return (
            <div className="projectcard">
                <div className="compdet">
                    <h3>{this.props.title}</h3>
                    <h4 className="listheading">Skills:</h4>
                    <ul className="list">
                        <li>{this.props.skill1}</li>
                        <li>{this.props.skill2}</li>
                        <li>{this.props.skill3}</li>   
                    </ul>
                </div>
            </div>
        )
    }
}
export default Projectcard