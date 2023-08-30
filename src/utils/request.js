import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

const get = async (url, options = {}) => {
    const response = await request.get(url, options);

    return response.data;
};

export { get };
export default request;
