import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./pages/dashboard";
import Tables from "./pages/tables";
import Login from "./pages/login";
import Signup from "./pages/signup";
import DataEdit from "./pages/data-edit";
import CreateProduct from "./pages/create-product";
import Home from "./pages/home";

import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import Layout from "./hoc/Layout";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Layout />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/tables" component={Tables} />
            <Route path="/data-edit/:id" component={DataEdit} />
            <Route path="/create-product/" component={CreateProduct} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
