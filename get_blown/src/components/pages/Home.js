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
  contact: {
    fontFamily: 'Gochi Hand',
    fontSize: '1.2rem',
    color: '#24A8DF',
    textAlign: 'center'
  },
  contactCTA: {
    fontFamily: 'Gochi Hand',
    fontSize: '1.6rem',
    color: '#24A8DF',
    textAlign: 'center'
  },
  contactLink: {
    color: '#F8E614'
  },
  carouselContainer: {
      height: '46vh',
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
    <div>
      <img className={classes.logo} src={logo} />
      <div className={classes.carouselContainer}>
      <Carousel slides={slides} autoplay={true} interval={3000} />
          </div>
      <h3 className={classes.contact}>Unit 3, 91 Albert St, Preston</h3>
      <h3 className={classes.contactCTA}><a className={classes.contactLink} href="tel:+61370202496">CALL NOW</a> to make a booking</h3>
    </div>
  );
}