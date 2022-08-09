import React from "react";
import '../App.css';
import logo from '../logo.svg';
import { useEffect } from "react";
import {getPosts, like, makeMessage} from "../server/Server"
import {runTests} from "../server/testServer"

const SamplePage = () => {

    const message = {
      content: "sofun",
      isAnonymous : true
    }

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
          <br />
            <button onClick={() => makeMessage(
                message
              )}>fladjfklajdlkfjadlkfjla</button>
          </header>
        </div>
      );
}

export default SamplePage