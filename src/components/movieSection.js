import React from 'react';

import DownloadButton from './downloadButton';
import WatchlistButton from './watchlistButton';
import RaitingButton from './raitingButton';
import Raiting from './raiting';
import Rule from './rule';

const movieNumberData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const MovieSection = (props) => {
    return (
        <div>
            <section>
                <ul className = "movieNumber">
                <li>{props.id}</li>
                </ul>
                <div className = "poster-download">
                {props.image}
                <DownloadButton/>
                </div>
                <div>
                    <h3 className = "titleRus">{props.labelRus}</h3>
                    <h5 className = "titleEng">{props.labelEng}</h5>
                    <p className = "genres">{props.genres}</p>
                    <p className = "description">{props.text}</p>
                </div> 
                <WatchlistButton/>
                <RaitingButton/>
                <p className = "raiting">{props.raiting}</p>
            </section>
            <Rule/>
        </div>
    
    );
};

export default MovieSection;