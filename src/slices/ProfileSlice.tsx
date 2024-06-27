import { createSlice } from "@reduxjs/toolkit"; 

const initalState = {
    currentTab : "VIDEOS",
    videoUploadModal : false,
    user : localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null
}

const profileSlice = createSlice({
    name: "profile",
    initialState: initalState,
    reducers: {
        setCurrentTab: (state, action) => {
            state.currentTab = action.payload
        },
        setVideoUploadModal: (state, action) => {
            state.videoUploadModal = action.payload
        },
        setUser : (state, action) => {
            state.user = action.payload
        }
    }
})

export const { setCurrentTab, setVideoUploadModal, setUser } = profileSlice.actions
export default profileSlice.reducer