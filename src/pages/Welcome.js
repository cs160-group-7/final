import React from "react";
import '../App.css';
import logo from '../images/relax.png';
import { useEffect } from "react";
import {getPosts, like} from "../server/Server"
import {runTests} from "../server/testServer"

const SamplePage = () => {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} alt="logo" />            
            <a href="/home" id="touch">
              (Touch here)
            </a>
          </header>
        </div>
      );
}

export default SamplePage