import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { serverHost } from "../config/serverHost";
import { useParams } from "react-router-dom";
import "../index.css";
import "../Footer.css";

const Detail = () => {
  const [isShow, setIsShow] = useState(false);
  const [dish, setDish] = useState();
  const [menu, setMenu] = useState();
  const [content, setContent] = useState();
  const [cmtList, setCmtList] = useState([]);
  const [error, setError] = useState();
  let { id } = useParams();

  const handleGetDishDetail = async () => {
    let res = await axios.get(`${serverHost.host}/dish/${id}`);
    if (res.status === 200) {
      setDish(res.data);
    } else {
      console.log("error response");
    }
  };

  const handleGetComment = async () => {
    let res = await axios.get(`${serverHost.host}/cmt/${id}`);
    if (res.status === 200) {
      setCmtList(res.data);
      console.log("cmt list", res.data);
    } else {
      console.log("error response");
    }
  };

  const handleGetMenu = async () => {
    const items = JSON.parse(localStorage.getItem("data"));
    let res = await axios.get(`${serverHost.host}/menu`);
    if (res.status === 200) {
      console.log("response: ", res.data);
      setMenu(res.data);
    } else {
      console.log("error response");
    }
  };
  let i = 1;
  const handleSendCmt = async () => {
    if (username) {
      let res = await axios.post(`${serverHost.host}/cmt`, {
        userId: data._id,
        dishId: id,
        content: content,
      });
      if (res.status === 200) {
        handleGetComment();
      } else {
        console.log("error response");
      }
    }
    setError("Please login first");
  };

  useEffect(() => {
    handleGetDishDetail();
    handleGetMenu();
    handleGetComment();
  }, [id, i]);
  let breakfast;
  let lunch;
  let dinner;
  menu?.map((me) => {
    breakfast = me.breakfast;
    lunch = me.lunch;
    dinner = me.dinner;
  });

  let username;
  const data = JSON.parse(localStorage.getItem("data"));
  if (data) {
    username = data.useracc;
  }

  return (
    <>
      <div className="smoothies-beverage-landing-p">
        <img className="vector-icon" alt="background" src="../img/vector.svg" />
        <img className="ellipse-icon" alt src="../img/ellipse-37.svg" />
        {isShow && (
          <>
            <div className="menu-tran" onClick={() => setIsShow(false)}></div>
            <div className="menu">
              <div className="item__menu">
                <ul className="item__child">
                  <li>Breakfast</li>
                  {breakfast?.map((item) => {
                    return (
                      <li>
                        <Link to={`/detail/${item._id}`}>{item.dishname}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="item__menu">
                <ul className="item__child">
                  <li>Lunch</li>

                  {lunch?.map((item) => {
                    return (
                      <li>
                        <Link to={`/detail/${item._id}`}>{item.dishname}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="item__menu">
                <ul className="item__child">
                  <li>Dinner</li>

                  {dinner?.map((item) => {
                    return (
                      <li>
                        <Link to={`/detail/${item._id}`}>{item.dishname}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </>
        )}

        <header className="hero-image-header" id="head-container">
          <div className="div" id="bg-content">
            <span>0</span>
            <span className="span">1</span>
          </div>
          <iframe
            className="bowl-icon"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yQyo_ijPfUs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="header-div" id="nav-bar">
            <span className="recipes-a" onClick={() => setIsShow(true)}>
              Recipes
            </span>
            <Link className="home-a" to="/">
              Home
            </Link>
            <div className="selector-div" />

            <Link className="tips-tricks" to="/healthy-eating">
              Tips &amp; Tricks
            </Link>

            {username ? (
              <Link className="login-a" to="#">
                <p style={{ color: "red" }}> Welcome </p>
                {username}
              </Link>
            ) : (
              <Link className="login-a" to="/login">
                Login
              </Link>
            )}
            {username && (
              <Link className="login-ab"   onClick={()=>localStorage.clear()} to="/login">
                Logout
              </Link>
            )}
            <Link className="button-a" to="/contact">
              <div className="bg-div" />
              <div className="contact-us-div">Contact Us</div>
            </Link>
          </div>
          <img className="content-icon" alt src="../img/content.svg" />
          <p className="title-home-f">HOMECHEF16.NET</p>
        </header>
        <div className="form-home">
          <div className="privacy-title"> {dish?.dishname}</div>
          <div className="list-icon">
            <img className="v-icon " alt src="../img/vector2.svg" />
            <img className="v-icon " alt src="../img/vector3.svg" />
            <img className="v-icon" alt src="../img/subtract.svg" />
          </div>
          <div className="list-how">
            <div className="list-left">
              <ul className="list-how-item">
                <li>Ingredients</li>
                {dish?.ingredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="list-right">
              <ul className="list-how-item">
                <li>Preparation</li>
                {dish?.howtomade.map((made) => (
                  <li>{made}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <h3 className="latest-recipes" id="Latest Recipes">
          <b>Related Recipes </b>
        </h3>
        <img
          className="rectangle-icon"
          alt
          src="../img/rectangle-1842.svg"
          id="rectangleImage"
        />
        <img
          className="rectangle-icon1"
          alt
          src="../img/rectangle-1843.svg"
          id="rectangleImage1"
        />
        <img
          className="rectangle-icon2"
          alt
          src="../img/rectangle-1844.svg"
          id="rectangleImage2"
        />
        <img
          className="rectangle-icon3"
          alt
          src="../img/rectangle-1845.svg"
          id="rectangleImage3"
        />
        <img
          className="rectangle-icon4"
          alt
          src="../img/rectangle-1846.svg"
          id="rectangleImage4"
        />
        <img
          className="rectangle-icon5"
          alt
          src="../img/rectangle-1847.svg"
          id="rectangleImage5"
        />
        <a className="italian-beef-rolls" href="#">
          Italian Beef Rolls
        </a>
        <b className="fruit-jam-chocolate-covered-r">
          <p className="fruit-jam-chocolate-">Fruit Jam Chocolate-</p>
          <p className="covered-rolls-p">Covered Rolls</p>
        </b>
        <b className="yuzu-ponzu-salmon-with-crispy">
          <p className="fruit-jam-chocolate-">Yuzu Ponzu Salmon</p>
          <p className="covered-rolls-p">With Crispy Rice</p>
        </b>
        <b className="pineapple-kiwi-mojito">Pineapple Kiwi Mojito</b>
        <b className="air-fry-your-way-out-of-turnin">
          <p className="fruit-jam-chocolate-">Air Fry Your Way Out</p>
          <p className="fruit-jam-chocolate-">of Turning The Oven</p>
          <p className="covered-rolls-p">On</p>
        </b>
        <b className="loaded-pulled-pork-nachos">
          <p className="fruit-jam-chocolate-">Loaded Pulled Pork</p>
          <p className="covered-rolls-p">Nachos</p>
        </b>
        <div className="comment">
          <h3 className="title-comment">Comments</h3>
          <textarea
            className="comment-input"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button onClick={handleSendCmt}>Send</button>
        </div>
        <div className="list-comment">
          {cmtList ? (
            cmtList.map((cmt, index) => (
              <div className="item-comment">
                <img
                  src="../img/rectangle-1844.svg"
                  className="img-comment"
                  alt=""
                />
                <div className="text-comment">
                  <div className="name-par">{cmt.userId.useracc}</div>
                  <p>{cmt.content}</p>
                </div>
              </div>
            ))
          ) : (
            <div>No cmt</div>
          )}
          {error && <div style={{ color: "red" }}>{error}</div>}
          {/* <div className="btn-show-more font-17">Show more</div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
