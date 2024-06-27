const BASE_URL = 'http://localhost:8000/api/vi'


// AUTH Endpoints
export const authEndpoints = {
    LOGIN_API : BASE_URL + "/users/login",
    LOGOUT_API : BASE_URL + "/users/logout",
    REGISTER_USER_API : BASE_URL + "/users/register",
    CHANGE_PASSWORD_API : BASE_URL + "/users/change-password",
    UPDATE_AVATAR_API : BASE_URL + "/users/avatar",
    UPDATE_COVER_IMAGE_API : BASE_URL + "/users/cover-image",
    UPDATE_USER_ACCOUNT_API : BASE_URL + "/users/update-account",
    GET_USER_CHANNEL_PROFILE_API : BASE_URL + "/users/c",
    GET_CURRENT_USER_API : BASE_URL + "/users/current-user",
    REFRESH_ACCESS_AND_REFRESS_TOKEN_API : BASE_URL + "/users/refresh-token",
}

// TWEETS Endpoints
export const tweetEndpoints = {
    CREATE_TWEET_API : BASE_URL + "/tweets",
    UPDATE_TWEET_API : BASE_URL + "/tweets",
    DELETE_TWEET_API : BASE_URL + "/tweets",
    GET_USER_TWEETS_API : BASE_URL + "/tweets/user",
}

// COMMENTS Endpoints
export const commentEndpoints = {
    GET_VIDEO_COMMENTS_API : BASE_URL + "/comments",
    ADD_COMMENT_API : BASE_URL + "/comments",
    UPDATE_COMMENT_API : BASE_URL + "/comments/c",
    DELETE_COMMENT_API : BASE_URL + "/comments/c",
}

// PLAYLIST Endpoints
export const playlistEndpoints = {
    GET_PLAYLIST_API : BASE_URL + "/playlist",
    GET_USER_PLAYLIST_API : BASE_URL + "/playlist/user",
    CREATE_PLAYLIST_API : BASE_URL + "/playlist",
    UPDATE_PLAYLIST_API : BASE_URL + "/playlist",
    DELETE_PLAYLIST_API : BASE_URL + "/playlist",
    ADD_VIDEO_TO_PLAYLIST_API : BASE_URL + "/playlist/add",
    REMOVE_VIDEO_TO_PLAYLIST_API : BASE_URL + "/playlist/remove",
}

// LIKES Endpoints
export const likeEndpoints = {
    TOGGLE_LIKE_ON_TWEET_API : BASE_URL + "/likes/toggle/t",
    TOGGLE_LIKE_ON_COMMENT_API : BASE_URL + "/likes/toggle/c",
    TOGGLE_LIKE_ON_VIDEO_API : BASE_URL + "/likes/toggle/v",
    GET_LIKED_VIDEOS_API : BASE_URL + "/likes/videos",
}

// VIDEOS Endpoints
export const videosEndpoints = {
    GET_VIDEO_BY_ID_API : BASE_URL + "/videos",
    PUBLISH_VIDEO_API : BASE_URL + "/videos",
    TOGGLE_VIDEO_PUBLISH_STATUS_API : BASE_URL + "/videos/toggle/publish",
    UPDATE_VIDEO_API : BASE_URL + "/videos",
    DELETE_VIDEO_API : BASE_URL + "/videos",
}

// DASHBOARD Endpoints
export const dashboardEndpoints = {
    GET_CHANNEL_STATUS_API : BASE_URL + "/dashboard/status"
}

// SUBSCRIPTIONS Endpoints
export const subscriptionsEndpoints = {
    TOGGLE_ON_SUBSCRIPTION_API : BASE_URL + "/subscriptions/c"
}

// HEALTH CHECK Endpoints
export const healthCheckEndpoints = {
    HEALTH_CHECK_API : BASE_URL + "/healthcheck"
}