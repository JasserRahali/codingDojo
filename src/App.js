import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Products from "./components/products";
import NotFound from "./components/notFound";
import ProductDetails from "./components/productDetails";
import ProductEdit from "./components/productEdit";
import ProductAdd from "./components/productAdd";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products/:id/edit" component={ProductEdit}></Route>
            <Route path="/products/new" component={ProductAdd}></Route>
            <Route path="/products/:id" component={ProductDetails}></Route>
            <Route path="/products" component={Products}></Route>
            <Route path="/not-found" component={NotFound}></Route>!
            <Redirect from="/" exact to="/products" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
