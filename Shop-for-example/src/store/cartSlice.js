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
        incrementQuantity(state, action) {
            const itemIndex = state.cart.findIndex(el => el.article === action.payload.article)
           state.cart[itemIndex].qnt = Number.parseInt(state.cart[itemIndex].qnt) +1
        },
        decrementQuantity(state, action) {
            const itemIndex = state.cart.findIndex(el => el.article === action.payload.article)
             if (state.cart[itemIndex].qnt > 1)
                state.cart[itemIndex].qnt -=  1
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
            state.cart = state.cart.filter(el => el === state.cart)
        }
    }

})
export const {
    getElement,
    addToCart,
    addToCartFromFavorites,
    removeFromCart,
    cleaningCart,
    incrementQuantity,
    decrementQuantity
} = cartSlice.actions
export default cartSlice.reducer;