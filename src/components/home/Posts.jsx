import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../../service/api";

// components imported
import OnePost from "./OnePost";


const Posts = () => {
    // var posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            let data = await getAllBlogs();
            console.log(data.data);
            setPosts(data.data);
        }
        fetchData();
    }, []);
    return (
        posts.map(item => (
            <Grid item lg={3} sm={4} xs={12}>
                <Link to={`/blog/${item._id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                    <OnePost post={item} />
                </Link>
            </Grid>
        ))
    )
}

export default Posts;