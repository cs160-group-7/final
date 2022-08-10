import React from "react"

const MeditationWaiting = () => {
    return (
        <>
            <meta charSet="UTF-8" />
            {/* Bootstrap CSS */}
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n\n#motif-image {\n    object-fit: contain;\n    position: absolute;\n    width: 117px;\n    height: 172px;\n    left: 422px;\n    top: 1500px;\n}\n\n#comments {\n    position: absolute;\n    width: 800px;\n    height: 70px;\n    left: 100px;\n    top: 800px;\n    font-family: 'Inconsolata';\n    font-style: normal;\n    font-weight: 300;\n    font-size: 40px;\n    line-height: 100px;\n    text-align: center;\n\n    color: #000000;\n}\n\n"
                }}
            />
            <div className="row">
                <div className="col-sm">
                    <p id="comments">
                        FIND SOMEWHERE COMFORTABLE EXERCISE WILL BEGIN SHORTLY
                    </p>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img
                            src="./assets/meditation_waiting_motif.png"
                            id="motif-image"
                            alt="motif"
                        />
                    </div>
                </div>
            </div>
        </>

    )
}

export default MeditationWaiting