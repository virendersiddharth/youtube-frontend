import { apiConnector } from "../apiConnector"

import {authEndpoints} from "../apis"

import {setToken, setLoading} from "../../slices/AuthSlice"
import {setUser} from "../../slices/ProfileSlice"
import { Dispatch } from "redux"

const {
    LOGIN_API,
    LOGOUT_API,
    REGISTER_USER_API,
    CHANGE_PASSWORD_API,
    UPDATE_AVATAR_API,
    UPDATE_COVER_IMAGE_API,
    UPDATE_USER_ACCOUNT_API,
    GET_USER_CHANNEL_PROFILE_API,
    GET_CURRENT_USER_API,
    REFRESH_ACCESS_AND_REFRESS_TOKEN_API
} = authEndpoints


// FUNCTION TO HIT LOGIN API
export const user_login = async(email: any, username: any, password: any, navigate: any) => {
    return async(dispatch: Dispatch)=>{
        // dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", LOGIN_API, {
                email, username, password
            })

            console.log("LOGIN API RESPONSE...........", response);

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            dispatch(setToken(response.data.accessToken))
            dispatch(setUser({...response.data.user}))
            localStorage.setItem("token", JSON.stringify(response.data.data.accessToken))
            localStorage.setItem("user", JSON.stringify(response.data.data.user))
            navigate("/dashboard")

        } catch (error) {
            console.log("LOGIN API ERROR...............", error);

        }
        dispatch(setLoading(false))
    }
}


// FUNCTION TO HIT LOGOUT API
// export const user_logout = async(navigate) => {
//     return async(dispatch) => {
//         dispatch(setToken(null))
//         dispatch(setUser(null))
//         localStorage.removeItem("token")
//         localStorage.removeItem("user")
//         navigate("/")
//     }
// }

// // FUNCTION TO HIT REGISTER USER API
// export const user_register = async(navigate) => {
//     return async(dispatch) => {
//         try {
//             const response = await apiConnector("POST", REGISTER_USER_API, {
//                 username,
//                 email,
//                 password,
//                 fullName,
//                 avatar,
//                 coverImage
//             })
//             console.log("REGISTER USER API RESPONSE...........", response);

//             navigate("/login")
//         }
//         catch (error) {
//             console.log("REGISTER USER API ERROR...............", error);
//         }
//     }
// }


// // FUNCTION TO HIT CHANGE PASSWORD API
// export const change_user_password = async(oldPassword, newPassword, navigate) => {
//     return async(dispatch) => {
//         try {
//             const response = apiConnector("POST", CHANGE_PASSWORD_API, {
//                 oldPassword, newPassword
//             })

//             console.log("CHANGE PASSWORD API RESPONSE...........", response);

//             if(!response.data.success){
//                 throw new Error(response.data.message)
//             }
//         } catch (error) {
//             console.log("Change Password Error...........", error);
//         }
//     }
// }

// // FUNCTION TO HIT UPDATE AVATAR API
// export const update_user_avator = async(avatar, navigate) => {
//     return async(dispatch)=>{
//         try {
//             const response = await apiConnector("PATCH", UPDATE_AVATAR_API, {
//                 avatar
//             })

//             console.log("UPDATE USER AVATAR API RESPONSE...........", response);
//         } catch (error) {
//             console.log("CHANGE AVATAR IMAGE ERROR........", error);
//         }
//     }
// }


// // FUNCTION TO HIT UPDATE COVER IMAGE API
// export const update_user_coverImage = async(coverImage) => {
//     return async(dispatch)=>{
//         try {
//             const response = await apiConnector("PATCH", UPDATE_COVER_IMAGE_API, {
//                 coverImage
//             })
    
//             console.log("UPDATE USER COVERIMAGE API RESPONSE..........", response);
//         } catch (error) {
//             console.log("UPDATE COVERIMAGE ERROR.........", error);
//         }
//     }
// }


// // FUNTION TO UPDATE USER ACCOUNT API



// // FUNCTION TO GET USER CHANNEL PROFILE
// export const get_user_channel_profile = async(username) => {
//     return async(dispatch) => {
//         try {
//             const response = await apiConnector("GET", `${GET_USER_CHANNEL_PROFILE_API}/${username}`)
    
//             console.log("GET USER CHANNEL PROFILE API RESPONSE.........", response);
//         } catch (error) {
//             console.log("GET USER CHANNEL PROFILE API ERROR.........", error);
//         }
//     }
// }


// // FUNCTION TO GET CURRENT USER
// export const get_current_user = async()=>{
//     return async(dispatch) => {
//         try {
//             const response = await apiConnector("GET", GET_CURRENT_USER_API)
    
//             console.log("GET CURRENT USER API RESPONSE........", response);
//         } catch (error) {
//             console.log("GET CURRENT USER API ERROR.........", error);
//         }
//     }
// }


// // FUNCTION TO REFRESH ACCESS AND REFRESS TOKEN
// export const refresh_access_and_refresh_token = async()=>{
//     return async(dispatch) => {
//         try {
//             const response = await apiConnector("POST", REFRESH_ACCESS_AND_REFRESS_TOKEN_API, {
//                 refreshToken
//             })
    
//             console.log("REFRESH ACCESS AND REFRESS TOKEN API RESPONSE........", response);
//         } catch (error) {
//             console.log("REFRESH ACCESS AND REFRESS TOKEN API ERROR........", error);
//         }
//     }
// }
