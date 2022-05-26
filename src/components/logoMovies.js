import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const LogoMovies = () => {
    return (
        <h1><Link to = "/" className = "logoMovies" >Movies</Link></h1>
    )
};

export default LogoMovies;