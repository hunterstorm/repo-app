import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import getRepoReducer from '../components/GetRepoSlice';

const reducer = combineReducers({
    username:getRepoReducer
  })
export const store = configureStore({
    reducer
});