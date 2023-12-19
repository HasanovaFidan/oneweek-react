import { configureStore } from "@reduxjs/toolkit";
import BasketSlice from "./slice/BasketSlice";
import Wishlist from "./slice/Wishlist";

export const store = configureStore({
    reducer: {
        "basket": BasketSlice,
        "wishlist": Wishlist
    }
})