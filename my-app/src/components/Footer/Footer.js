import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import AuthContext from 

// CSS for page
import './footer.css';

// Images used in footer go here

class Footer extends Component {
    static contextType = AuthContext;

    render() {
        return (
            <div className='footerContents'>
            <div className='row align-items-center' id='DAV'>
            </div>
            </div>
        )
    }
}

export default Footer;