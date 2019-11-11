import React from 'react';
import { Link } from "react-router-dom";
import './page1.css';
import '../components/screen_image/screenImage.css';
import '../components/page_background/pageBackground.css';

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class Page1 extends React.Component {

    // page1Button1Click = () => {
    //     window.open(
    //         "/page2", "_self"
    //     );
    // }

    render() {
        return (

            <div>

                <div className="screenImageContainer">
                    <img className="screenImage" src={"./assets/images/screens_exported_from_sketch_2x_png/HiFi_iPhone_XS_2.png"} alt={"Sketch Screen"} />

                    {/* <a className="page1button1" onClick={this.page1Button1Click}></a> */}

                    <Link className="page1button1" to="/page2"></Link>

                    <a className="page1button2"></a>
                </div>

            </div>
        );
    }

}

export default Page1;