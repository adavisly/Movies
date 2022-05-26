import React, { Component } from 'react';

export default class WatchlistButton extends Component {

  state = {buttonActive:false};

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



  //export default WatchlistButton;