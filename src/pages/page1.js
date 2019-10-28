import React from 'react';
import logo from '../logo.svg';
import './page1.css';

class Page1 extends React.Component {

    render() {
        return (
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
        );
    }

}

export default Page1;