import { makeStyles } from "@material-ui/core";
import map from "../../assets/map.png";

const useStyles = makeStyles(() => ({
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "4vh",
  },
  mapImg: {
    maxWidth: "50%",
    maxHeight: "40%",
    borderRadius: "2vh",
  },
  hoursContainer: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "space-evenly",
    height: "23vh",
    width: '90vw',
  },
  info: {
    fontFamily: "Gochi Hand",
    textAlign: "center",
    color: "#FFFFFF",
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.contactContainer}>
      <img
        src={map}
        onClick={() => window.open("https://g.page/gbhstyling?share")}
        className={classes.mapImg}
      />
      <h3
        className={classes.info}
        onClick={() => window.open("https://g.page/gbhstyling?share")}
      >
        Unit 3, 91 Albert St, Preston
      </h3>
      <div>
      <div className={classes.hoursContainer}>
        <p className={classes.info}>Mon 10am–7:30pm</p>

        <p className={classes.info}>Tue 10am–7:30pm</p>

        <p className={classes.info}>Wed 10am–7:30pm</p>

        <p className={classes.info}>Thu 10am–11:30pm</p>

        <p className={classes.info}>Fri 10am–8:30pm</p>

        <p className={classes.info}>Sat 9:30am–6:30pm</p>
      </div>
      <p className={classes.info}>Sun 11am–4pm</p>
      </div>
    </div>
  );
}
