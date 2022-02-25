/** @format */
import "../Cart/check.css";
import product1 from "../../../assets/productsCategories/catagory-1.jpg";
import { useState } from "react";

function CheckoutItems() {
  const [text, setText] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setText((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      text.name === "" &&
      text.email === "" &&
      text.address === "" &&
      text.contact === ""
    ) {
      console.log("Fill your fields to complete your place order process");
    } else {
      console.log("Order placed");
    }
  };

  const { name, email, contact, address } = text;

  const arr = [1, 2, 3, 4, 5];

  console.log("text", text);
  return (
    <div className="cart-top">
      <div class="card">
        <div class="card-body pt-5">
          <form onSubmit="return false">
            <div class="row">
              <div class="col-md-7">
                <div class="left border">
                  <div class="row">
                    <span class="header">Fill Information</span>
                  </div>

                  <div class="row">
                    <div class="col-6">
                      <span>
                        <span className="required-field">*</span>Full Name:
                      </span>
                      <input
                        placeholder="Name..."
                        name="name"
                        value={name}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-6">
                      <span>
                        <span className="required-field">*</span>Email Address:
                      </span>
                      <input
                        id="email"
                        placeholder="email..."
                        name="email"
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-6">
                      <span>
                        <span className="required-field">*</span>Contact Number:
                      </span>
                      <input
                        id="contact"
                        placeholder="Contact..."
                        name="contact"
                        value={contact}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-6">
                      <span>Zip Code:</span>
                      <input id="zip" placeholder="Zip..." />
                    </div>
                    <div class="col-12">
                      <span>
                        <span className="required-field">*</span>Address:
                      </span>
                      <textarea
                        id="address"
                        placeholder="Complete address..."
                        className="address-info"
                        name="address"
                        value={address}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div class="right border">
                  <div class="header">Order Summary</div>
                  <p>2 items</p>
                  <div className="item-main-wraper">
                    {arr.map((elem) => (
                      <div class="row item">
                        <div class="col-4 align-self-center">
                          <img class="img-fluid" src={product1} />
                        </div>
                        <div class="col-8">
                          <div class="row">
                            <b className="handle-padding">$ 26.99</b>
                          </div>
                          <div class="row text-muted">
                            Be Legandary Lipstick-Nude rose
                          </div>
                          <div class="row">Qty:1</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <hr />
                  <div class="row lower">
                    <div class="col text-left">Subtotal</div>
                    <div class="col text-right">$ 46.98</div>
                  </div>
                  <div class="row lower">
                    <div class="col text-left">Delivery</div>
                    <div class="col text-right">Free</div>
                  </div>
                  <div class="row lower">
                    <div class="col text-left">
                      <b>Total to pay</b>
                    </div>
                    <div class="col text-right">
                      <b>$ 46.98</b>
                    </div>
                  </div>

                  <input
                    type="button"
                    class="btn"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={handleSubmit}
                    value=" Place order"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* // popup model code */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                User Confermation
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Thank You for using our services, As the name suggests, this email
              contains a buyer’s order confirmation details, including what they
              bought, the purchase total, and the estimated delivery date.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItems;
