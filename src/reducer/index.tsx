import { combineReducers } from '@reduxjs/toolkit'

import profileReducer from "../slices/ProfileSlice"
import authReducer from "../slices/AuthSlice"
import settingReducer from "../slices/SettingSlice"

const rootReducer = combineReducers({
    auth: authReducer,
    profile : profileReducer,
    setting : settingReducer,
})

export default rootReducer;