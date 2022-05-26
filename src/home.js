import React from 'react';
import Logo from './components/logo';
import LogoMovies from './components/logoMovies';
import QuickSearch from './components/quickSearch';
import Navigation from './components/navigation';
import BestMoviesHeading from './components/bestMoviesHeading';
import MovieSections from './components/movieSections';
import PosterRaya from './components/poster';
import TitleRusRaya from './components/titleRus';
import TitleEngRaya from './components/titleEng';
import GenresRaya from './components/genres';
import DescriptionRaya from './components/descripton';
import DownloadButton from './components/downloadButton';
import WatchlistButton from './components/watchlistButton';
import RaitingButton from './components/raitingButton';
import Raiting from './components/raiting';
import Rule from './components/rule';
import Icons from './components/icons';
import MoviesFooter from './components/moviesFooter';
import arrayData from './components/arrayData';


const Home = () => {
  return (
    <div>
      <header>
          <Logo/>
          <LogoMovies/>
          <QuickSearch/>
          <Navigation/>
        </header>
      <main>
        <div>
          <BestMoviesHeading/>
          <MovieSections elements = {arrayData}/>
        </div>
      </main>
      <footer>
        <Icons/>
        <MoviesFooter/>
      </footer>
    </div>
  )
};

export default Home;