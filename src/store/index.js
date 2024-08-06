import {configureStore} from '@reduxjs/toolkit'
import authReducer from './Auth'
import userDataReducer from './userData'
import formReducer from './form1'
import getReducer from './get'

const store = configureStore({
    reducer:{
        authReducer:authReducer,
        userDataReducer:userDataReducer,
        formReducer:formReducer,
        getReducer:getReducer,
    }
})

export default store