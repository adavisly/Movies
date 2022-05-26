import React from 'react';
import BestMoviesHeading from './bestMoviesHeading';
import MovieSectionsWatchlist from './movieSectionsWatchlist';
import PosterRaya from './poster';
import TitleRusRaya from './titleRus';
import TitleEngRaya from './titleEng';
import GenresRaya from './genres';
import DescriptionRaya from './descripton';
import DownloadButton from './downloadButton';
import WatchlistButtonActive from './watchlistButtonActive';
import RaitingButton from './raitingButton';
import Raiting from './raiting';
import Rule from './rule';

import arrayData from './arrayData';

const Watchlist = () => {
    return (
          <div>
            <h3 className = "watchlistHeading">Хочу посмотреть</h3>
            <MovieSectionsWatchlist elements = {arrayData}/>
          </div>
    )
  };
  
  export default Watchlist;