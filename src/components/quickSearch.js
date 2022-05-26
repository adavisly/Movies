import React from 'react';

const QuickSearch = () => {
    return (
      <form className = "formQuickSearch">
        <input className = "quickSearch" placeholder = "Быстрый поиск"/>
        <button type = "submit" className = "searchButton"></button>
      </form>
    )
  };

export default QuickSearch;