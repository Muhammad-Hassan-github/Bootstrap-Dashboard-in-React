import React from "react";
import { Link } from "react-router-dom";
import {useEffect} from 'react'
import BG from './bg.jpeg'

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div
      style={{
        backgroundImage: `url("${BG}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
          }}
    >
      <div className="global-container">
        <div className="card login-form">
          <div className="card-body">
            <h3 className="card-title text-center">
              <strong>Product</strong>
            </h3>
            <p className="text-center small">
              Welcome back! Please login to continue.
            </p>
            <div className="card-text">
              <form className="justify-content-center">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username or email"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-lock"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <Link to="/signup" style={{ float: "right", fontSize: "12px" }}>
                  Forgot password?{" "}
                </Link>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember Me
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn"
                  style={{ marginLeft: "22%", width: "130px" ,backgroundColor: '#FDCB2E'}}
                >
                  Sign in
                </button>

                <div className="sign-up">
                  New to Product? <Link to="/signup">Sign Up</Link>{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
