/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

//0. import CreateStore, CombineReducer, ApplyMiddlewore from redux
import { createStore, combineReducers, applyMiddleware } from "redux";
//0. import thunk
import thunk from "redux-thunk";
//0. import created reducers
import { userReducer } from "./Reducer";


//1. Combine the imported reducers
const rootReducer = combineReducers({ userReducer });

//2. Create the middleware using thunk
//const middleware = applyMiddleware(thunk);

//3. create and export Store with reducers and middleware 
export const Store = createStore(rootReducer, applyMiddleware(thunk));

