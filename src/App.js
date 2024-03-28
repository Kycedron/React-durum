import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Footer from './Components/Footer/Footer';
import NotFound from './pages/NotFound';
import './scss/app.scss';
import global_eng from './locales/eng/global.json';
import global_ru from './locales/ru/global.json';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import ThemeSwitch from './Components/ThemeSwtich';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'ru',
  resources: {
    ru: {
      global: global_ru,
    },
    eng: {
      global: global_eng,
    },
  },
});

export const ThemeContext = createContext(null);
export const LanguageContext = createContext(null);
export const SearchContext = createContext('');

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('english');
  const { i18n } = useTranslation(); // Получаем объект i18n из useTranslation

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  const handleChangeLanguage = (lang) => {
    i18next.changeLanguage(lang); // Используем i18next для изменения языка
    setLanguage(lang);
  };

  return (
    <I18nextProvider i18n={i18next}>
      {' '}
   
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <LanguageContext.Provider value={{ language }}>
          <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <div className="language-buttons">
          <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
              <button onClick={() => handleChangeLanguage('eng')}>ENG</button>
              <button onClick={() => handleChangeLanguage('ru')}>Rus</button>
            </div>
            <div className={`wrapper ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
              <Header />
              <div className="content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
            <Footer />
          </SearchContext.Provider>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </I18nextProvider>
  );
}

export default App;
