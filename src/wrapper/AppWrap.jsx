import React from "react";
import { SocialMedia, NavigationsDots } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />
          {/* <div className="copyright">
            <p className="p-text">@2020 MICAEL</p>
            <p className="p-text">All rights reserved</p>
          </div> */}
        </div>

        <NavigationsDots active={idName} />
      </div>
    );
  };

export default AppWrap;
