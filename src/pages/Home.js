import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { serverHost } from "../config/serverHost";
const Home = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  let [listData, setListData] = useState([]);
  const handleChangeKeySearch = async (e) => {
    let res = await axios.get(`${serverHost.host}/dish/keyword/${e}`);
    if (res.status === 200) {
      setListData(res.data);
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

  useEffect(() => {
    handleGetMenu();
  }, []);
  let username;
  const data = JSON.parse(localStorage.getItem("data"));
  if (data) {
    username = data.useracc;
  }

  console.log("menu:", menu);

  let breakfast;
  let lunch;
  let dinner;
  menu.map((me) => {
    breakfast = me.breakfast;
    lunch = me.lunch;
    dinner = me.dinner;
  });

  console.log("break", breakfast);
  // const breakfast = menu?.menu?.breakfast;
  // const lunch = menu?.menu?.lunch;
  // const dinner = menu?.menu?.dinner;

  const handleRedirect = () => {
    navigate("/detail", { replace: true });
  };

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
          <img className="image-54-icon" alt="berry" src="./img/image-54.svg" />
          <img className="vector-icon1" alt src="./img/vector1.svg" />
          <div className="div" id="bg-content">
            <span>0</span>
            <span className="span">1</span>
          </div>
          <img className="bowl-icon" alt="bowl" src="./img/bowl.svg" />
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

            {!username && (
              <Link className="login-a" to="/login">
                Login
              </Link>
            )}
            {username && (
              <Link className="login-a" to="/#">
                <p style={{ color: "red" }}> Welcome </p>
                {username}
              </Link>
            )}
            {username && (
              <Link
                className="login-ab"
                onClick={()=>localStorage.clear()}
                to="/login"
              >
                Logout
              </Link>
            )}
            <Link className="button-a" to="/contact">
              <div className="bg-div" />
              <div className="contact-us-div">Contact Us</div>
            </Link>
          </div>
          <img className="content-icon" alt src="./img/content.svg" />
          <p className="title-home-f">HOMECHEF16.NET</p>
          <div className="benefits-div">
            <img
              className="verticle-line-icon"
              alt
              src="./img/verticle-line.svg"
            />
            <h2 className="benefits-h2" id="hero-title2">
              Benefits
            </h2>
            <div className="group-div" id="hero-content">
              <div className="antioxidants-div">Antioxidants</div>
              <div className="vitamins-div">Vitamins</div>
              <div className="minerals-div">Minerals</div>
              <div className="nutrients-div">Nutrients</div>
            </div>
          </div>
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
          <div className="search-container">
            <input
              className="rectangle-input"
              type="text"
              placeholder="Search..."
              onChange={(e) => handleChangeKeySearch(e.target.value)}
            />
            {listData.length > 0 && (
              <div className="dropdown">
                {listData.map((list, index) => (
                  <div key={index} className="dropdown-row">
                    <Link to={`/detail/${list._id}`}>{list.dishname}</Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </header>
        <div className="cards-div" id="Sidebar">
          <div className="frame-div">
            <div className="div1" id="sidebox1">
              <div className="bg-div1" />
              <div className="bg-div2" />
              <div className="horizontal-line-div">
                <div className="rectangle-div" />
              </div>
              <p className="diet-p">Diet</p>
              <img className="image-icon" alt="image" src="./img/image.svg" />
            </div>
            <div className="div1" id="sidebox2">
              <div className="bg-div1" />
              <div className="bg-div4" />
              <div className="horizontal-line-div">
                <div className="rectangle-div1" />
              </div>
              <p className="meal-plan">Meal Plan</p>
              <img className="image-icon" alt="image" src="./img/image1.svg" />
            </div>
            <div className="div3" id="sidebox3">
              <div className="bg-div5" />
              <div className="bg-div6" />
              <div className="horizontal-line-div2">
                <div className="rectangle-div2" />
              </div>
              <p className="ingredients-p">Ingredients</p>
              <img className="image-icon" alt="image" src="./img/image2.svg" />
            </div>
          </div>
        </div>
        <img
          className="mulberry-icon"
          alt="mulberry"
          src="./img/mulberry.svg"
        />
        <img
          className="strawberry-icon"
          alt="strawberry"
          src="./img/strawberry.svg"
        />
        <img
          className="blueberry-icon"
          alt="blueberry"
          src="./img/blueberry.svg"
        />
        <h3 className="latest-recipes" id="Latest Recipes">
          <b>Latest Recipes </b>
          <span>&gt;</span>
        </h3>
        <h3
          className="popular-recipes-this-week"
          id="Popular Recipes This Week"
        >
          Popular Recipes This Week
        </h3>
        <img
          onClick={handleRedirect}
          className="rectangle-icon"
          alt
          src="./img/rectangle-1842.svg"
          id="rectangleImage"
        />
        <img
          onClick={handleRedirect}
          className="rectangle-icon1"
          alt
          src="./img/rectangle-1843.svg"
          id="rectangleImage1"
        />
        <img
          onClick={handleRedirect}
          className="rectangle-icon2"
          alt
          src="./img/rectangle-1844.svg"
          id="rectangleImage2"
        />
        <img
          onClick={handleRedirect}
          className="rectangle-icon3"
          alt
          src="./img/rectangle-1845.svg"
          id="rectangleImage3"
        />
        <img
          onClick={handleRedirect}
          className="rectangle-icon4"
          alt
          src="./img/rectangle-1846.svg"
          id="rectangleImage4"
        />
        <img
          onClick={handleRedirect}
          className="rectangle-icon5"
          alt
          src="./img/rectangle-1847.svg"
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
        <img
          onClick={handleRedirect}
          className="rectangle-icon6"
          alt
          src="./img/rectangle-1848.svg"
          id="rectangleImage6"
        />
        <img
          onClick={handleRedirect}
          className="rectangle-icon7"
          alt
          src="./img/rectangle-1849.svg"
          id="rectangleImage7"
        />
        <img
          onClick={handleRedirect}
          className="rectangle-icon8"
          alt
          src="./img/rectangle-1850.svg"
          id="rectangleImage8"
        />
        <img
          onClick={handleRedirect}
          className="rectangle-icon9"
          alt
          src="./img/rectangle-1851.svg"
          id="rectangleImage9"
        />
        <img
          onClick={handleRedirect}
          className="rectangle-icon10"
          alt
          src="./img/rectangle-1852.svg"
          id="rectangleImage10"
        />
        <img
          onClick={handleRedirect}
          className="rectangle-icon11"
          alt
          src="./img/rectangle-1853@2x.png"
          id="rectangleImage11"
        />
        <b className="the-best-chewy-chocolate-chip">
          <p className="fruit-jam-chocolate-">The Best Chewy</p>
          <p className="fruit-jam-chocolate-">Chocolate Chip</p>
          <p className="covered-rolls-p">Cookies</p>
        </b>
        <b className="one-pot-garlic-parmesan-pasta">
          <span className="one-pot-garlic-container">
            <p className="fruit-jam-chocolate-">One Pot Garlic</p>
            <p className="covered-rolls-p">Parmesan Pasta</p>
          </span>
        </b>
        <b className="creamy-chicken-penne-pasta">
          <p className="fruit-jam-chocolate-">Creamy Chicken</p>
          <p className="covered-rolls-p">Penne Pasta</p>
        </b>
        <b className="the-best-fudgy-brownies">
          <p className="fruit-jam-chocolate-">The Best Fudgy</p>
          <p className="covered-rolls-p">Brownies</p>
        </b>
        <b className="summer-break-recipes-for-your">
          <p className="fruit-jam-chocolate-">Summer Break</p>
          <p className="fruit-jam-chocolate-">Recipes For Your</p>
          <p className="covered-rolls-p">Kids</p>
        </b>
        <b className="chicken-veggie-stir-fry">
          <p className="fruit-jam-chocolate-">Chicken &amp; Veggie</p>
          <p className="covered-rolls-p">Stir-Fry</p>
        </b>
      </div>
      <Footer />
    </>
  );
};

export default Home;
