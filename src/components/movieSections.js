import React from 'react';
import MovieSection from './movieSection';

const MovieSections = ({elements}) =>
{
    return (
        elements.map((item) => <MovieSection {...item}/>)
    )
};

export default MovieSections;