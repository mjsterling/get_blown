import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

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
import hair11 from "../../assets/photos/hair/hair11.JPG";
import hair12 from "../../assets/photos/hair/hair12.JPG";
import hair13 from "../../assets/photos/hair/hair13.JPG";
import hair14 from "../../assets/photos/hair/hair14.JPG";
import hair15 from "../../assets/photos/hair/hair15.JPG";
import hair16 from "../../assets/photos/hair/hair16.JPG";
import hair17 from "../../assets/photos/hair/hair17.JPG";
import hair18 from "../../assets/photos/hair/hair18.JPG";
import hair19 from "../../assets/photos/hair/hair19.JPG";
import hair20 from "../../assets/photos/hair/hair20.JPG";
import hair21 from "../../assets/photos/hair/hair21.JPG";
import hair22 from "../../assets/photos/hair/hair22.JPG";
import hair23 from "../../assets/photos/hair/hair23.JPG";
import hair24 from "../../assets/photos/hair/hair24.JPG";
import hair25 from "../../assets/photos/hair/hair25.JPG";
import hair26 from "../../assets/photos/hair/hair26.JPG";
import hair27 from "../../assets/photos/hair/hair27.JPG";
import hair28 from "../../assets/photos/hair/hair28.JPG";
import hair29 from "../../assets/photos/hair/hair29.JPG";
import hair30 from "../../assets/photos/hair/hair30.JPG";
import hair31 from "../../assets/photos/hair/hair31.JPG";
import hair32 from "../../assets/photos/hair/hair32.JPG";
import hair33 from "../../assets/photos/hair/hair33.JPG";
import hair34 from "../../assets/photos/hair/hair34.JPG";
import hair35 from "../../assets/photos/hair/hair35.JPG";
import hair36 from "../../assets/photos/hair/hair36.JPG";
import hair37 from "../../assets/photos/hair/hair37.JPG";
import hair38 from "../../assets/photos/hair/hair38.JPG";
import hair39 from "../../assets/photos/hair/hair39.JPG";
import hair40 from "../../assets/photos/hair/hair40.JPG";
import hair41 from "../../assets/photos/hair/hair41.JPG";
import hair42 from "../../assets/photos/hair/hair42.JPG";
import hair43 from "../../assets/photos/hair/hair43.JPG";
import hair44 from "../../assets/photos/hair/hair44.JPG";
import hair45 from "../../assets/photos/hair/hair45.JPG";
import hair46 from "../../assets/photos/hair/hair46.JPG";
import hair47 from "../../assets/photos/hair/hair47.JPG";
import hair48 from "../../assets/photos/hair/hair48.JPG";
import hair49 from "../../assets/photos/hair/hair49.JPG";
import hair50 from "../../assets/photos/hair/hair50.JPG";
import hair51 from "../../assets/photos/hair/hair51.JPG";
import hair52 from "../../assets/photos/hair/hair52.JPG";
import hair53 from "../../assets/photos/hair/hair53.JPG";
import hair54 from "../../assets/photos/hair/hair54.JPG";
import hair55 from "../../assets/photos/hair/hair55.JPG";
import hair56 from "../../assets/photos/hair/hair56.JPG";
import hair57 from "../../assets/photos/hair/hair57.JPG";
import hair58 from "../../assets/photos/hair/hair58.JPG";
import hair59 from "../../assets/photos/hair/hair59.JPG";
import hair60 from "../../assets/photos/hair/hair60.JPG";
import hair61 from "../../assets/photos/hair/hair61.JPG";
import hair62 from "../../assets/photos/hair/hair62.JPG";
import hair63 from "../../assets/photos/hair/hair63.JPG";
import hair64 from "../../assets/photos/hair/hair64.JPG";
import hair65 from "../../assets/photos/hair/hair65.JPG";
import hair66 from "../../assets/photos/hair/hair66.JPG";
import hair67 from "../../assets/photos/hair/hair67.JPG";
import hair68 from "../../assets/photos/hair/hair68.JPG";
import hair69 from "../../assets/photos/hair/hair69.JPG";
import hair70 from "../../assets/photos/hair/hair70.JPG";
import hair71 from "../../assets/photos/hair/hair71.JPG";
import hair72 from "../../assets/photos/hair/hair72.JPG";
import hair73 from "../../assets/photos/hair/hair73.JPG";
import hair74 from "../../assets/photos/hair/hair74.JPG";
import hair75 from "../../assets/photos/hair/hair75.JPG";
import hair76 from "../../assets/photos/hair/hair76.JPG";
import hair77 from "../../assets/photos/hair/hair77.JPG";
import hair78 from "../../assets/photos/hair/hair78.JPG";
import hair79 from "../../assets/photos/hair/hair79.JPG";
import hair80 from "../../assets/photos/hair/hair80.JPG";

const useStyles = makeStyles(() => ({
  imgContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imageDisplay: {
    maxWidth: "80vw",
    maxHeight: "40vh",
    margin: "10vh 0",
    borderRadius: "2vh",
    border: "2px solid white",
  },
}));

export default function GalleryImage() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  const imgId = location.pathname.split("/").pop();
  console.log(imgId);
  const originals = [
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
    hair11,
    hair12,
    hair13,
    hair14,
    hair15,
    hair16,
    hair17,
    hair18,
    hair19,
    hair20,
    hair21,
    hair22,
    hair23,
    hair24,
    hair25,
    hair26,
    hair27,
    hair28,
    hair29,
    hair30,
    hair31,
    hair32,
    hair33,
    hair34,
    hair35,
    hair36,
    hair37,
    hair38,
    hair39,
    hair40,
    hair41,
    hair42,
    hair43,
    hair44,
    hair45,
    hair46,
    hair47,
    hair48,
    hair49,
    hair50,
    hair51,
    hair52,
    hair53,
    hair54,
    hair55,
    hair56,
    hair57,
    hair58,
    hair59,
    hair60,
    hair61,
    hair62,
    hair63,
    hair64,
    hair65,
    hair66,
    hair67,
    hair68,
    hair69,
    hair70,
    hair71,
    hair72,
    hair73,
    hair74,
    hair75,
    hair76,
    hair77,
    hair78,
    hair79,
    hair80,
  ];

  return (
    <div className={classes.imgContainer}>
      <img
        src={originals[imgId]}
        className={classes.imageDisplay}
        onClick={() => history.push("/gallery")}
        alt={imgId}
      />
    </div>
  );
}
