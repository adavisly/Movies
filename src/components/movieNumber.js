import React from 'react';

const movieNumberData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const MovieNumber = () => {
    const elements = movieNumberData.map((item) => {
        return <li key = {item.toString()}>{item}</li>
    }
    );

    return (
    <ul className = "movieNumber">
        <li>1</li>
    </ul>
    );
};

export default MovieNumber;