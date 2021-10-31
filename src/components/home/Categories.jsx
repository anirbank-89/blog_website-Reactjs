import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    create: {
        margin: 20,
        background: '#64958D',
        color: '#fff'
    }
});

const Categories = () => {
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <Button variant="contained" className={classes.create}>Create Blog</Button>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>All Categories</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Music</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </React.Fragment>
    );
}

export default Categories;