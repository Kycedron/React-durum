// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axiosBase from '../../utils/axios.ts';

// export const fetchItems = createAsyncThunk('durum/fetchItemsStatus', async (params) => {
//   const { order, sortby, category, search, currentPage } = params;
//   const { data } = await axiosBase.get(
//     `/items?page=${currentPage}&limit=4&${category}&sortBy=${sortby}&order=${order}&${search}`
//   );
//   return data;
// });

// const initialState = {
//   items: [],
//   status:'loading'
// };

// const durumSlice = createSlice({
//   name: 'durum',
//   initialState: initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchItems.pending, (state ) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchItems.fulfilled, (state, action) => {
//           state.items = action.payload.data;
//           state.status = 'success';
//         }
//       )
//       .addCase(fetchItems.rejected, (state, action) => {
//         state.status= 'error';
//       });
//   },
// });

// export const selectItems = (state) => state.itemSlice;
// export const selectCartItemById = (id) => (state) => state.CartSlice.items.find((obj) => obj.id === id) 

// export const { setItems } = durumSlice.actions;

// export default durumSlice.reducer;