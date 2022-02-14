import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { uiActions } from '../../../features/uiSlice/uiSlice';
import { CtaButton } from '../Buttons/CtaButton';
import classes from './NavBar.module.css';

const NavBar = () => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle);
  };

  const dropdown = (
    <div className={classes['navBar-dropdown']}>
      <div className={classes['navBar-dropdown-moreBtn']}>⋮</div>
      <div className={classes['navBar-dropdown-moreBtn-links']}>
        <a href='#'>DIET PLAN 🍏</a>
        <a href='#'>BLOGS 📰</a>
        <a href='#'>ABOUT 🧑 </a>
      </div>
    </div>
  );
  return (
    <>
      <div className={classes['navBar']}>
        <Link style={{ textDecoration: 'none' }} to='/'>
          <p className={classes['navBar-brandImg']}>Faith Fitness 💪🏻</p>
        </Link>
        <ul className={classes['navBar-list']}>
          <Link style={{ textDecoration: 'none' }} to='/store'>
            <li className={classes['navBar-list-link']}>STORE</li>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/training'>
            <li className={classes['navBar-list-link']}>TRAINING</li>
          </Link>
          <li>{dropdown}</li>
        </ul>
        <Outlet />
        <div className={classes['navBar-rightDiv']}>
          <span>
            <a onClick={toggleCartHandler} className={classes.cartIcon}>
              🛒<sup className={classes.cartBatch}>2</sup>
            </a>
          </span>
          <CtaButton btnTxt={'SIGN UP'} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
