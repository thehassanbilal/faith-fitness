import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "swiper/css/bundle";
import "./components/SwiperSliders/SwiperSlider.module.css";
import { HomePage } from "./routes/homePage/HomePage";
import { Layout } from "./components/Layout/Layout";
import Shop from "./routes/Shop/Shop";
import Training from "./routes/Training/Training";
import { commerce } from "./lib/commerce";
function App() {
  const [product, setProduct] = useState([]);
  const fetchData = async () => {
    const { data } = await commerce.products.list();
    setProduct(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(product);
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage product={product} />} />
            <Route path="store" element={<Shop />} />
            <Route path="training" element={<Training />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
