import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import 'swiper/css/bundle';
import './components/SwiperSliders/SwiperSlider.module.css';
import { HomePage } from './routes/homePage/HomePage';
import { Layout } from './components/Layout/Layout';
import Shop from './routes/Shop/Shop';
import Training from './routes/Training/Training';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='store' element={<Shop />} />
            <Route path='training' element={<Training />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
