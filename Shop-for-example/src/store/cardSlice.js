import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    activeModal: false,
    module:true
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
        },
        changeModule(state, action){
            state.module = false
        },
        changeModuleList(state, action){
            state.module = true
        }
    }

})
export const {openModal, closeModal, changeModule, changeModuleList} = cardSlice.actions
export default cardSlice.reducer;