import React from "react";
import '../App.css';
import logo from '../logo.svg';
import { useEffect } from "react";
import {getPosts, like} from "../javascript/Server"
import {runTests} from "../javascript/testServer"

const SamplePage = () => {

    useEffect(() => {
        // runTests()
    }
    )
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
              You can add your html code here to navigate
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
}

export default SamplePage