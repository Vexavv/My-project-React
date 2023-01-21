import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    activeModal: false,
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        openModal(state, action) {
            state.activeModal = true
        },
        closeModal(state, action){
            state.activeModal = false
        }
    }

})
export const {openModal, closeModal} = cardSlice.actions
export default cardSlice.reducer;