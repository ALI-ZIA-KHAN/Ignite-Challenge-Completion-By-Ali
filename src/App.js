import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Homepage from "./Components/Home"


function App() {
  return (
    <Router>
      <>
      <Route path="/"  component={Homepage} />
      <Route path="/home" exact component={Homepage} />
      <Route path="/services"  exact component={Homepage} />
      <Route path="/howitworks"  exact  component={Homepage} /> 
      </>
    </Router>
  );
}

export default App;