import React from 'react';
import { Route, Switch } from "react-router-dom";
import SpellsContainer from "./SpellsContainer";
import Header from "./Header";
import Navbar from "./Navbar";
import AddSpell from "./AddSpell"
import Home from "./Home";
import "./styles.css";


function App({handleNewSpell, spells, setSpells}) {

  function handleNewSpell (newSpell) {
    const updatedSpells=[...spells, newSpell];
    setSpells(updatedSpells)
}
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/addspell">
          <AddSpell  onAddSpell={handleNewSpell}/>
        </Route>
        <Route exact path="/spellscontainer">
          <SpellsContainer />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
