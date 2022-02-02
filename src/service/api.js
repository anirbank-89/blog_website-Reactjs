import axios from 'axios';

const URL = "http://localhost:8000";

export var createPost = async (post)=>{
    try {
        return await axios.post(`${URL}/blog`, post);
    }
    catch (err) {
        console.log('Error while creating post due to ', err);
    }
}

export var getAllBlogs = async ()=>{
    try {
        let res = await axios.get(`${URL}/blog`);

        return res.data;
    }
    catch (err) {
        console.log("Error while fetching all posts due to ", err.message);
    }
}

export var getBlog = async (id)=>{
    try {
        let res = await axios.get(`${URL}/blog/${id}`);

        return res.data;
    }
    catch (err) {
        console.log("Error fetching data due to ", err.message);
    }
}

export var editBlog = async (id,data) => {
    try {
        return await axios.put(`${URL}/blog/${id}`, data);
    }
    catch (err) {
        console.log(err.message);
    }
}

export var deleteBlog = async (id) => {
    try {
        return await axios.delete(`${URL}/blog/${id}`);
    }
    catch (err) {
        console.log(err.message);
    }
}