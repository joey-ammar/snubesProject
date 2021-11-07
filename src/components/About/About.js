/*
  *****
  *****
  Import Services.scss - Sass [mixins - colors] - Icons
*/
import "./About.scss";
import "../../sass/colors.scss";
import "../../sass/mixins.scss";

const About = () => {
  return (
    <>
      <div className="About">
        <div className="Container">
          <div className="About__inside">
            <div className="About__inside--middle">
              <h1>Why Snubes ?</h1>
              <div>
                <h3>Trusted Know-How</h3>
                <p>
                  We have more than 20 years of experience and continuously
                  check call centers for their quality and capabilities.
                  Customers like Allianz trust Snubes industry knowledge.
                </p>
              </div>
              <div>
                <h3>Time and cost savings</h3>
                <p>
                  With Snubes you can easily compare prices, quality and
                  availability, and find more potential suppliers. Reach your
                  goal faster and save resources.
                </p>
              </div>
              <div>
                <h3>Satisfaction guaranteed</h3>
                <p>
                  We offer a validated data-based approach to procurement,
                  rather than awarding contracts only based on the lowest price,
                  an existing relationship or "gut feeling".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
