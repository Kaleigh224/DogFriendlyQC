import React, { Component } from 'react';
import './Home.css';
import Kyson from '../../images/KysonBW.jpeg'

class HomePage extends Component {
    render () {
        return (
            <div className='home'>
            <nav><h1>This is a NavBar</h1></nav>
            <img src={Kyson} className="Kyson" alt="Dog on table"/>
            </div>
        )
    }
}

export default HomePage;