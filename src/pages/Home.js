import React from "react";
import Top from '../images/top.png';
import Feed from '../images/feed.png';
import Message from '../images/message.png';
import Exercise from '../images/exercise.png';

const Home = () => {
    return (
        <div className="home">
          <img className="header" src={Top}></img>
          <a href="/feed">
            <img className="button" src={Feed}></img>
          </a>
          <a href="/message">
            <img className="button" src={Message}></img>
          </a>
          <a href="/exercise">
            <img className="button" src={Exercise}></img>
          </a>
        </div>
      );
}

export default Home
