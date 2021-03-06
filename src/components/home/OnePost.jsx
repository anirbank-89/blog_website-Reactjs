import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        height: 350,
        margin: 10, 
        borderRadius: 10,
        border: '1px solid #d3cede',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& > *': {
            padding: '0 5px 5px 5px'
        }
    },
    image: {
        height: 145,
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0'
    },
    text: {
        color: '#878787',
        fontSize: 12,
    },
    heading: {
        fontSize: 18,
        fontWeight: 600,
        textAlign: 'center'
    },
    detail: {
        fontSize: 13,
        wordBreak: 'break-word'
    }
});

const URL = "";

const OnePost = ({ post }) => {
    const url = post.image ? `${URL}/${post.image}` : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    const classes = useStyles();

    var addEllipsis = (str,limit) => {
        return str.length > limit ? str.substring(0,limit) + '...' : str;
    }

    return (
        <Box className={classes.container}>
            <img src={url} alt="wrapper" className={classes.image}/>
            <Typography className={classes.text}>{post.category}</Typography>
            <Typography className={classes.heading}>{addEllipsis(post.title, 20)}</Typography>
            <Typography className={classes.text}>{post.author}</Typography>
            <Typography className={classes.detail}>{addEllipsis(post.description, 100)}</Typography>
        </Box>
    )
}

export default OnePost;