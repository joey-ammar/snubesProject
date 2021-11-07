/*
  *****
  *****
  Import Services.scss - Sass [mixins - colors] - Icons
*/
import "./Services.scss";
import "../../sass/colors.scss";
import "../../sass/mixins.scss";
import icon1 from "../../images/icon1.svg";
import icon2 from "../../images/icon2.svg";
import icon3 from "../../images/icon3.svg";

const Services = () => {
  return (
    <>
      <div className="Services">
        <div className="Container">
          <div className="Services__inside">
            <div className="Services__inside--middle">
              <img src={icon1} alt="Icon 1" />
              <h1>Sign up for free</h1>
              <p>
                Signing and setting up your project takes less than 5 minutes
              </p>
            </div>
            <div className="Services__inside--middle">
              <img src={icon2} alt="Icon 2" />
              <h1>Source smarter</h1>
              <p>
                Our data-based AI and our experts will help you find exactly
                what you are looking for
              </p>
            </div>
            <div className="Services__inside--middle">
              <img src={icon3} alt="Icon 3" />
              <h1>Receive offers</h1>
              <p>
                With our insights you always receive high-quality proposals at
                the best price{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
