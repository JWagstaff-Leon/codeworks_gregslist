export const apiService = axios.create(
    {
        baseURL: "https://bcw-sandbox.herokuapp.com/api",
        timeout: 10000
    });