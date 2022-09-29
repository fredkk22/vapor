import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div>
      
    
        <div class="b-example-divider"></div>
      
        <header class="p-3 text-bg-dark">
          <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
              </a>
      
              <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <Link to="/">
              <button type="button" class="btn btn-outline-light me-2">HOME</button>
              </Link>
              <Link to="/Subscription">
              <button type="button" class="btn btn-outline-light">SUBSCRIBE</button>
                </Link>
              </ul>
  
      
              <div class="text-end">
                
                <button type="button" class="btn btn-outline-light me-2">Login</button>
                <button type="button" class="btn btn-warning">Sign-up</button>
              </div>
            </div>
          </div>
        </header>
      
        
      </div>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
