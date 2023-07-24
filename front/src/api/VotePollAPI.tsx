import axios, {AxiosInstance, AxiosResponse} from "axios";

const VotePollAPI: AxiosInstance =  axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

VotePollAPI.interceptors.response.use((data) => data.data);


export default VotePollAPI;