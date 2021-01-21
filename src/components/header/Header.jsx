import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => {
  return {
    title: {
      flexGrow: 1,
    },
  };
});

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Container disableGutters>
          <Toolbar>
            <Typography
              variant="h6"
              color="secondary"
              className={classes.title}
            >
              TodoHub
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
