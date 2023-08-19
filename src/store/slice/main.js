import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import breakfastSlice from './breakfastSlice';
import { persistReducer } from 'redux-persist';
import about from './about';
import shop from './shop';
import contact from './contact';
import service from './service';

const persistConfig={
    key:"root",
    version:1,
    storage
};
const reducer=combineReducers({
    breakfastSlice:breakfastSlice,
    aboutSlice:about,
    shopSlice:shop,
    contactSlice:contact,
    serviceSlice:service,
})
const presistedReducer=persistReducer(persistConfig,reducer);

const store=configureStore({
    reducer: presistedReducer,
})
export default store;

