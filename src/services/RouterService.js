const serverUrl = 'https://gorest.co.in/public-api';
const simpleAuth = '?_format=json&access-token=rrDyybBYMHk90mKdkFuKLpWRNs8CnrvYn0FY'

export const usersApiUrl = id =>
    id ? `${serverUrl}/users/${id}` : `${serverUrl}/users${simpleAuth}`;

export const postsApiUrl = (user_id) =>
    `${serverUrl}/posts${simpleAuth}&user_id=${user_id}`;

export const commentsApiUrl = (post_id) =>
    post_id ? `${serverUrl}/comments${simpleAuth}&post_id=${post_id}` : `${serverUrl}/comments`



