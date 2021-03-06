import { Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize } from "@material-ui/core";
import { AddCircle } from '@material-ui/icons';
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

import { createPost, uploadFile } from "../../service/api";

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
    form: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    textField: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textArea: {
        width: '100%',
        marginTop: 50,
        border: 'none',
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    }
}));

const URL = "";

const initialValue = {
    title: '',
    description: '',
    image: '',
    author: 'anirbank-89',
    category: 'All'
    // created_at: new Date()
}

const CreateNew = () => {
    const classes = useStyles();
    const history = useHistory();

    const [post, setPost] = useState(initialValue);
    const [file, setFile] = useState('');
    const [img, setImg] = useState('');

    const url = post.image ? `${URL}/${post.image}` : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

    useEffect(() => {
        var getImage = async () => {
            if (file) {
                const NEW_FILE = new FormData();
                NEW_FILE.append("name", file.name);
                NEW_FILE.append("image", file);

                let image = await uploadFile(NEW_FILE);
                post.image = image.data.image;
                setImg(image.data.image);
            }
        }
        getImage();
    }, [file]);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const savePost = async () => {
        await createPost(post);
        history.push('/');
    }

    return (
        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image} />

            <FormControl className={classes.form}>
                <label htmlFor="fileInput">
                    <AddCircle fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: 'none' }}
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <InputBase
                    placeholder="tile"
                    className={classes.textField}
                    name="title"
                    onChange={(e) => handleChange(e)}
                />
                <Button variant="contained" color="primary" onClick={() => savePost()} >Publish</Button>
            </FormControl>

            <TextareaAutosize
                minRows={5}
                placeholder="Tell your story...."
                className={classes.textArea}
                name="description"
                onChange={(e) => handleChange(e)}
            />
        </Box>
    )
}

export default CreateNew;