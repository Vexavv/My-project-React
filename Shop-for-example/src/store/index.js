import {combineReducers, configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from "redux-persist";
import productReducer from '../store/productSlice'
import cardReducer from '../store/cardSlice'
import cartReducer from '../store/cartSlice'
import favoritesReducer from '../store/favoritesSlice'
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart','favorites']
}

const rootReducer = combineReducers({
    product: productReducer,
    card: cardReducer,
    cart: cartReducer,
    favorites: favoritesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
})

export const persistor = persistStore(store);

export default store;