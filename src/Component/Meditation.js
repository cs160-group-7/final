import React from "react";
import '../App.css';
import { useEffect } from "react";

const Meditation = () => {

  useEffect(() => {
    // runTests()
  }
  )

  

  function grow(rate, num) {
    document.getElementById("meditation-button").innerText = "Stop meditation"
    document.getElementById("meditation-button").onclick = stopit;
    document.getElementById("Breathe").innerText = "Breathe in";
    document.getElementById("dot1").style.backgroundColor = "#FCC9C5";
    let count = 0;
    let stop = 0;

    function stopit() {
      stop = 1;
      console.log(stop);
    }
  
    let a = setInterval(() => {
      if (stop === 1) {
        clearInterval(a);
        a = null;
        setTimeout(() => console.log("hi"), 3000);
      }
      count = count + 1;
      var height = document.getElementById("dot1").clientHeight;
      var width = document.getElementById("dot1").clientWidth;
      document.getElementById("dot1").style.height = height + rate + "px";
      document.getElementById("dot1").style.width = width + rate + "px";
      if (count === num) {
        clearInterval(a);
        document.getElementById("Breathe").innerText = "Hold";
        setTimeout(() => shrink(rate, num), 3000);
      }
    }, 50);
  
  }
  function shrink(rate, num) {
    document.getElementById("Breathe").innerText = "Breathe out";
    document.getElementById("dot1").style.backgroundColor = "#B9CBD9";
    let count = 0;
    const b = setInterval(() => {
      count = count + 1;
      var height = document.getElementById("dot1").clientHeight;
      var width = document.getElementById("dot1").clientWidth;
      document.getElementById("dot1").style.height = height - rate + "px";
      document.getElementById("dot1").style.width = width - rate + "px";
      if (count === num) {
        clearInterval(b);
        document.getElementById("Breathe").innerText = "Wait";
        setTimeout(() => grow(rate, num), 3000);
      }
    }, 50);
  }


  function helper() {
    grow(2, 100);
  }
  return (
    <div className="App">
      <header className="Meditation-header">
        {/* <img id="breathe-img" src={meditationLogo} className="App-logo" alt="meditation-logo" /> */}

        <span id="dot1" class="dot"></span>

        <p id="Breathe">
          Ready?
        </p>

        <button
          type="button"
          id="meditation-button"
          onClick={helper}
        >
          Start meditation
        </button>

      </header>
    </div>

  );
}

export default Meditation