import axios from 'axios';

const URL = "http://localhost:8000";

export var createPost = async (post)=>{
    try {
        return await axios.post(`${URL}/create`, post);
    }
    catch (err) {
        console.log('Error while creating post due to ', err);
    }
}