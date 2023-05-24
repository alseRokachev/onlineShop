import {combineReducers, createStore} from "@reduxjs/toolkit";
import goods from "./goods";
import userData from './user'
import search from "./search";

const rootReducer = combineReducers({
    goodsData: goods,
    userData: userData,
    searchData : search
})

export const store = createStore(rootReducer)