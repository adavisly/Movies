import React, { Component } from 'react';

export default class RaitingButton extends Component {
    state = {clicked:false};

    onButtonClick = () => {
        this.setState (({clicked}) => {
            return {clicked : !clicked};
        });
    };
    render () {
        const {clicked} = this.state;
        let classNames = 'raiting-buttons';
        if (clicked) {
        classNames += ' stars-show';
        }
        return (
        <div className = "stars">
            <button className = "raitingButton" 
            onClick = {this.onButtonClick}
            ></button>   
            <div className = {classNames}>
                <button className = "star star10"></button>
                <button className = "star star9"></button>
                <button className = "star star8"></button>
                <button className = "star star7"></button>
                <button className = "star star6"></button>
                <button className = "star star5"></button>
                <button className = "star star4"></button>
                <button className = "star star3"></button>
                <button className = "star star2"></button>
                <button className = "star star1"></button>
            </div>
        </div>
        );
    }
    
}

//export default RaitingButton;