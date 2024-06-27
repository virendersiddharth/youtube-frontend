import { createSlice } from '@reduxjs/toolkit'

const initalState = {
    formData: null,
    loading : false,
    token: localStorage.getItem("token") ? (JSON.parse(localStorage.getItem("token") as string)) : null,
}

const authSlice = createSlice({
    name: "auth",
    initialState: initalState,
    reducers: {
        setFormData: (state, action) => {
            state.formData = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        setLoading : (state, action) => {
            state.loading = action.payload
        }
    }
})

export const {setFormData, setToken, setLoading} = authSlice.actions
export default authSlice.reducer