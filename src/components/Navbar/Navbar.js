/*
  *****
  *****
  Import Navbar.scss - Sass [mixins - colors] - Logo
*/
import "./Navbar.scss";
import "../../sass/colors.scss";
import "../../sass/mixins.scss";
import logo from "../../images/logo.svg";
/*
  *****
  *****
  Navbar Application
*/

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="Navbar">
        {/* Container 70%  */}
        <div className="Container">
          {/* Applying Flex  */}
          <div className="Navbar__inside">
            {/* Left side Logo */}
            <div className="Navbar__inside--left">
              <h1>Snubes</h1>
              <img src={logo} alt="Logo of the project" />
            </div>
            {/* Right Side Links and Hamburger Menu*/}
            <div className="Navbar__inside--right">
              <ul>
                <li>About Us</li>
                <li>How it works</li>
                <li>Become a Partner</li>
                <li>
                  EUR <i class="fas fa-chevron-down"></i>
                </li>
                <li>
                  EN <i class="fas fa-chevron-down"></i>
                </li>
                <li>Sign In</li>
                <li>Get Access</li>
                <li>
                  <i class="fas fa-bars"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
/*
  *****
  *****
  Export
*/
export default Navbar;
