import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    component: {
        background: '#FFFFFF',
        color: 'black'
    },
    container: {
        justifyContent: 'center',
        '& > *': {
            padding: 20
        }
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
});

const NavBar = ()=>{
    const classes = useStyles();
    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Link to={"/"} className={classes.link}><Typography>HOME</Typography></Link>
                <Typography>ABOUT</Typography>
                <Typography>CONTACT</Typography>
                <Typography>LOGIN</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;