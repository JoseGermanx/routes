import axios from "axios";


const getUser = async () => {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    const reponse = await axios.get(url);
    console.log(reponse.data);
    return reponse.data;
    
}

export default getUser;