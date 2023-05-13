import {createSlice} from "@reduxjs/toolkit";


const userData = createSlice({
    name: 'USer Data',
    initialState: {
        favourite: [],
        basket: [],
        activeModal: false
    },
    reducers: {
        actionFavourite(state, action) {
            state.favourite.find(item => item.id === action.payload.id) ?
                state.favourite = state.favourite.filter(item => item.id !== action.payload.id) :
                state.favourite.push(action.payload)
        },
        deleteAllFavourite(state) {
            state.favourite = []
        }
        ,
        actionBasket(state, action) {
            state.basket.find(item => item.id === action.payload.id) ?
                state.basket = state.basket.filter(item => item.id !== action.payload.id) :
                state.basket.push(action.payload)
        },
        changeCounter(state, action) {
            state.basket.find(item => item.id === action.payload.id).counter = (action.payload.counter > 1 ? action.payload.counter : 1)
        },
        deleteAllBasket(state) {
            state.basket = []
        },
        modalAction(state, action) {
            state.activeModal = action.payload
        }
    }
})

export default userData.reducer

export const {
    actionFavourite,
    actionBasket,
    deleteAllFavourite,
    deleteAllBasket,
    changeCounter,
    modalAction
} = userData.actions