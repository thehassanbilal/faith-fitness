/** @format */

import "./ClientTestimonials.css";
import training from "../../../assets/Gym/training-2.jpg";
import training1 from "../../../assets/Gym/training-1.jpg";
import training2 from "../../../assets/Gym/training-3.jpg";

const ClientTestimonials = () => {
  return (
    <>
      <div class="post-slider text-white">
        <div class="container updated-container">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-md-6">
                    <img src={training2} class="img-fluid" alt="" />
                  </div>
                  <div class="col-md-6">
                    <h3>What our clients say's?</h3>

                    <p class="font-italic">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout
                    </p>
                    <ul>
                      <li>
                        <i class="fa fa-arrow-right"></i> The standard Lorem
                        Ipsum passage, used since the 1500s
                      </li>
                      <li>
                        <i class="fa fa-arrow-right"></i> 1914 translation by H.
                        Rackham
                      </li>
                      <li>
                        <i class="fa fa-arrow-right"></i> Section 1.10.33 of "de
                        Finibus Bonorum et Malorum"
                      </li>
                    </ul>
                    <p className="font-italic">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-md-6">
                    <img src={training} class="img-fluid" alt="" />
                  </div>
                  <div class="col-md-6">
                    <h3>What our clients say's?</h3>

                    <p class="font-italic">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout
                    </p>
                    <ul>
                      <li>
                        <i class="fa fa-arrow-right"></i> The standard Lorem
                        Ipsum passage, used since the 1500s
                      </li>
                      <li>
                        <i class="fa fa-arrow-right"></i> 1914 translation by H.
                        Rackham
                      </li>
                      <li>
                        <i class="fa fa-arrow-right"></i> Section 1.10.33 of "de
                        Finibus Bonorum et Malorum"
                      </li>
                    </ul>
                    <p className="font-italic">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-md-6">
                    <img src={training1} class="img-fluid" alt="" />
                  </div>
                  <div class="col-md-6">
                    <h3>What our clients say's?</h3>

                    <p class="font-italic">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout
                    </p>
                    <ul>
                      <li>
                        <i class="fa fa-arrow-right"></i> The standard Lorem
                        Ipsum passage, used since the 1500s
                      </li>
                      <li>
                        <i class="fa fa-arrow-right"></i> 1914 translation by H.
                        Rackham
                      </li>
                      <li>
                        <i class="fa fa-arrow-right"></i> Section 1.10.33 of "de
                        Finibus Bonorum et Malorum"
                      </li>
                    </ul>
                    <p className="font-italic">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              class="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientTestimonials;
