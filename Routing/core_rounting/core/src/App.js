import React from "react";

import Form from "./components/Form";
import People from "./components/People";
import Planet from "./components/Planet";
import { Routes, Route, Link,Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <h1>Luke API-walker</h1>
      <Form />
      <Switch>
        <Route path="/people/:id">
          <People />
        </Route>
        <Route path="/planets/:id">
          <Planet />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;