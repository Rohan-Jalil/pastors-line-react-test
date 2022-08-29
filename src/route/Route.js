import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from 'pages/Home/Home';
import AllContacts from 'pages/AllContacts/AllContacts';
import USContacts from 'pages/USContacts/USContacts';

const RoutePaths = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/allcontacts' element={<AllContacts />} />
      <Route path='/uscontacts' element={<USContacts />} />
    </Routes>
  );
};

export default RoutePaths;
