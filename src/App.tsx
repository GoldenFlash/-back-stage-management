import React from 'react';
import 'antd/dist/antd.css';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./pages/layout/layout"
const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Layout}>
            {/* <Route path="nav1" component={Nav1}></Route> */}
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
