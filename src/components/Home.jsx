import React, { useEffect, useState } from "react";
import "../styles/Home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [displayText, setDisplayText] = useState(1);
  const navigate = useNavigate();

  const changeText = () => {
    setTimeout(() => {
      setDisplayText((displayText) => (displayText % 3) + 1); // remainder of previous value + 1
    }, 10000);
  };

  useEffect(() => {
    changeText();
  }, [displayText]);

  return (
    <>
      <div className="main-page">
        <div>
          <h1> Do you Like </h1>

          {displayText === 1 && (
            <h2 className="animate__animated animate__backInLeft">
              {" "}
              Eating Exotic Foods{" "}
            </h2>
          )}
          {displayText === 2 && (
            <h2 className="animate__animated animate__backInRight">
              {" "}
              Eating Wazwan{" "}
            </h2>
          )}
          {displayText === 3 && (
            <h2 className="animate__animated animate__backInUp">
              {" "}
              Eating Tibtan Food{" "}
            </h2>
          )}

          <p>
            "Ordering with us: Where exotic flavors meet your doorstep, turning
            every meal into a global adventure! Dare to savor the extraordinary
            with just a click, because your taste buds deserve a passport to
            deliciousness."
          </p>

          <button
            onClick={() => {
              navigate("./user/placeorder");
            }}
          >
            {" "}
            Order Now{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
