import axios from "axios";

const getData = async <T> (url: string) => {
    const response = await axios.get<T>(url);
    return response.data;
};

export {getData};
