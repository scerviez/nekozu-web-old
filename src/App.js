import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navi from "./navbar"

import List from './List'
import Home from './Home'
import Not from './nothing'
import Contact from './Contact'
import Footer from './footer'

export default function App() {
  return (
    <main>
    <Router>
      <Navi />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/List" component={List} />
        <Route path="/Contact" component={Contact} />
        <Route component={Not} />
      </Switch>
    </Router>
    <Footer />
    </main> 
    );
}
