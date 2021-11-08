/**
 * ***
 * ***
 * ***
 * Import
 */
import { React, useState, useEffect } from "react";
import talixo from "../../images/talixo.png";
import Logos1 from "../../images/logos1.png";
import Logos2 from "../../images/logos2.png";
import Logos3 from "../../images/logos3.png";
import Logos4 from "../../images/logos4.png";
import "./Logos.scss";
const Logos = () => {
  return (
    <>
      <div className="Logos">
        <div className="Container">
          <div className="Logos__inside">
            <div className="Logos__inside--middle">
              <div>
                <img src={Logos1} alt="Logo One" />
              </div>
              <div>
                <img src={Logos2} alt="Logo Two" />
              </div>
              <div>
                <img src={Logos3} alt="Logo Three" />
              </div>
              <div>
                <img src={Logos4} alt="Logo Four" />
              </div>
              <div>
                <img src={talixo} alt="talixo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Logos;
