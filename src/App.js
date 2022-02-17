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

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="store" element={<Shop />} />
            <Route path="/store/:id" element={<SelectedProductCategory />} />
            <Route path="/store/products/:id" element={<ProductDetailPage />} />
            <Route path="training" element={<Training />} />
            <Route path="/store/checkout" element={<Checkout />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
