import React, {useEffect} from "react"
import {useNavigate} from "react-router-dom";
import logo from "../images/relax.png";
const MeditationWaiting = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/exercise/meditation")
        }, 3000)
    },[])

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <a href="/home" id="wait-message">
                        FIND SOMEWHERE COMFORTABLE
                        EXERCISE WILL BEGIN SHORTLY
                    </a>
                    <img src={logo} alt="logo" />
                </header>
            </div>
        </>

    )
}

export default MeditationWaiting