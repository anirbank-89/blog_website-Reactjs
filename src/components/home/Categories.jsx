import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import { categories } from "../../constants/data";

const useStyles = makeStyles({
    create: {
        margin: 20,
        background: '#64958D',
        color: '#fff',
        width: '86%'
    },
    table: {
        border: '1px solid rgba(224, 224, 224, 1)'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
});

const Categories = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Link to="/create-blog" className={classes.link}><Button variant="contained" className={classes.create}>Create Blog</Button></Link>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Link to={'/'} className={classes.link}>All Categories</Link>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow>
                                <TableCell>
                                    <Link to={`/?category=${category}`} className={classes.link}>{category}</Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </React.Fragment>
    );
}

export default Categories;