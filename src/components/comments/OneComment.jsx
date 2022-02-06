import { Box, makeStyles, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

import { removeComment } from '../../service/api';

let useStyle = makeStyles({
    component: {
        marginTop: 30,
        background: '#F5F5F5',
        padding: 10
    },
    container: {
        display: 'flex',
        marginBottom: 5
    },
    name: {
        fontSize: 18,
        fontWeight: 600,
        marginRight: 20
    },
    date: {
        fontSize: 14,
        color: '#878787'
    },
    delete: {
        marginLeft: 'auto'
    }
});

var OneComment = ({ comment, setToggle }) => {
    console.log("One comment", comment);
    let classes = useStyle();

    var deleteComment = async () => {
        await removeComment(comment._id);
        setToggle(prevVal => !prevVal);
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <Typography className={classes.name}>{comment.name}</Typography>
                <Typography className={classes.date}>{comment.on_date}</Typography>
                <Delete className={classes.delete} onClick={() => deleteComment()} />
            </Box>
            <Typography>{comment.comment}</Typography>
        </Box>
    )
}

export default OneComment;