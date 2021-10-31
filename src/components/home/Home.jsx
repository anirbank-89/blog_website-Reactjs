import { Grid } from "@material-ui/core";
import React from "react";

// imported components
import Banner from "./Banner";
import Categories from "./Categories";
import Posts from "./Posts";

const Home = () => {
    return (
        <React.Fragment>
            <Banner />
            <Grid container>
                <Grid item>
                    <Categories />
                </Grid>
                <Grid item>
                    <Posts />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Home;