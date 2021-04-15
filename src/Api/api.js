import axios from 'axios';
import {getToken} from '../functions/common';
const instance = axios.create({baseURL:"http://localhost:8080/"})
instance.interceptors.request.use(

    request=>{
    if(request.url.includes('userinfo')){
    request.headers['Authorization']=getToken();
}
    return request ;
}, error =>{return Promise.reject(error)})
export default  instance;
