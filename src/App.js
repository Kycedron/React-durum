import './scss/app.scss';
import React from 'react';
import Header from './Components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Footer from './Components/Footer/Footer';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [searchValue, setSearchValue] = React.useState('');


  return (
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
        <div className="wrapper">
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home searchValue={searchValue} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default App;
