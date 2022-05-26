/*import React from 'react';

const WatchlistButtonActive = () => {
    return <button className = "watchlistButton buttonActive"></button>
  };

  export default WatchlistButtonActive;
  */

  import React, { Component } from 'react';

  export default class WatchlistButtonActive extends Component {
  
    state = {buttonActive:true};
  
    onButtonClick = () => {
      this.setState (( {buttonActive}) => {
        return ({buttonActive : !buttonActive}
        );
      });
    };
  
  
    render () {
      const {buttonActive} = this.state;
      let classNames = 'watchlistButton';
      if (buttonActive) {
        classNames += ' buttonActive watchlistButtonDN';
      }
      return (
      <button className = {classNames}
      onClick = {this.onButtonClick}><span>Хочу посмотреть</span></button>
      );
    }
     
    
  }