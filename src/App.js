import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import db from "./fbase"

function App() {

  const [data, setData] = useState([]);

  const getFromServer = async () => {
    const querySnapshot = await getDocs(collection(db, "Posts"));
    const d = querySnapshot.docs[0].data();
    console.log(d)
    const o = {
      author : d.author,
      createdAt : d.createdAt,
      likes : d.likes,
      topic : d.topic,
      content : d.content
    }
    setData(o)
} 

useEffect(() => {
  getFromServer();
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
        <br />
          {"Created :" +  data.author}
          <br />
          {"Date :" + data.createdAt}
          <br />
          {data.author}
          <br />
          {data.author}
          <br />
          {data.author}
      </header>
    </div>
  );
}

export default App;
