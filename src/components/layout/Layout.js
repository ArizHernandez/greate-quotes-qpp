import { Fragment } from "react/cjs/react.production.min";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => (
  <Fragment>
    <MainNavigation />
    <main className={classes.main}>{props.children}</main>
  </Fragment>
);

export default Layout;
