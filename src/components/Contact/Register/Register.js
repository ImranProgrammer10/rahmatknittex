import React from "react";
import "./Register.css";
import logo from "./logo/log.641df51e.png";
import contact from "./logo/contact.png";

import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Register = () => {
  return (
    <>
      <div>
        <div className=" my-5 ">
          <h2 className="title">Contact Us</h2>
          <div className="mb-5 container">
            <img
              src={contact}
              className="img-fluid img-thumbnail"
              alt="women"
            />
          </div>

          <div className="row container-lg h-1 p-2 mx-auto">
            <div className="col-md-7 mt-5">
              <div className="d-md-flex  justify-content-around align-items-center py-2 shadow">
                <div className="my-3 ">
                  <h4 className="contactinfo mb-3 text-start ms-5">Address</h4>
                  <small>
                    <ul className="ms-3 fw-light text-black">
                      <li>
                        <i>House #192, Road #2,</i>
                      </li>
                      <li>
                        <i>Avenue #3, Mirpur DOHS,</i>
                      </li>
                      <li>
                        <i>Dhaka-1216, Bangladesh.</i>
                      </li>
                    </ul>
                    {/* <br /> */}

                    {/* <br /> */}
                  </small>
                </div>
                <div className=" my-5">
                  <h4 className="contact mb-3 text-start ms-5">Contact</h4>
                  <ul className="ms-2 fw-light  text-black">
                    <li className="mb-1">
                      <FaPhoneAlt className="colour"></FaPhoneAlt>{" "}
                      +8801913204880
                    </li>
                    <li>
                      <MdMail className="me-2 colour"></MdMail>{" "}
                      <a
                        className="text-decoration-none fst-italic text-dark"
                        target="blank"
                        href="https://info@apparelhut.net"
                      >
                        info@apparelhut.net
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              // onSubmit={handleRegistration}
              className="col-md-5 mt-5"
            >
              <input
                // onBlur={handleNameChange}
                className="input-field"
                type="text"
                placeholder="Enter Your Name"
              />
              <br />
              <input
                // onBlur={emailChange}
                className="input-field"
                type="Email"
                placeholder="Enter Your Email"
              />
              <br />
              <input
                // onBlur={passwordChange}
                className="input-field"
                type="password"
                placeholder="Enter Your password"
              />
              <br />

              <input className="input-button" type="submit" value="Submit" />
              <br />
              <br />

              <button
                // onClick={handleGoogleLogin}
                className="btn btn-primary  w-50"
              >
                Google Sign In
              </button>
            </div>
          </div>
          <div>
            <img className="img-fluid" src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
