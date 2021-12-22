export const baseUrl = 'https://learn-words-f8c5a-default-rtdb.asia-southeast1.firebasedatabase.app';
export const API = {
    get: (url, userId) => {
        return fetch(`${baseUrl}/${url}/${userId}`)
    },
    post: (data, url, userId) => {
        return fetch(`${baseUrl}/${url}/${userId}`, {
            method:'POST',
            body: data
        })
    },
    patch: (data, url, userId, cardId) =>{
        return fetch(`${baseUrl}/${url}/${userId}/${cardId}.json`, {
            method:'PATCH',
            body:data
        })
    },
    delete: (url, userId, cardId) =>{
        return fetch(`${baseUrl}/${url}/${userId}/${cardId}.json`, {
            method:'DELETE'
        })
    }
}
export default API;
