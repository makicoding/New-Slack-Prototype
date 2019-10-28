// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import page1 from "./pages/page1";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={page1} />
          {/* <Route exact path="/MainMenu" component={MainMenu} />
          <Route exact path="/CalorieEntry" component={CalorieEntry} />
          <Route exact path="/CalorieEntryEdit" component={CalorieEntryEdit} /> */}
          {/* <Route exact path="/anotherpage/:id" component={AnotherPage} /> */}
        </Switch>
      </div>
    </Router>
  );
}

//  render={() => (<CalorieEntryEdit calorieData={"Hello There"}/>)}

export default App;