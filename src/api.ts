import axios from "axios"

const getStudents= async()=>{
const response =await axios.get('https://randomuser.me/api/?results=5')
return response.data;
}
export default getStudents;