import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import { makeStyles, Button, Typography } from '@material-ui/core';
import { useHistory, useLocation, Route } from 'react-router-dom';
import { Carousel } from '3d-react-carousal';

import Home from './components/pages/Home'
import About from './components/pages/About'
import Gallery from './components/pages/Gallery'
import Contact from './components/pages/Contact'

const useStyles = makeStyles(() => ({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap'
  },
  navbar: {
    height: '10vh',
    width: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-evenly'
  },
  navBtn: {
    fontFamily: 'Gochi Hand',
    fontSize: '1.2rem',
    color: "#24A8DF",
  },
  navBtnCurrent: {
    fontFamily: 'Gochi Hand',
    fontSize: '1.2rem',
    color: "#F8E614",
    textShadow: "1px 1px #F8E614"

  }
}))

export default function App() {


  const history = useHistory();
  const location = useLocation()
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <Button className={location.pathname === "/" ? classes.navBtnCurrent : classes.navBtn} onClick={() => history.push("/")}>HOME</Button>
        <Button className={location.pathname === "/about" ? classes.navBtnCurrent : classes.navBtn} onClick={() => history.push("/about")}>ABOUT</Button>
        <Button className={location.pathname === "/gallery" ? classes.navBtnCurrent : classes.navBtn} onClick={() => history.push("/gallery")}>GALLERY</Button>
        <Button className={location.pathname === "/contact" ? classes.navBtnCurrent : classes.navBtn} onClick={() => history.push("/contact")}>CONTACT</Button>
      </div>
      <div className={classes.body}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
      </div>
    </div>
  );
}
