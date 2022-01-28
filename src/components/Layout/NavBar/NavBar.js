/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { CtaButton } from "../Buttons/CtaButton";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const dropdown = (
    <div className={classes["navBar-dropdown"]}>
      <div className={classes["navBar-dropdown-moreBtn"]}>⋮</div>
      <div className={classes["navBar-dropdown-moreBtn-links"]}>
        <a href="#">DIET PLAN 🍏</a>
        <a href="#">BLOGS 📰</a>
        <a href="#">ABOUT 🧑 </a>
      </div>
    </div>
  );
  return (
    <>
      <div className={classes["navBar"]}>
        <p className={classes["navBar-brandImg"]}>Faith Fitness 💪🏻</p>
        <ul className={classes["navBar-list"]}>
          <Link style={{ textDecoration: "none" }} to="/store">
            <li className={classes["navBar-list-link"]}>STORE</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/training">
            <li className={classes["navBar-list-link"]}>TRAINING</li>
          </Link>
          <li>{dropdown}</li>
        </ul>
        <div className={classes["navBar-rightDiv"]}>
          <span>
            <a className={classes.cartIcon}>
              🛒<sup className={classes.cartBatch}>2</sup>
            </a>
          </span>
          <CtaButton btnTxt={"SIGN UP"} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
