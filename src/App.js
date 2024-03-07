import './scss/app.scss';
import React from 'react';
import Header from './Components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Footer from './Components/Footer/Footer';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';

export const SearchContext = React.createContext('');

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <body>
      <div id="root">
        <div className="wrapper">
          <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <Header  />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </SearchContext.Provider>
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default App;
