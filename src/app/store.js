import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../parts/products/productsSlice";
import likesReducer from "../parts/likes/likeSlice";

export default configureStore({
    reducer: {
        products: productsReducer,
        likes: likesReducer
    }
});