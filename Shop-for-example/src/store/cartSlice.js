import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    element: {},
    cart: [],
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getElement(state, action) {
            state.element = action.payload
        },
        addToCart(state, action) {
            let isInArray = false
            state.cart.forEach(el => {
                if (el.article === state.element.article)
                    isInArray = true
            })
            if (!isInArray)
                state.cart.push(state.element)
        },
        addToCartFromFavorites(state, action) {
            let isInArray = false
            state.cart.forEach(el => {
                if (el.article === action.payload.article)
                    isInArray = true
            })
            if (!isInArray)
                state.cart.push(action.payload)
        },
        removeFromCart(state, action) {
            state.cart = state.cart.filter(el => el.article !== state.element.article)
        },
        cleaningCart(state, action) {
            state.cart = state.cart.filter(el => el=== state.cart)
        }
    }

})
export const {getElement, addToCart, addToCartFromFavorites, removeFromCart,cleaningCart} = cartSlice.actions
export default cartSlice.reducer;