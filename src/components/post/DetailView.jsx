import { Box, makeStyles } from "@material-ui/core";
import { Edit, Delete } from '@material-ui/icons';

const useStyles = makeStyles({
    container: {
        padding: '0 100px'
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    }
});


const DetailView = () => { 
    var url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image} />
            <Box>
                <Edit />
                <Delete />
            </Box>
        </Box>
    )
}

export default DetailView;