import { apiConnector } from "../apiConnector";

import { commentEndpoints } from "../apis";

const {
    GET_VIDEO_COMMENTS_API,ADD_COMMENT_API,
    UPDATE_COMMENT_API,
    DELETE_COMMENT_API,
} = commentEndpoints;

// Function to add comment
export const addComment = async() => {
    return async(dispatch) => {
        try {
            const response = await apiConnector("POST", `${ADD_COMMENT_API}/${videoId}`, {
                content
            })
    
            console.log("ADD COMMENT API RESPONSE..........", response);
        } catch (error) {
            console.log("ADD COMMENT API ERROR..........", error);
        }
    }
}

// Function to update comment

// Function to delete comment

// Function to get video's comments

