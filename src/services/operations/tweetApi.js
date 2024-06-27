import { apiConnector } from "../apiConnector";

import { tweetEndpoints } from "../apis";

const {
    CREATE_TWEET_API,
    UPDATE_TWEET_API,
    DELETE_TWEET_API,
    GET_USER_TWEETS_API,
} = tweetEndpoints;

// Function to create a tweet
export const create_tweet = async (content) => {
    return async (dispatch) => {
        try {
            const response = await apiConnector("POST", CREATE_TWEET_API, {
                content
            });
            console.log("CREATE TWEET API RESPONSE.........", response);
        } catch (error) {
            console.log("CREATE TWEET API ERROR.........", error);
        }
    };
}


// Function to update user's tweet
export const update_tweet = async (tweetId) => {
    return async (dispatch) => {
        try {
            const response = await apiConnector("PATCH", `${UPDATE_TWEET_API}/${tweetId}`);
            console.log("UPDATE TWEET API RESPONSE.........", response);
        } catch (error) {
            console.log("UPDATE TWEET API ERROR.........", error);
        }
    };
}

// Function to delete a tweet
export const delete_tweet = async (tweetId) => {
    return async (dispatch) => {
        try {
            const response = await apiConnector("DELETE", `${DELETE_TWEET_API}/${tweetId}`);
            console.log("DELETE TWEET API RESPONSE.........", response);
        } catch (error) {
            console.log("DELETE TWEET API ERROR.........", error);
        }
    };
}

// Function to get user's tweets
export const get_user_tweets = async() => {
    return async (dispatch) => {
        try {
            const response = await apiConnector("GET", `${GET_USER_TWEETS_API}/${userId}`);
            console.log("GET USER TWEETS API RESPONSE.........", response);
        } catch (error) {
            console.log("GET USER TWEETS API ERROR.........", error);
        }
    };
}