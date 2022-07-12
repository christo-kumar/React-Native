/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
//import { Dispatch } from "redux";
export const SET_USER_NAME = 'SET_USER_NAME';
export const FETCH_MOVIES = 'FETCH_MOVIES';

//dispatch is a function of redux store
//dispatch ~ useDispatch is passed as an argument from UI Control
export const setName = name => dispatch => {
    console.log(dispatch);
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
};

const url = 'https://swapi.dev/api/films/';

export const fetchMovies = () => {

    return async dispatch => {
        const result = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const json = await result.json();
        if (json) {
            dispatch({
                type: FETCH_MOVIES,
                payload: json.results,
            });
        }
    };
};

const getMovies = async (url) => {
    const result = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    const json = await result.json();
    return json;

};


