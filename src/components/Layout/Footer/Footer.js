/** @format */

import "../Footer/Footer.css";
import logo from "../../../assets/logo/logo.svg";
import Flip from "react-reveal/Flip";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="footer-20192">
        <div class="site-section">
          <div class="container">
            <div class="cta d-block d-md-flex justify-content-between align-items-center px-5">
              <div>
                <h2 class="mb-0"> Faith Fitness 💪🏻</h2>
                <h3 class="text-white">Let's get started!</h3>
              </div>
              <div class="ml-auto">
                <a href="#" class="btn btn-dark rounded-0 py-3 px-5">
                  Contact us
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                <Flip right>
                  <a href="#" class="footer-logo">
                    <img
                      src={logo}
                      alt="Not Found"
                      height="58px"
                      width="58px"
                    />
                  </a>
                </Flip>
              </div>
              <div class="col-sm">
                <h3>Customers</h3>
                <ul class="list-unstyled links">
                  <li>
                    <a href="#">Buyer</a>
                  </li>
                  <li>
                    <a href="#">Supplier</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm">
                <h3>Company</h3>
                <ul class="list-unstyled links">
                  <li>
                    <Link to="/about">
                      <a href="#">About us</a>
                    </Link>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <Link to="/contact">
                      <a href="#">Contact us</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="col-sm">
                <h3>Further Information</h3>
                <ul class="list-unstyled links">
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-3">
                <h3>Follow us</h3>

                <ul class="list-unstyled social d-flex gap-2">
                  <Flip right>
                    <li>
                      <a href="#">
                        <span class="fa fa-facebook"></span>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <span class="fa fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="fa fa-linkedin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="fa fa-youtube"></span>
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
