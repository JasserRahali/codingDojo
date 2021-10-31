import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class ProductAdd extends Form {
  state = {
    products: [],
    data: { Name: "", Qty: "", Price: "" },
    errors: {},
  };
  schema = {
    Name: Joi.string().required().label("Name"),
    Qty: Joi.string().required().min(5).label("Quantity"),
    Price: Joi.string().required().label("Price"),
  };

  doSubmit = () => {
    // Call the server
    console.log(this.state.data);
    const products = [this.state.data, ...this.state.products];
    this.setState({ products });
    this.props.history.push("/products");
    console.log("Submitted add ");
  };

  render() {
    return (
      <div>
        <h2>New Product</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("Name", "Name")}
          {this.renderInput("Qty", "Quantity")}
          {this.renderInput("Price", "Price")}
          {this.renderCancelButton("cancel")}
          {this.renderButton("Create")}
        </form>
      </div>
    );
  }
}

export default ProductAdd;
