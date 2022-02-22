/** @format */

import "../Footer/Footer.css";
import logo from "../../../assets/logo/logo.svg";
import Flip from "react-reveal/Flip";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-20192">
        <div className="site-section">
          <div className="container">
            <div className="cta d-block d-md-flex justify-content-between align-items-center px-5">
              <div>
                <h2 className="mb-0"> Faith Fitness 💪🏻</h2>
                <h3 className="text-white">Let's get started!</h3>
              </div>
              <div className="ml-auto">
                <Link to="/contact">
                  <a href="#" className="btn btn-dark rounded-0 py-3 px-5">
                    Contact us
                  </a>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <Flip right>
                  <a href="#" className="footer-logo">
                    <Link to="/">
                      <img
                        src={logo}
                        alt="Not Found"
                        height="58px"
                        width="58px"
                      />
                    </Link>
                  </a>
                </Flip>
              </div>
              <div className="col-sm">
                <h3>Customers</h3>
                <ul className="list-unstyled links">
                  <li>
                    <a href="#">Food Suplements</a>
                  </li>
                  <li>
                    <Link to="/dietplan">
                      <a href="#">Diet Plans</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm">
                <h3>Company</h3>
                <ul className="list-unstyled links">
                  <li>
                    <Link to="/about">
                      <a href="#">About us</a>
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact">
                      <a href="#">Contact us</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm">
                <h3>Further Information</h3>
                <ul className="list-unstyled links">
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h3>Follow us</h3>

                <ul className="list-unstyled social d-flex gap-2">
                  <Flip right>
                    <li>
                      <a href="#">
                        <span className="fa fa-facebook"></span>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <span className="fa fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-linkedin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-youtube"></span>
                      </a>
                    </li>
                  </Flip>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
