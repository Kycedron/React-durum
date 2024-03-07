import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import cart from './slices/cartSlice'
import durum from './slices/durumSlice'
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: { 
    filter,
    cart,
    durum,
    theme: themeReducer,
  },
})

