import React, {useState} from "react";
import '../App.css';
import {useNavigate} from "react-router-dom";

const Meditation = () => {

  const navigate = useNavigate()

  function grow(rate, num) {

    let count = 0;
    let stop = 0;

    const stopit = () => {
      clearInterval(a);
      navigate("/exercise")
    }

    document.getElementById("Breathe").innerText = "Breathe in";
    document.getElementById("dot1").style.backgroundColor = "#B9CBD9";
    document.getElementById("meditation-button").onclick = stopit;


    let a = setInterval(() => {
      count = count + 1;
      const height = document.getElementById("dot1").clientHeight;
      const width = document.getElementById("dot1").clientWidth;
      document.getElementById("dot1").style.height = height + rate + "px";
      document.getElementById("dot1").style.width = width + rate + "px";
      if (height >= 380 && width >= 380 ) {
        clearInterval(a);
        a = null;
        document.getElementById("Breathe").innerText = "Hold";
        setTimeout(() => shrink(rate, num), 3000);
      }
    }, 50);
  }

  function shrink(rate, num) {

    let count = 0;

    const stopit = () => {
      clearInterval(b);
      navigate("/exercise")
    }

    document.getElementById("Breathe").innerText = "Breathe out";
    document.getElementById("dot1").style.backgroundColor = "#FCC9C5";
    document.getElementById("meditation-button").onclick = stopit;

    let b = setInterval(() => {
      count = count + 1;
      const height = document.getElementById("dot1").clientHeight;
      const width = document.getElementById("dot1").clientWidth;
      document.getElementById("dot1").style.height = height - 1 + "px";
      document.getElementById("dot1").style.width = width - 1 + "px";
      if (height <= 0 && width <= 0 ) {
        clearInterval(b);
        b = null;
        document.getElementById("Breathe").innerText = "Wait";
        setTimeout(() => grow(rate, num), 3000);
      }
    }, 50);
  }


  function helper() {
    document.getElementById("meditation-button").innerText = "Stop meditation"

    grow(6, 50)

  }
  return (
    <div className="App">
      <header className="Meditation-header">

        <span id="dot1" className="dot"></span>

        <p id="Breathe">
          Ready?
        </p>

        <button
          type="button"
          id="meditation-button"
          onClick={() => helper()}
        >
          Start meditation
        </button>

      </header>
    </div>

  );
}

export default Meditation