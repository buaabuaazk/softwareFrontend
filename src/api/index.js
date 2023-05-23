import axios from "../axios";
 
export const alldata=(data)=>{
  return axios({
    url:'/article/data',
    method:'post',
    data
  })
}
 
 
export default {alldata}