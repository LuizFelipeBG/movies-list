
import produce from 'immer';
import {GET_SEARCH_MOVIES} from './constant'
import { createReducer } from '@reduxjs/toolkit'
import {getAllAction} from './selectors'
import Redux from "redux"

const changeInput = {type: "SET_SEARCH_ITEM"}

export const initialState = {
    movies: [{
        Title: ""
    }],
    search: "star"
}

const listReducer = (state = initialState, action: any): any => {
    produce(
        state, 
        async () => {
        switch (action.type){
            case "GET_SEARCH_MOVIES":
                return {...state, movies: action.search}
    }})
}


export default listReducer
