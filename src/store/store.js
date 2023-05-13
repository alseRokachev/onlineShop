import {combineReducers, createStore} from "@reduxjs/toolkit";
import goods from "./goods";
import userData from './user'
import search from "./search";
import admin from "./admin";

const rootReducer = combineReducers({
    goodsData: goods,
    userData: userData,
    searchData : search,
    adminData : admin
})

export const store = createStore(rootReducer)