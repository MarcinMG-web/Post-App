import { commentsApiUrl, postsApiUrl, saveCommentApiUrl, usersApiUrl } from "./RouterService";

const token = 'rrDyybBYMHk90mKdkFuKLpWRNs8CnrvYn0FY';
const headers = {
    "Content-Type" : "application/json; charset=utf-8",
    Authorization: `Bearer ${token}`
};

const apiCall = (url, method, body, resolve, reject, headers) =>
    fetch(url, {
        method: method,
        body : body ? JSON.stringify(body) : null,
        headers: headers

    }).then(response => {
        if(response.ok) {
            response.json().then(json=> resolve(json.result))
        } else {
            reject(response)
        }
    });

export const getUsers = () =>
    new Promise(
        (resolve, reject) => apiCall(usersApiUrl(), 'GET', null, resolve, reject)
    );

export const updateUser = (id, body) => new Promise((resolve, reject) => {
    new Promise(
        (resolve, reject) => apiCall(usersApiUrl(id), 'PUT', body, resolve, reject, headers)
    );
})

export const getUserPosts = (user_id) =>
    new Promise(
        (resolve, reject) => apiCall(postsApiUrl(user_id), 'GET', null, resolve, reject)
    );

export const getPostComments = (user_id) =>
    new Promise(
        (resolve, reject) => apiCall(commentsApiUrl(user_id), 'GET', null, resolve, reject)
    )

export const savePostComment = (body) => new Promise((resolve, reject) => {
    new Promise(
        (resolve, reject) => apiCall(commentsApiUrl(), 'POST', body, resolve, reject, headers)
    );
});
