import axios from "axios";


const getAllUsers = async () => {
    const url = "https://jsonplaceholder.typicode.com/users/";
    const reponse = await axios.get(url);
    return reponse.data;
    
}

export default getAllUsers;