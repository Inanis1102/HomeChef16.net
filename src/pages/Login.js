import React, { useState } from "react";
import axios from "axios";
import { serverHost } from "../config/serverHost";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [useracc, setUserAcc] = useState();
  const [password, setPassword] = useState();

  const login = async (e) => {
    let res = await axios.post(`${serverHost.host}/login`, {
      useracc: useracc,
      password: password,
    });
    if (res.status === 200) {
      localStorage.setItem("data", JSON.stringify(res.data));
      return navigate("/");
    } else {
      console.log("Error!");
    }
  };

  return (
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <div class="login100-pic js-tilt" data-tilt>
            <img src="images/img-01.png" alt="IMG" />
          </div>

          <div class="login100-form validate-form">
            <span class="login100-form-title">Member Login</span>

            <div
              class="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                class="input100"
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e) => setUserAcc(e.target.value)}
              />
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div
              class="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                class="input100"
                type="password"
                name="pass"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <i class="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div class="container-login100-form-btn">
              <button class="login100-form-btn" onClick={login}>
                Login
              </button>
            </div>

            <div class="text-center p-t-12">
              <span class="txt1">Forgot</span>
              <a class="txt2" href="#">
                Username / Password?
              </a>
            </div>

            <div class="text-center p-t-136">
              <a class="txt2" href="#">
                Create your Account
                <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
