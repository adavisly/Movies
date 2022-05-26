import React from 'react';
import logo from './img/logo.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Logo = () => {
    return (
            <Link to = "/"><img src = {logo} className = "logo"></img></Link>
    )
};

export default Logo;