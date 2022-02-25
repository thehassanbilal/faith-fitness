/** @format */

import "../ClientTestimonials/ClientTestimonials.css";
import training from "../../../assets/Gym/training-2.jpg";
import training1 from "../../../assets/Gym/training-1.jpg";
import training2 from "../../../assets/Gym/training-3.jpg";

const ClientTestimonials = () => {
  return (
    <>
      <div className="post-slider text-white">
        <div className="container updated-container">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-6">
                    <img src={training2} className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-6">
                    <h3>What our clients say's?</h3>

                    <p className="font-italic">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout
                    </p>
                    <ul>
                      <li>
                        <i className="fa fa-arrow-right"></i> The standard Lorem
                        Ipsum passage, used since the 1500s
                      </li>
                      <li>
                        <i className="fa fa-arrow-right"></i> 1914 translation
                        by H. Rackham
                      </li>
                      <li>
                        <i className="fa fa-arrow-right"></i> Section 1.10.33 of
                        "de Finibus Bonorum et Malorum"
                      </li>
                    </ul>
                    <p classNameName="font-italic">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6">
                    <img src={training} className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-6">
                    <h3>What our clients say's?</h3>

                    <p className="font-italic">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout
                    </p>
                    <ul>
                      <li>
                        <i className="fa fa-arrow-right"></i> The standard Lorem
                        Ipsum passage, used since the 1500s
                      </li>
                      <li>
                        <i className="fa fa-arrow-right"></i> 1914 translation
                        by H. Rackham
                      </li>
                      <li>
                        <i className="fa fa-arrow-right"></i> Section 1.10.33 of
                        "de Finibus Bonorum et Malorum"
                      </li>
                    </ul>
                    <p classNameName="font-italic">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6">
                    <img src={training1} className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-6">
                    <h3>What our clients say's?</h3>

                    <p className="font-italic text-clr">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout
                    </p>
                    <ul>
                      <li>
                        <i className="fa fa-arrow-right"></i> The standard Lorem
                        Ipsum passage, used since the 1500s
                      </li>
                      <li>
                        <i className="fa fa-arrow-right"></i> 1914 translation
                        by H. Rackham
                      </li>
                      <li>
                        <i className="fa fa-arrow-right"></i> Section 1.10.33 of
                        "de Finibus Bonorum et Malorum"
                      </li>
                    </ul>
                    <p classNameName="font-italic text-clr">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientTestimonials;
