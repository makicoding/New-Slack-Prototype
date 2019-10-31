import React from 'react';
import logo from '../logo.svg';
import ScreenImage from '../components/screen_images';
import './page1.css';

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class Page1 extends React.Component {

    render() {
        return (

            <div>

                <div>
                    <img className="screenImage" src={"./assets/images/screens_exported_from_sketch_2x_png/HiFi_iPhone_XS_2.png"} alt={"Sketch Screen"} />
                </div>

                <ScreenImage />

                <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p>
                    Hello, this is Maki's test for page1.js and page1.css!
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

            </div>
        );
    }

}

export default Page1;