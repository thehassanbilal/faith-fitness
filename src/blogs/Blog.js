/** @format */

import React from "react";
import "../blogs/blog.css";
import post1 from "../../src/assets/Gym/training-1.jpg";
import post2 from "../../src/assets/Gym/training-2.jpg";
import post3 from "../../src/assets/Gym/training-3.jpg";
import post4 from "../assets/dietplan/dietplan1.jpg";
import post5 from "../assets/dietplan/dietplan2.jpg";
import post6 from "../assets/dietplan/dietplan3.jpg";
import Flip from "react-reveal/Flip";

export default function Blog() {
  return (
    <main>
      <div class="container">
        <section class="text-center">
          <h1 className="pricingSection-heading">Latest Posts</h1>
          <div className="pricingSection-title">
            <p className="pricingSection-title-firstHalf">Our</p>
            <p className="pricingSection-title-secondHalf">Intresting Blogs</p>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4">
              <Flip left>
                <div class="card">
                  <div
                    class="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img src={post1} class="img-fluid" />
                    <a href="#!">
                      <div class="mask"></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Post title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#!" class="btn ">
                      Read
                    </a>
                  </div>
                </div>
              </Flip>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <Flip left>
                <div class="card">
                  <div
                    class="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img src={post2} class="img-fluid" />
                    <a href="#!">
                      <div class="mask"></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Post title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#!" class="btn ">
                      Read
                    </a>
                  </div>
                </div>
              </Flip>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <Flip right>
                <div class="card">
                  <div
                    class="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img src={post3} class="img-fluid" />
                    <a href="#!">
                      <div class="mask"></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Post title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#!" class="btn ">
                      Read
                    </a>
                  </div>
                </div>
              </Flip>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4">
              <Flip left>
                <div class="card">
                  <div
                    class="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img src={post4} class="img-fluid" />
                    <a href="#!">
                      <div class="mask"></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Post title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#!" class="btn ">
                      Read
                    </a>
                  </div>
                </div>
              </Flip>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <Flip left>
                <div class="card">
                  <div
                    class="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img src={post5} class="img-fluid" />
                    <a href="#!">
                      <div class="mask"></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Post title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#!" class="btn ">
                      Read
                    </a>
                  </div>
                </div>
              </Flip>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <Flip right>
                <div class="card">
                  <div
                    class="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img src={post6} class="img-fluid" />
                    <a href="#!">
                      <div class="mask"></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Post title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#!" class="btn ">
                      Read
                    </a>
                  </div>
                </div>
              </Flip>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
