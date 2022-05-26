import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Navigation = () => {
    return (
            <nav className = "navsHeader">
                <Link to = '/movies' className = "navHeader">Фильмы</Link>
                <Link to = '/tvSeries' className = "navHeader">Сериалы</Link>
                <Link to = '/signIn' className = "navHeader">Вход</Link>
                <Link to = '/profile' className = "navHeader">Профиль</Link>
            </nav>
    )
  };

  export default Navigation;