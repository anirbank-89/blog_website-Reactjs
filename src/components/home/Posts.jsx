import { Grid } from "@material-ui/core";
import React from "react";

// components imported
import OnePost from "./OnePost";


const Posts = () => {
    var posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    return (
        posts.map(post => (
            <Grid item lg={3} sm={4} xs={12}>
                <OnePost />
            </Grid>
        ))
    )
}

export default Posts;