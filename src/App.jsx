// import React, { useState, useEffect } from 'react'
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./pages/client/Home";
import { Product } from "./pages/client/Product";
import { Login } from "./pages/client/Login";
import { Categories } from "./pages/client/Categories";
import { Contact } from "./pages/client/Contact";
import { Dashboard } from "./pages/admin/Dashboard";
import { Register } from "./pages/client/Register";
import { Checkout } from "./pages/client/Checkout";

import "./App.css";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
