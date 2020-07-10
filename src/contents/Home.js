import React, { Component } from 'react';
import profilepic from '../img/profile-picture.jpg';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social'

class Home extends Component {

    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={['Judy Goergen','Web Developer']} speed={80} eraseDelay={500}/>
                <Social />
            </div>
        )
    }
}

export default Home