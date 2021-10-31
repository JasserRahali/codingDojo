import React, { Component } from "react";
import ProductsTable from "./productsTable";
import Pagination from "./common/pagination";
import { getProducts } from "../services/fakeProductService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import { Link } from "react-router-dom";

class Products extends Component {
  state = {
    products: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    this.setState({ products: getProducts() });
  }

  handleDelete = (product) => {
    const products = this.state.products.filter((m) => m._id !== product._id);
    this.setState({ products });
  };

  handleDetails = (product) => {
    const products = this.state.products.filter((m) => m._id !== product._id);
    this.setState({ products });
  };

  handleEdit = (product) => {
    const products = this.state.products.filter((m) => m._id !== product._id);
    this.setState({ products });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      products: allProducts,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allProducts.filter((m) => m.genre._id === selectedGenre._id)
        : allProducts;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const products = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: products };
  };

  render() {
    const { length: count } = this.state.products;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) return <p>There are no products in the database.</p>;

    const { totalCount, data: products } = this.getPagedData();

    return (
      <React.Fragment>
        <div className="row m-4">
          <div className="col-6">
            <h2>Product Details</h2>
          </div>
          <div className="col-2">
            <Link to={"/products/new"}>
              <button className="btn btn-primary">Add Product</button>
            </Link>
          </div>
        </div>

        <div className="col ml-4">
          <ProductsTable
            products={products}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onDetails={this.handleDetails}
            onEdit={this.handleEdit}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
