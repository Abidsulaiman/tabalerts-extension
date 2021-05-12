import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Logo from "./logo-light.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  appBar: {
    background: "#0077B5",
    background: "-webkit-linear-gradient(to right, #0077B5, #30C191)",
    background: "linear-gradient(to right, #0077B5, #30C191)",
    boxShadow: "none",
    padding: "10px",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <img src={Logo} width="100" />
      </AppBar>
    </div>
  );
}

export default Header;
