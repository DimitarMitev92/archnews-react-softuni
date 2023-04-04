const host = 'http://localhost:3030/';

async function requester(method, url, data, accessToken) {
    const option = {
        method,
        headers: {}
    };

    if (data) {
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(data);
    }

    if (accessToken) {
        option.headers['X-Authorization'] = accessToken;
    }

    try {
        const response = await fetch(host + url, option);

        if (response.status === 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (error) {
        throw error;
    }
}

const get = requester.bind(null, 'GET');
const post = requester.bind(null, 'POST');
const put = requester.bind(null, 'PUT');
const del = requester.bind(null, 'DELETE');

export {
    get,
    post,
    put,
    del
};