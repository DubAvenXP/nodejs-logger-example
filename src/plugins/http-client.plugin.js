const httpClient = {
    get: async (url) => {
        const response = await fetch(url);
        return response.json();
    },
    post: async (url, body) => {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
        });
        return response.json();
    },
    put: async (url, body) => {
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(body),
        });
        return response.json();
    },
    delete: async (url) => {
        const response = await fetch(url, {
            method: "DELETE",
        });
        return response.json();
    },
}

module.exports = { httpClient };
