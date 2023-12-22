import axios from "axios";

const axiosPublic = axios.create({
   //  baseURL:'http://localhost:5000'
    baseURL:'https://react-task-management-server-ojxxbn423-azadur-rahmans-projects.vercel.app'
})

const useAxiosPublic = ()=> {
    return axiosPublic;
}
export default useAxiosPublic;