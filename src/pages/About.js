import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { serverHost } from "../config/serverHost";

const About = () => {
  const [isShow, setIsShow] = useState(false);
  const [menu, setMenu] = useState([]);

  const handleGetMenu = async () => {
    const items = JSON.parse(localStorage.getItem("data"));
    let res = await axios.get(`${serverHost.host}/menu/${items._id}`);
    if (res.status === 200) {
      console.log("response: ", res.data);
      setMenu(res.data);
    } else {
      console.log("error response");
    }
  };

  useEffect(() => {
    handleGetMenu();
  }, []);
  let username;
  const data = JSON.parse(localStorage.getItem("data"));
  if (data) {
    username = data.useracc;
  }
  const breakfast = menu?.menu?.breakfast;
  const lunch = menu?.menu?.lunch;
  const dinner = menu?.menu?.dinner;

  return (
    <>
      <div className="smoothies-beverage-landing-p">
        <img className="vector-icon" alt="background" src="./img/vector.svg" />
        <img className="ellipse-icon" alt src="./img/ellipse-37.svg" />
        {isShow && (
          <>
            <div className="menu-tran" onClick={() => setIsShow(false)}></div>
            <div className="menu">
              <div className="item__menu">
                <ul className="item__child">
                  <li>Breakfast</li>
                  {breakfast?.ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="item__menu">
                <ul className="item__child">
                  <li>Lunch</li>
                  <li>
                    {lunch?.ingredients.map((ingredient) => (
                      <li>{ingredient}</li>
                    ))}
                  </li>
                </ul>
              </div>
              <div className="item__menu">
                <ul className="item__child">
                  <li>Dinner</li>
                  <li>
                    {dinner?.ingredients.map((ingredient) => (
                      <li>{ingredient}</li>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
        <header className="hero-image-header" id="head-container">
          <img className="image-54-icon" alt="berry" src="./img/image-54.svg" />
          <img className="vector-icon1" alt src="./img/vector1.svg" />
          <div className="div" id="bg-content">
            <span>0</span>
            <span className="span">1</span>
          </div>
          {/* <img className="bowl-icon" alt="bowl" src="./img/bowl.svg" /> */}
          <div className="header-div" id="nav-bar">
            <span className="recipes-a" onClick={() => setIsShow(true)}>
              Recipes
            </span>
            <Link className="home-a" to="/">
              Home
            </Link>

            <Link className="tips-tricks" to="/healthy-eating">
              Tips &amp; Tricks
            </Link>

            {username ? (
              <Link className="login-a">Welcome {username}</Link>
            ) : (
              <Link className="login-a" to="/login">
                Login
              </Link>
            )}
            {username && (
              <Link
                className="login-ab"
                onClick={() => localStorage.clear()}
                to="/login"
              >
                Logout
              </Link>
            )}
            <Link className="button-a" to="/contact">
              <div className="contact-us-div">Contact Us</div>
            </Link>
          </div>
          <img className="content-icon" alt src="./img/content.svg" />
          <p className="title-home-f">HOMECHEF16.NET</p>
          <a className="facebook" href="#facebook">
            <img className="vector-icon2" alt />
            <img className="vector-icon3" alt src="./img/vector2.svg" />
          </a>
          <a className="twitter-a" href="#twitter">
            <img className="vector-icon2" alt />
            <img className="vector-icon5" alt src="./img/vector3.svg" />
          </a>
          <a className="instagram" href="#instagram">
            <img className="vector-icon2" alt />
            <img className="subtract-icon" alt src="./img/subtract.svg" />
          </a>
        </header>
        <div className="form-home">
          <div className="privacy-title">Privacy Policy</div>
          <div className="box">
            <div className="box-title">
              HOMECHEFT16.NET Privacy Policy and Cookie Policy
            </div>
            <div className="box-main-title">
              <span>LAST UPDATE</span>:June 22/2022
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </div>
          <div className="box text-full">
            <div className="box-title">1.Who are we</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
            <div className="box-title">2.About this policy</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
