/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { SET_USER_NAME, FETCH_MOVIES } from "./Actions";

const initialState = {
    name: '',
    movies: [],
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_NAME:
            return { ...state, name: action.payload };
        case FETCH_MOVIES:
            return { ...state, movies: [...state.movies, action.payload] };

        default:
            return state;
    }
}