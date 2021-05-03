import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Carousel } from '3d-react-carousal';

// images
import logo from '../../assets/logo-h.png'
import car1 from '../../assets/car1.JPG';
import car2 from '../../assets/car2.JPG';
import car3 from '../../assets/car3.JPG';
// import car4 from '../../assets/car4.png';
// import car5 from '../../assets/car5.png';

const useStyles = makeStyles(() => ({
    home: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
  logo: {
    width: "100%",
  },
  carousel: {
      width: '80vw',
      height: '80vw',
      backgroundColor: 'white'
  }
}));

export default function Home() {
  const classes = useStyles();
  let slides = [
    <img src={car1} alt='1' />,
    <img src={car2} alt='2' />,
    <img src={car3} alt='3' />,
    // <img src={car4} alt='4' />,
    // <img src={car5} alt='5' />
  ]
  return (
    <div className={classes.home}>
      <img className={classes.logo} src={logo} />
      <Carousel className={classes.carousel} slides={slides} autoplay={true} interval={2000} />
    </div>
  );
}
