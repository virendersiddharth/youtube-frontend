import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentTab : "MYDETAILS",
}

const settingSlice = createSlice({
    name: "setting",
    initialState: initialState,
    reducers: {
        setCurrentTab: (state, action) => {
            state.currentTab = action.payload
        }
    }
})

export const {setCurrentTab} = settingSlice.actions
export default settingSlice.reducer