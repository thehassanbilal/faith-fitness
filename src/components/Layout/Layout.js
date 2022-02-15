import { useSelector } from 'react-redux';
import Cart from './Cart/Cart';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';

export const Layout = ({ children }) => {
  const showCart = useSelector((state) => state.ui.isVisible);

  return (
    <>
      <NavBar />
      {showCart && <Cart />}
      {children}
      <Footer />
    </>
  );
};
