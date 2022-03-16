/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import "swiper/css/bundle";
import "./components/SwiperSliders/SwiperSlider.css";
import { HomePage } from "./routes/homePage/HomePage";
import { Layout } from "./components/Layout/Layout";
import Shop from "./routes/Shop/Shop";
import Training from "./routes/Training/Training";
import SelectedProductCategory from "./routes/Shop/SelectedProductCategory/SelectedProductCategory";
import ProductDetailPage from "./routes/ProductDetailPage/ProductDetailPage";
import Checkout from "./components/Layout/Cart/Checkout";
import Error from "./404/Error";
import AboutCoach from "./components/Layout/AboutCoach/AboutCoach";
import Contact from "./contact/Contact";

import Blog from "./blogs/Blog";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";
import CheckoutItems from "./components/Layout/Cart/CheckoutItems";
import Dashboard from "./Admin Dashboard/Dashboard";
import Dietplan from "./routes/DietPlan/Dietplan";
import NewProduct from "./Admin Dashboard/AddNewProduct/AddNewProduct";
import AdminDashboard from "./Admin Dashboard/AddNewProduct/AdminDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="store" element={<Shop />} />
            <Route path="/products/:id" element={<SelectedProductCategory />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="training" element={<Training />} />
            <Route path="/store/checkout" element={<Checkout />} />
            <Route path="/about" element={<AboutCoach />} />
            <Route path="/dietplan" element={<Dietplan />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/checkout" element={<CheckoutItems />} />
            <Route path="*" element={<Error />} />
            <Route path="/admin" element={<NewProduct />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route
              // isAdmin={true}
              exact
              path="/admin/dashboard"
              element={<Dashboard />}
            />

            {/* <Route
              exact
              path="/admin/products"
              // isAdmin={true}
              element={<NewProduct />}
            /> */}
            {/* <Route
              exact
              path="/admin/product"
              isAdmin={true}
              element={NewProduct}
            />

            <Route
              exact
              path="/admin/product/:id"
              isAdmin={true}
              element={UpdateProduct}
            />
            <Route
              exact
              path="/admin/orders"
              isAdmin={true}
              element={OrderList}
            />

            <Route
              exact
              path="/admin/order/:id"
              isAdmin={true}
              element={ProcessOrder}
            />
            <Route
              exact
              path="/admin/users"
              isAdmin={true}
              element={UsersList}
            />

            <Route
              exact
              path="/admin/user/:id"
              isAdmin={true}
              element={UpdateUser}
            /> */}

            {/* <Route
              exact
              path="/admin/reviews"
              isAdmin={true}
              element={ProductReviews}
            /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
