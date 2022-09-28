import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Vapor</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$5<small class="text-muted fw-dark">/mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>1 VaporCoin Per Purchase</li>
                <li>20 GB of Storage</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Vapor Elite</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$15<small class="text-muted fw-light">/mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>5 VaporCoin Per Purchase</li>
                <li>50 GB of storage</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3 text-bg-danger">
              <h4 class="my-0 fw-normal">Vapor Elite Pro</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$30<small class="text-muted fw-dark">/mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>15 VaporCoin Per Purchase</li>
                <li>100 GB of storage</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
            </div>
          </div>
        </div>
      </div>









    </div>
  );
};

export default Home;
