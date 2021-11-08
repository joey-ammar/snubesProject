/**
 * ***
 * ***
 * ***
 * Import
 */
import { React, useState, useEffect } from "react";
import talixo from "../../images/talixo.png";
import "./Slider.scss";
const Slider = () => {
  return (
    <>
      <div className="Slider">
        <div className="Container">
          <div className="Slider__inside">
            <div className="Slider__inside--middle">
              <div className="Slider__inside--middle--logo">
                <img src={talixo} alt="Logo of Talixo" />
                <p>
                  “Finding a suitable outsourcing service provider through
                  Snubes was very easy and our personal consultant helped us
                  every step of the way. After a short time we had good offers
                  on the table. An on-site visit confirmed the positive
                  impression and we have now found a matching partner. Thank you
                  for your great support, which has helped us a lot in the
                  selection process.”
                </p>
                <small>Jan Brenneke Vp Operations</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Slider;
