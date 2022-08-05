import logo from './logo.svg';
import './App.css';
import {getPosts} from './javascript/Server';
import {useEffect} from "react"

function App() {

useEffect(() => {
  console.log(getPosts())
},[])

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

export default App;
