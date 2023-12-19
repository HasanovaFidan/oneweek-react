import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: localStorage.getItem("wishlistItems")
      ? JSON.parse(localStorage.getItem("wishlistItems"))
      : [],
  },
  reducers: {
    addtoWishlist: (state, action) => {
      const target = state.items.find((item) => item.id === action.payload.id);

      if (!target) {
        const wishlistItem = {
          id: action.payload.id,
          product: action.payload,
        };

        state.items = [...state.items, wishlistItem];
        localStorage.setItem("wishlistItems", JSON.stringify(state.items));
        toast.success('Book added to Favorites!', {
          position: 'top-center',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });;
      } else {
        toast.info('Book is already in Favorites!', {
          position: 'top-center',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });;
      }
    },
    deleteFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("wishlistItems", JSON.stringify(state.items));
      toast.error('Deleted From Your Favorites!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
  },
});

export const { addtoWishlist, deleteFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
