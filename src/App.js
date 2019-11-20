import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import page1 from "./pages/page1";
import page2 from "./pages/page2";
import page3 from "./pages/page3";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={page1} />
          <Route exact path="/page2" component={page2} />
          <Route exact path="/page3" component={page3} />
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