import React from 'react';
import MovieSectionWatchlist from './movieSectionWatchlist';

const MovieSections = ({elements}) =>
{
    return (
        elements.map((item) => <MovieSectionWatchlist {...item}/>)
    )
};

export default MovieSections;