/**
 * ***
 * ***
 * ***
 * Import
 */
import { React, useState, useEffect } from "react";

import "./Bottom.scss";
const Bottom = () => {
  return (
    <>
      <div className="Bottom">
        <div className="Container">
          <div className="Bottom__inside">
            <div>
              <h1>© 2019 Snubes GmbH All Rights Reserved.</h1>
            </div>
            <div>
              <p>About us</p>
              <p>Become a Partner</p>
              <p>FAQ</p>
            </div>
            <div>
              <p>Imprint</p>
              <p>Terms & Condition</p>
              <p>FAQ</p>
            </div>
            <div>
              <p>support@snubes.com</p>
              <p>#49 (0) 305 5645327</p>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bottom;
