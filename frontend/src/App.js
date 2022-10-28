import React, { Fragment }from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';

import Home from './pages/Home'
import Plantilla from './pages/plantilla';
import ProductoListar from './pages/products/ProductoListar';

function App() {
  return (
    <Fragment>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/plantilla" exact element={<Plantilla />} />
        <Route path="/productos" exact element={<ProductoListar />} />
      </Routes>
    </Router>
   </Fragment>
  );
}

export default App;
