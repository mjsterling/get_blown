import logo from "./assets/logo-h.png";
import React from "react";
import "./App.css";
import { makeStyles, Button } from "@material-ui/core";
import { useHistory, useLocation, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";
import GalleryImage from "./components/pages/Image"


import fblogo from "./assets/fblogo.png";
import instalogo from "./assets/instalogo.png"

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    maxWidth: "100%",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
  },
  header: {
    top: '0',
    paddingTop: '1vh',
    position: 'fixed',
    height: '22vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(to bottom, #161616 90%, transparent)',
    zIndex: '1'
  },
  logo: {
    maxWidth: '70vw',
    maxHeight: '15vh',
  },
  navbar: {
    height: "6vh",
    maxWidth: "100%",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-evenly",
    backgroundColor: 'transparent',
  },
  navBtn: {
    fontFamily: "Gochi Hand",
    fontSize: "1.4rem",
    color: "#24A8DF",
    backgroundColor: 'transparent',
  },
  navBtnCurrent: {
    fontFamily: "Gochi Hand",
    fontSize: "1.4rem",
    color: "#F8E614",
    textShadow: "0px 0px 2px #F8E614",
  },
  body: {
    position: 'fixed',
    top: '20vh',
    width: '100%',
  },
  contactContainer: {
    position: 'fixed',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    height: '24vh',
    width: '100%',
    top: '76vh',
    backgroundImage: 'linear-gradient(to top, #161616 90%, transparent)',
    paddingTop: '2vh',
  },
  contact: {
    fontFamily: "Gochi Hand",
    fontSize: "1.2rem",
    color: "#24A8DF",
    textAlign: "center",
    textDecoration: 'none'
  },
  contactCTA: {
    fontFamily: "Gochi Hand",
    fontSize: "1.8rem",
    textAlign: "center",
    color: "#F8E614"
  },
  contactLink: {
    color: "#FFFFFF",
    textShadow: "0px 0px 5px #24A8DF",
    fontSize: '2.6rem',
    letterSpacing: '0.1rem',
    textDecoration: 'none',
  },
  socials: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '5vh',
  },
  socialBtn: {
    maxHeight: '5vh',
    maxWidth: '10vw',
  }
}));

export default function App() {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
      <img className={classes.logo} src={logo} alt="logo"/>
      <div className={classes.navbar}>
        <Button
          className={
            location.pathname === "/" ? classes.navBtnCurrent : classes.navBtn
          }
          onClick={() => history.push("/")}
        >
          Home
        </Button>
        <Button
          className={
            location.pathname === "/about"
              ? classes.navBtnCurrent
              : classes.navBtn
          }
          onClick={() => history.push("/about")}
        >
          About
        </Button>
        <Button
          className={
            location.pathname.match(/gallery|image/)
              ? classes.navBtnCurrent
              : classes.navBtn
          }
          onClick={() => history.push("/gallery")}
        >
          Gallery
        </Button>
        <Button
          className={
            location.pathname === "/contact"
              ? classes.navBtnCurrent
              : classes.navBtn
          }
          onClick={() => history.push("/contact")}
        >
          Contact
        </Button>
      </div>
      </div>
      <div className={classes.body}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/image/:id" component={GalleryImage} />
      </div>
      <div className={classes.contactContainer}>
      <h3 className={classes.contact}><a className={classes.contact} href="tel:+61370202496">(03) 7020-2496</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a className={classes.contact} href="mailto:info@getblownhair.biz">info@getblownhair.biz</a></h3>
      <div className={classes.socials}>
        <div />
        <img className={classes.socialBtn} src={fblogo} alt="FB" onClick={() => window.open("https://www.facebook.com/gbhstyling")} />
        <img className={classes.socialBtn} src={instalogo} alt="IG" onClick={() => window.open("https://www.instagram.com/gbh_styling/")} />
        <div />
      </div>
      </div>
    </div>
  );
}
