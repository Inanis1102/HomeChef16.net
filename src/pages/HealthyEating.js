import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { serverHost } from "../config/serverHost";

const HealthyEating = () => {
  const [dishList, setDishList] = useState([]);
  const handleGetDishDetail = async () => {
    let res = await axios.get(`${serverHost.host}/dish/`);
    if (res.status === 200) {
      setDishList(res.data);
    } else {
      console.log("error response");
    }
  };

  useEffect(() => {
    handleGetDishDetail();
  }, []);

  let username;
  const data = JSON.parse(localStorage.getItem("data"));
  if (data) {
    username = data.useracc;
  }
  return (
    <div className="bg">
      <div style={{ padding: "0 40px" }}>
        <div className="header">
          <div className="header-search">
            <input
              type="text"
              className="input-select"
              placeholder="search ..."
            />
          </div>
          <div className="header-menu">
            <ul className="list-menu">
              <li className="item-menu">
                <Link className="line" to="/">
                  Home
                </Link>
                <div className="selector-div"></div>
              </li>
              <li className="item-menu">
                <Link className="line" to="/">
                  Recipes
                </Link>
              </li>
              <li className="item-menu">
                <Link className="line" to="/healthy-eating">
                  Tips &amp; Tricks
                </Link>
              </li>
              <li className="item-menu">
                {username ? (
                  <Link className="login-a" to="#">
                  <p style={{color:'red'}}> Welcome </p>{username}
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
              </li>
            </ul>
          </div>
        </div>
        <div className="main-title">Healthy Eating</div>
        <p className="main-text">
          Eating a healthy diet is not about strict limitations, staying
          unrealistically thin, or depriving yourself of the foods you love.
          Rather, it’s about feeling great, having more energy, improving your
          health, and boosting your mood.
        </p>

        <div className="intro">
          {dishList.map((dish) => (
            <Link to={`/detail/${dish._id}`}>
              <div className="intro-item">
                <img src={dish?.img} alt="" />
                <p className="intro-name">{dish?.dishname}</p>
              </div>
            </Link>
          ))}
        </div>
        {/* <div className="btn-show-more">Show more</div> */}
      </div>
      <Footer />
    </div>
  );
};

export default HealthyEating;
