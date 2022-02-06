import { Box, Button, makeStyles, TextareaAutosize } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";

// api calls
import { getComments, newComment } from "../../service/api";

// components
import OneComment from './OneComment';

let useStyles = makeStyles({
    component: {
        marginTop: 100,
        display: 'flex'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: '50%'
    },
    textarea: {
        width: '100%',
        margin: '0 20px'
    },
    button: {
        height: 40
    }
});

let initialValues = {
    name: '',
    postId: '',
    comment: ''
}

var Comments = ({ post }) => {
    console.log(post);
    const url = "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"

    let classes = useStyles();

    const [comment, setComment] = useState(initialValues);
    const [blogComments, setComments] = useState([]);

    useEffect(() => {
        var getData = async () => {
            console.log("blog Id ", post._id);
            let data = await getComments(post._id);
            setComments(data.data);
        }
        getData();
    }, [post]);

    var handleChange = (e) => {
        setComment({
            ...comment,
            name: post.author,
            postId: post._id,
            comment: e.target.value
        });
    }

    var postComment = async () => {
        await newComment(comment);
    }

    return (
        <Box>
            <Box className={classes.component}>
                <img src={url} alt="dp" className={classes.image} />
                <TextareaAutosize
                    className={classes.textarea}
                    minRows={5}
                    onChange={(e) => handleChange(e)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={classes.button}
                    onClick={() => postComment()}
                >
                    Post
                </Button>
            </Box>
            {
                blogComments && blogComments.map(item => {
                    return (
                        <OneComment comment={blogComments} />
                    )
                })
            }
        </Box>
    )
}

export default Comments;