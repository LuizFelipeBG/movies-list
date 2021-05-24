import {GET_SEARCH_MOVIES} from './constant'

export const getSearchMovie = (search?: string) => ({
    type: GET_SEARCH_MOVIES,
    payload: search
})