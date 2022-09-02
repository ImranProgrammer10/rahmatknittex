import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";
import  "../Footer/Footer.css";
const Footer = () => {
  return (
    <>
      <div className=" container-fluid bg-dark text-white ">
        <div className="">
          <div className="mb-0 row row-cols-1 row-cols-sm-2 row-cols-lg-4">
            <div className="col footer-col">
              <h4>Company</h4>

              <ul>
                <li>
                  <Link to="/home">help center</Link>
                </li>
                <li>
                  <Link to="/home">about us</Link>
                </li>
                <li>
                  <Link to="/home">our services</Link>
                </li>
                <li>
                  <Link to="/home">privacy policy</Link>
                </li>
                <li>
                  <Link to="/home">Terms & condition</Link>
                </li>
              </ul>
            </div>
            <div className="col footer-col">
              <h4>Get Help</h4>
              <ul>
                <li>
                  <Link to="/home">FAQ</Link>
                </li>
                <li>
                  <Link to="/home">shipping</Link>
                </li>
                <li>
                  <Link to="/home">returns</Link>
                </li>
                <li>
                  <Link to="/home">order status</Link>
                </li>
                <li>
                  <Link to="/home">payment options</Link>
                </li>
              </ul>
            </div>
            <div className="col footer-col">
              <h4>Online Shop</h4>
              <ul>
                <li>
                  <Link to="/home">t-shirts</Link>
                </li>
                <li>
                  <Link to="/home">jackets</Link>
                </li>
                <li>
                  <Link to="/home">cap</Link>
                </li>
                <li>
                  <Link to="/home">pants</Link>
                </li>
                <li>
                  <Link to="/home">sportswear</Link>
                </li>
              </ul>
            </div>
            <div className="col footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <Link to="/home">
                  <FaFacebook></FaFacebook>
                </Link>
                <Link to="/home">
                  <FaWhatsapp></FaWhatsapp>
                </Link>
                <Link to="/home">
                  <FaInstagram></FaInstagram>
                </Link>
                <Link to="/home">
                  <FaTwitter></FaTwitter>
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <small className="copy">
            &copy;Copyright 2021-2022. All rights are reserved{" "}
          </small>
        </div>
      </div>
    </>
  );
};
export default Footer;
