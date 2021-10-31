import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

class ProductsTable extends Component {
  columns = [
    {
      path: "_id",
      label: "id",
    },
    { path: "Name", label: "Name" },
    { path: "Qty", label: "Qty" },
    { path: "Price", label: "Price" },
    {
      key: "Edit",
      content: (product) => (
        <Link to={`/products/${product._id}/edit`}>
          <button
            onClick={() => this.props.onEdit(product)}
            className="btn btn-primary btn-sm"
          >
            Edit
          </button>
        </Link>
      ),
    },
    {
      key: "Details",
      content: (product) => (
        <Link to={`/products/${product._id}`}>
          <button
            onClick={() => this.props.onDetails(product)}
            className="btn btn-info btn-sm"
          >
            Details
          </button>
        </Link>
      ),
    },
  ];

  render() {
    const { products, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={products}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ProductsTable;
