import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    about: {
        color: '#FFFFFF',
        textAlign: 'justify',
        maxWidth: '80%',
        padding: '2% 5%',
        fontFamily: 'Open Sans, sans-serif',
        height: '58vh',
        margin: '0 5%',
        overflow: 'scroll',
    },
    serviceLI: {
        paddingLeft: '0',
        listStyleType: 'none',
    }
}))

export default function About() {
    const classes = useStyles();
    return (
        <div className={classes.about}>
        <p>Conceived in a drafty garage on a fine Autumn day in Melbourne’s outer east, Get Blown Hairstyling has evolved from a passing idea in 2015 to a fully fledged and functional business.</p>
        <p>It’s no secret that the world is currently in a state of inexplicable uncertainty; Get Blown Hairstyling is a place where frivolity, laughter and self-care are not only fundamentally accessible for all; they are central themes of operation.</p>
        <p>We are colour specialists, with particular passion for blonding and lightening services; as well as offering a diverse portfolio of services, including:</p>
        <p>Technical Colour Application </p>
        <p>Micro-Tape Extensions </p>
        <p>Hollywood Blow Outs</p>
        <p>Fashion Colours</p>
        <p>Toning/Colour Correcting</p>
        <p>Hair Ups/Formal Styling</p>
        <p>and everything in between.</p>
        
        <p>Let us act as your conduit en route to artistic expression; consult and establish your expectations and achieve them through our obsession with results.</p>
        
        <p>Our consultations are conducted thoroughly and will never be restricted by time - to ensure that we are truly on the same page.</p>
        
        <p>Welcome to the solicitors of transformation; welcome to Get Blown Hairstyling!</p>
        </div>
    )
}