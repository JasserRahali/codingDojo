import React from "react";
import { getProducts } from "../services/fakeProductService";

class ProductDetails extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    this.setState({ products: getProducts() });
  }
  render() {
    const { match } = this.props;
    let product = this.state.products.find((o) => o._id === match.params.id);
    if (product) {
      return (
        <React.Fragment>
          <h2 className="ml-2">Product Details</h2>
          <div className="content ml-4">
            <div className="mb-3 row">
              <label htmlFor="Name" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="Name"
                  value={product.Name}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="Name" className="col-sm-2 col-form-label">
                Qty
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="Qty"
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
                  readOnly
                  className="form-control-plaintext"
                  id="Price"
                  value={product.Price}
                />
              </div>
            </div>

            <button
              className="btn btn-primary m-2"
              onClick={() => this.props.history.push("/products")}
            >
              back
            </button>

            <button className="btn btn-danger m-2">delete</button>
          </div>
        </React.Fragment>
      );
    } else return null;
  }
}

export default ProductDetails;
