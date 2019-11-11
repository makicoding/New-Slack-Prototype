import React from 'react';
import { Link } from "react-router-dom";
// import './page1.css';
import '../components/screen_image/screenImage.css';
import '../components/page_background/pageBackground.css';

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class Page2 extends React.Component {

    page2Button1Click = () => {
        window.open(
            "/", "_self"
        );
    }

    render() {
        return (

            <div>

                <div className="screenImageContainer">
                    <img className="screenImage" src={"./assets/images/screens_exported_from_sketch_2x_png/HiFi_iPhone_XS_2.png"} alt={"Sketch Screen"} />

                    <Link className="page2Button1" onClick={this.page2Button1Click}></Link>
                </div>

            </div>
        );
    }

}

export default Page2;