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
              
              <p class= "text-primary fs-3 pe-5"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" class="bi bi-droplet" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
              <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
              </svg>Vapor</p>
              
              <ul class="nav col-12 col-lg-auto me-lg-auto justify-content-center mb-md-0">
                
              <Link to="/">
              <button type="button" class="btn btn-outline-light me-2">Home</button>
              </Link>
              <Link to="/Subscription">
              <button type="button" class="btn btn-outline-light">Subscribe</button>
                </Link>
              </ul>
  
      
              <div class="text-end">
                <Link to="/Login">
                <button type="button" class="btn btn-outline-light me-2">Login</button>
                </Link>
                <Link to="/Signup">
                <button type="button" class="btn btn-warning">Sign-up</button>
                </Link>
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
