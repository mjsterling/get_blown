import { makeStyles, Typography } from "@material-ui/core";
import { Carousel } from "3d-react-carousal";
import { useHistory } from "react-router-dom"

import hair1 from "../../assets/photos/hair/hair1.JPG";
import hair2 from "../../assets/photos/hair/hair2.JPG";
import hair3 from "../../assets/photos/hair/hair3.JPG";
import hair4 from "../../assets/photos/hair/hair4.JPG";
import hair5 from "../../assets/photos/hair/hair5.JPG";
import hair6 from "../../assets/photos/hair/hair6.JPG";
import hair7 from "../../assets/photos/hair/hair7.JPG";
import hair8 from "../../assets/photos/hair/hair8.JPG";
import hair9 from "../../assets/photos/hair/hair9.JPG";
import hair10 from "../../assets/photos/hair/hair10.JPG";

const useStyles = makeStyles(() => ({
  home: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  sloganContainer: {
    width: "100%",
    height: "10vh",
    textAlign: "center",
  },
  slogan1: {
    fontSize: "1.7rem",
    textAlign: "center",
    color: "#FFFFFF",
    textShadow: "0px 0px 5px #24A8DF",
    letterSpacing: "0.15rem",
    fontFamily: "Permanent Marker",
  },
  slogan2: {
    fontSize: "2.2rem",
    textAlign: "center",
    color: "#FFFFFF",
    textShadow: "0px 0px 5px #24A8DF",
    letterSpacing: "0.15rem",
    fontFamily: "Permanent Marker",
  },
  carouselContainer: {
    marginTop: "8vh",
    height: "30vh",
    fontSize: "2rem",
    borderRadius: "2vh",
  },
  carouselImg: {
    maxHeight: "30vh",
    borderRadius: "2vh",
    border: "2px solid white",
    background: "white",
  },
  contactContainer: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    height: "10vh",
    zIndex: "1",
  },
  contact: {
    fontFamily: "Gochi Hand",
    fontSize: "1.2rem",
    color: "#24A8DF",
    textAlign: "center",
    textDecoration: "none",
  },
  contactCTA: {
    fontFamily: "Gochi Hand",
    fontSize: "1.8rem",
    textAlign: "center",
    color: "#F8E614",
  },
  contactLink: {
    color: "#FFFFFF",
    textShadow: "0px 0px 5px #24A8DF",
    fontSize: "2.6rem",
    letterSpacing: "0.1rem",
    textDecoration: "none",
  },
  socials: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    height: "5vh",
  },
  socialBtn: {
    maxHeight: "5vh",
    maxWidth: "10vw",
  },
}));

export default function Home() {
  const classes = useStyles();
  const history = useHistory();

  let imgs = [
    hair1,
    hair2,
    hair3,
    hair4,
    hair5,
    hair6,
    hair7,
    hair8,
    hair9,
    hair10,
  ];
  const slides = imgs.map((image) => {
    return <img src={image} className={classes.carouselImg} alt={image} onClick={() => history.push("/gallery")} />;
  });
  return (
    <div className={classes.home}>
      <div className={classes.carouselContainer}>
        <Carousel
          slides={slides}
          autoplay={true}
          interval={3000}
          arrows={false}
          arrowBorders={false}
        />
      </div>

      <h3 className={classes.contactCTA}>
        <a className={classes.contactLink} href="tel:+61370202496">
          CALL NOW
        </a>
        <br />
        for a free phone consultation
      </h3>
    </div>
  );
}
