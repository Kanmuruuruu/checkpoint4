import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import AddPlayer from "./components/AddPlayer/AddPlayer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ajouter-joueur" component={AddPlayer} />
      </Switch>
    </div>
  );
}

export default App;
