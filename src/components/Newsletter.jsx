import React from "react";
import swal from "sweetalert";

export default class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", products: [], loading: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });

    if (this.state.value.trim() === "") {
      // If the search input is empty, do not perform a search
      swal("", "Please enter a product name", "warning");
      this.setState({ loading: false });
      return;
    }

    try {
      const response = await fetch(
        `https://api.silocloud.io/api/v1/public/search-products?name=${this.state.value}`
      );

      if (!response.ok) {
        throw new Error("Product not available");
      }

      const data = await response.json();

      // Assuming the response structure
      if (data.success && data.data && data.data.products) {
        this.setState({ products: data.data.products }); // Update state with products
      } else {
        this.setState({ products: [] }); // If no products found
      }

      // swal("Search Complete", "Products found!", "success");
    } catch (error) {
      console.error("Error fetching products", error);
      swal("", "Product not available", "error");
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-center mt-5 rounded shadow-sm p-3 bg-light rounded">
        <div id="content" className="text-center">
          <h4>Search the products</h4>
          <form
            id="form"
            className="d-flex justify-content-center align-items-center p-4 w-100"
            onSubmit={this.handleSubmit}
          >
            {/* Row container for search bar and buttons */}
            <div className="row w-100">
              {/* Column for the search bar */}
              <div className="col-6 d-flex">
                <input
                  className="input border border-secondary rounded p-2 mx-2 flex-grow-1"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="Search products..."
                  required
                />
              </div>

              {/* Column for the buttons */}
              <div className="col-6 d-flex justify-content-start">
                <input
                  className="btn btn-success mx-2"
                  type="submit"
                  value="Search"
                  disabled={this.state.loading} // Disable button when loading
                />
                <button type="button" className="btn btn-primary mx-2">
                  SiloCloud
                </button>
                <button type="button" className="btn btn-warning mx-2">
                  Amazon
                </button>
                <button type="button" className="btn btn-danger mx-2">
                  Flipkart
                </button>
              </div>
            </div>
          </form>

          {/* Display search results */}
          {this.state.products.length > 0 && (
            <div className="mt-4">
              <h5>Search Results:</h5>
              <div className="row">
                {this.state.products.map((product) => (
                  <div key={product.id} className="col-md-4 mb-4">
                    <div className="card" style={{ height: "400px" }}>
                      <button className="btn btn-primary mt-3 mb-2">
                        {product.type}
                      </button>{" "}
                      <div
                        className=""
                        style={{
                          height: "200px",
                        }}
                      >
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt={product.name}
                          style={{
                            height: "200px",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text mb-2">
                          <strong>Price Rs: {product.price}</strong>
                        </p>

                        {/* Example button */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
