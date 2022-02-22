/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "../../src/authentication/auth.css";

function SignIn() {
  return (
    <>
      <div className="signup-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <div className="form-header">
            <h2>Sign In</h2>
            <p>Fill out the Sign-In details!</p>
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              required="required"
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              required="required"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              required="required"
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirm_password"
              required="required"
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block btn-lg">
              Sign In
            </button>
          </div>
        </form>
        <div className="text-center small already-account">
          Not a member? <Link to="/signup">Register Here</Link>
        </div>
      </div>
    </>
  );
}

export default SignIn;
