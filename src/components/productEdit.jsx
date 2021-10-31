import React from "react";
import { getProducts } from "../services/fakeProductService";
import Form from "./common/form";
import Joi from "joi-browser";

class ProductEdit extends Form {
  state = {
    data: { Name: "", Qty: "", Price: "" },
    product: { Name: "", Qty: "", Price: "" },
    errors: {},
  };

  schema = {
    Name: Joi.string().required().label("Name"),
    Qty: Joi.number().required().min(1).label("Quantity"),
    Price: Joi.string().required().label("Price"),
  };
  componentDidMount() {
    const { match } = this.props;
    let product = { ...this.state.product };
    product = getProducts().find((o) => o._id === match.params.id);
    this.setState({ product });
  }
  doSubmit = () => {
    // Call the server
    console.log("Submitteddd");
  };

  render() {
    const { product, errors } = this.state;
    if (product) {
      return (
        <form onSubmit={this.handleSubmit}>
          <h2 className="ml-2">Product Details</h2>
          <div className="form-group ml-4">
            <div className="mb-3 row">
              <label htmlFor="Name" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  name="Name"
                  value={product.Name}
                  onChange={this.handleChange}
                />
                {errors && <div>{errors.Name}</div>}
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="Name" className="col-sm-2 col-form-label">
                Qty
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="Qty"
                  name="Qty"
                  onChange={this.handleChange}
                  value={product.Qty}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="Name" className="col-sm-2 col-form-label">
                Price
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="Price"
                  name="Price"
                  value={product.Price}
                />
              </div>
            </div>

            <button
              className="btn btn-primary m-2"
              onClick={() => this.props.history.push("/products")}
            >
              cancel
            </button>

            <button className="btn btn-success m-2">update</button>
          </div>
        </form>
      );
    } else return null;
  }
}

export default ProductEdit;
