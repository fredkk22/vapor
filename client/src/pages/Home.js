import React from "react";
import PUBG from "../assets/PUBG.jpg";
import LEGO from "../assets/Lego_Star_Wars.jpg";
import EldenRing from "../assets/Elden_Ring.jpg";
import RedDead2 from "../assets/Red_Dead_2.jpg";
import Destiny2 from "../assets/Destiny_2.jpg";
import Portal2 from "../assets/Portal_2.jpg";
import Dota2 from "../assets/Dota_2.jpg";
import Hades from "../assets/Hades.jpg";
import ApexLegends from "../assets/Apex_Legends.jpg";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>

      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Welcome to Vapor</h1>
            <p className="lead text-light">Vapor is an open client service for purchasing and storing video games. Our Goal is to create a hub of gamers dedicated to their craft and offer exclusive services our competition lacks. Get ready for your journey with Vapor!</p>
            <div>
              <Link to="/Subscription">
                <div className="btn btn-primary my-2">Subscribe to Vapor</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            <div className="col">
              <div className="card shadow-sm">
                <img src={PUBG} />
                <div className="card-body">
                  <p className="card-text">PUBG: Battlegrounds</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link to='/Checkout'>
                        <button type="button" className="btn btn-sm btn-outline-primary">Purchase</button>
                      </Link>
                      <button type="button" className="btn btn-sm btn-outline-success">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src={LEGO} />
                <div className="card-body">
                  <p className="card-text">LEGO® Star Wars™: The Skywalker Saga</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <Link to='/Checkout'>
                        <button type="button" className="btn btn-sm btn-outline-primary">Purchase</button>
                      </Link>
                      <button type="button" className="btn btn-sm btn-outline-success">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src={EldenRing} />
                <div className="card-body">
                  <p className="card-text">Elden Ring</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <Link to='/Checkout'>
                        <button type="button" className="btn btn-sm btn-outline-primary">Purchase</button>
                      </Link>
                      <button type="button" className="btn btn-sm btn-outline-success">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src={RedDead2} />
                <div className="card-body">
                  <p className="card-text">Red Dead Redemption 2</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <Link to='/Checkout'>
                        <button type="button" className="btn btn-sm btn-outline-primary">Purchase</button>
                      </Link>
                      <button type="button" className="btn btn-sm btn-outline-success">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src={Destiny2} />
                <div className="card-body">
                  <p className="card-text">Destiny 2</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <Link to='/Checkout'>
                        <button type="button" className="btn btn-sm btn-outline-primary">Purchase</button>
                      </Link>
                      <button type="button" className="btn btn-sm btn-outline-success">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src={Portal2} />
                <div className="card-body">
                  <p className="card-text">Portal 2</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <Link to='/Checkout'>
                        <button type="button" className="btn btn-sm btn-outline-primary">Purchase</button>
                      </Link>
                      <button type="button" className="btn btn-sm btn-outline-success">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src={Dota2} />
                <div className="card-body">
                  <p className="card-text">Dota 2</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <Link to='/Checkout'>
                        <button type="button" className="btn btn-sm btn-outline-primary">Purchase</button>
                      </Link>
                      <button type="button" className="btn btn-sm btn-outline-success">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src={Hades} />
                <div className="card-body">
                  <p className="card-text">Hades</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <Link to='/Checkout'>
                        <button type="button" className="btn btn-sm btn-outline-primary">Purchase</button>
                      </Link>
                      <button type="button" className="btn btn-sm btn-outline-success">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src={ApexLegends} />
                <div className="card-body">
                  <p className="card-text">Apex Legends</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <Link to='/Checkout'>
                        <button type="button" className="btn btn-sm btn-outline-primary">Purchase</button>
                      </Link>
                      <button type="button" className="btn btn-sm btn-outline-success">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>







  );
};

export default Home;
