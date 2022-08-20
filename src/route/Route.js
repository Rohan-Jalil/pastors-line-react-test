import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from 'pages/Home/Home';

const RoutePaths = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ModalA' element={<Home />} />
      <Route path='/ModalB' element={<Home />} />
    </Routes>
  );
};

export default RoutePaths;
