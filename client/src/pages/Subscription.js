import React from "react";
import { Link } from "react-router-dom";
// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";

const Subscription = () => {
  return (
    <div className="container">
      <br></br>
      <br></br>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Vapor+</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$5<small class="text-muted fw-light">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Vapor Newsletter Subscription</li>
                <li>1 VaporCoin Per Purchase</li>
                <li>50 GB of Storage</li>
              </ul>
              <Link to='/Checkout'>
                <button type="button" className="w-100 btn btn-lg btn-primary">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Vapor Elite</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$15<small class="text-muted fw-light">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Vapor Newsletter Subscription</li>
                <li>5 VaporCoin Per Purchase</li>
                <li>100 GB of storage</li>
                <li>Early Access to Select Games</li>
              </ul>
              <Link to='/Checkout'>
                <button type="button" className="w-100 btn btn-lg btn-primary">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3 text-bg-danger">
              <h4 className="my-0 fw-normal">Vapor Elite Pro</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$30<small class="text-muted fw-light">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Vapor Newsletter Subscription</li>
                <li>15 VaporCoin Per Purchase</li>
                <li>150 GB of storage</li>
                <li>Early Access to All Games</li>
                <li>Vapor Elite Pro Member NFT</li>
              </ul>
              <Link to='/Checkout'>
                <button type="button" className="w-100 btn btn-lg btn-danger">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>









    </div>
  );
};

export default Subscription;
