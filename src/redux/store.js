import  {configureStore}  from "@reduxjs/toolkit";
import user from './slice/user'
import users from './slice/users'
import createSagaMiddleware from "@redux-saga/core";
import {rootSaga} from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer:{
        user,
        users
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({thunk:false}).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

export default store