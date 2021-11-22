import React from "react";
import classes from "../layout/MainNavigation.module.css";

import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <main className={classes.header}>
      <h2 className={classes.logo}>Graet Quotes</h2>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default MainNavigation;
