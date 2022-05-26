import React from 'react';

const SearchMovies = () => {
    return (
      <form className = "formSearchMovies">
        <input className = "searchMovies" placeholder = "Поиск по фильмам"/>
        <button type = "submit" className = "searchMoviesButton">Поиск</button>
      </form>
    )
  };

export default SearchMovies;