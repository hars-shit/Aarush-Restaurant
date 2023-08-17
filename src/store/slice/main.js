import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import breakfastSlice from './breakfastSlice';
import { persistReducer } from 'redux-persist';

const persistConfig={
    key:"root",
    version:1,
    storage
};
const reducer=combineReducers({
    breakfastSlice:breakfastSlice,
})
const presistedReducer=persistReducer(persistConfig,reducer);

const store=configureStore({
    reducer: presistedReducer,
})
export default store;

