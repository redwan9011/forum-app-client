import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://forum-app-server-roan.vercel.app',

})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;