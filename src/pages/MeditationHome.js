import React from "react"

const MeditationHome = () => {
    return (
        <>
            {/* Required meta tags */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Bootstrap CSS */}
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />
            {/* Google fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n#header-image {\n    position: absolute;\n    width: 400px;\n    left: 0px;\n    top: 0px;\n}\n\n#home-image {\n    object-fit: contain;\n    position: absolute;\n    width: 56px;\n    height: 56px;\n    left: 20px;\n    top: 12px;\n}\n\n#heading {\n    position: absolute;\n    width: 186px;\n    height: 35px;\n    left: 102px;\n    top: 22px;\n    font-family: 'Playfair Display';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 26px;\n    line-height: 35px;\n    letter-spacing: 0.2em;\n    color: #323232;\n}\n\n#chosen {\n    position: absolute;\n    width: 141px;\n    height: 33px;\n    left: 40px;\n    top: 120px;\n}\n\n#all {\n    position: absolute;\n    width: 30px;\n    height: 21px;\n    left: 95px;\n    top: 125px;\n    font-family: 'Inconsolata';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 21px;\n    color: #FFFFFF;\n}\n\n#meditation {\n    position: absolute;\n    width: 142px;\n    height: 25px;\n    left: 109px;\n    top: 237px;\n\n    font-family: 'Inconsolata';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 25px;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n\n    color: #646261;\n}\n\n#favorite {\n    position: absolute;\n    width: 90px;\n    height: 21px;\n    left: 240px;\n    top: 125px;\n    font-family: 'Inconsolata';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 21px;\n    color: #646261;\n}\n\n#pink_top {\n    position: absolute;\n    width: 360px;\n    height: 115px;\n    left: 15px;\n    top: 192px;\n}\n\n#blue_top {\n    position: absolute;\n    width: 360px;\n    height: 115px;\n    left: 15px;\n    top: 342px;\n}\n\n#pink_bottom {\n    position: absolute;\n    width: 360px;\n    height: 115px;\n    left: 15px;\n    top: 492px;\n}\n\n#blue_bottom {\n    position: absolute;\n    width: 360px;\n    height: 115px;\n    left: 15px;\n    top: 642px;\n}\n\n"
                }}
            />
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <img
                            src="../assets/meditation_home_header.png"
                            id="header-image"
                            alt="header"
                        />
                    </div>
                    <a href="home.html">
                        <img
                            src="./assets/meditation_home_home.png"
                            id="home-image"
                            alt="motif"
                            border={0}
                        />
                    </a>
                    <div className="col-sm">
                        <p id="heading">EXERCISES</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img
                            src="./assets/meditation_home_chosen.png"
                            id="chosen"
                            alt="chosen"
                        />
                        <p id="all">All</p>
                    </div>
                    <div className="col-sm">
                        <p id="favorite">Favorites</p>
                    </div>
                </div>
                <div className="row">
                    <a href="/exercise/waiting">
                        <img
                            src="./assets/meditation_home_pink_button.png"
                            id="pink_top"
                            alt="pink"
                            border={0}
                        />
                    </a>
                    <div className="col-sm">
                        <p id="meditation">MEDITATION</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img
                            src="./assets/meditation_home_blue_button.png"
                            id="blue_top"
                            alt="blue"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img
                            src="./assets/meditation_home_pink_button.png"
                            id="pink_bottom"
                            alt="pink"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img
                            src="./assets/meditation_home_blue_button.png"
                            id="blue_bottom"
                            alt="blue"
                        />
                    </div>
                </div>
            </div>
        </>

    )
}

export default MeditationHome