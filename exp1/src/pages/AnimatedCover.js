import React, { Component } from 'react';
import '../styles/components/animatedCover.css';

export class AnimatedCover extends React.Component {
    render() {
      return (
        <div className="cover-container d-flex flex-column h-100 p-5 mx-auto ">
            <div className="inner cover">
                <h1 className="cover-heading">Animated</h1>        
            </div>
        </div>
      )
    }
  } 