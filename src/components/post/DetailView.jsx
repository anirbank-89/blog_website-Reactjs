import { useState, useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Edit, Delete } from '@material-ui/icons';
import { Link, useHistory } from "react-router-dom";

import { deleteBlog, getBlog } from "../../service/api";

// Components
import Comments from '../comments/Comments';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 100px',
        [theme.breakpoints.down('md')]: {
            padding: 0
        }
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    icons: {
        float: 'right'
    },
    icon: {
        margin: 5,
        border: '1px solid #878787',
        padding: 5,
        borderRadius: 10
    },
    heading: {
        fontSize: 30,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    },
    subheading: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}));

const SERVER_URL = "http://localhost:8000";

const DetailView = ({ match }) => {
    const classes = useStyles();

    const history = useHistory();

    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            let res = await getBlog(match.params.id);
            console.log(res.data);
            setPost(res.data);
        }
        fetchData();
    }, []);

    var url = post.image ? `${SERVER_URL}/${post.image}` : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

    var deleteData = async () => {
        await deleteBlog(post._id);
        history.push('/');
    }

    return (
        <Box className={classes.container}>
            {/* src={post.image || url} */}
            <img src={url} alt="banner" className={classes.image} />
            <Box className={classes.icons}>
                <Link to={`/update-blog/${post._id}`}><Edit className={classes.icon} color="primary" /></Link>
                <Delete className={classes.icon} color="error" onClick={() => deleteData()} />
            </Box>
            <Typography className={classes.heading}>{post.title}</Typography>

            <Box className={classes.subheading}>
                <Link to={`/?author=${post.author}`} className={classes.link}>
                    <Typography>Author: <span style={{ fontWeight: 600 }}>{post.author}</span></Typography>
                </Link>
                <Typography style={{ marginLeft: 'auto' }}>{new Date(post.created_at).toDateString()}</Typography>
            </Box>

            <Typography>{post.description}</Typography>
            <Comments post={post} match={match} />
        </Box>
    )
}

export default DetailView;