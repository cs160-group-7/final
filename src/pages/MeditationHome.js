import React from "react"
import "../styles/meditation.css"
import "bootstrap/dist/css/bootstrap.min.css";

const MeditationHome = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <img src={require("../assets/meditation_home_header.png")} id="header-image" alt="header" />
                    </div>
                    <a href="/home">
                        <img src={require("../assets/meditation_home_home.png")} id="home-image" alt="motif" border="0" />
                    </a>
                    <div className="col-sm">
                        <p id="heading">EXERCISES</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img src={require("../assets/meditation_home_chosen.png")} id="chosen" alt="chosen" />
                        <p id="all">All</p>
                    </div>
                    <div className="col-sm">
                        <p id="favorite">Favorites</p>
                    </div>
                </div>
                <div className="row">
                    <a href="/exercise/waiting">
                        <img src={require("../assets/meditation_home_pink_button.png")} id="pink_top" alt="pink" border="0" />
                    </a>
                    <div className="col-sm">
                        <p id="meditation">MEDITATION</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img src={require("../assets/meditation_home_blue_button.png")} id="blue_top" alt="blue" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img src={require("../assets/meditation_home_pink_button.png")} id="pink_bottom" alt="pink" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img src={require("../assets/meditation_home_blue_button.png")} id="blue_bottom" alt="blue" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MeditationHome