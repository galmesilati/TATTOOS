import { Box, Grid, Typography } from "@mui/material";
import TattooTreatment from "./TattooTreatment";
import QuestionsAnswers from "./questionsAnswers";
import Crew from "./Crew";
import Contact from "./Contact";
import Gallery from "./Gallery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <>
    <div id="Home" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
      <img
        src="https://i.ibb.co/h9ydL1X/Daniel-Atzram-2.jpg"
        style={{ borderRadius: '50%', width: '100px', height: '100px', border: '2px solid white', marginRight: '92%', marginTop: '5px' }}
        alt="Circular Avatar"
      />

<Typography variant="h3" color="white" mt={18} style={{ fontFamily: 'Playfair Display, serif', opacity: 0.8, textShadow: '0 0 15px rgba(	255, 208, 0, 1)' }}>
  <b>DANIEL ATZRAM TATTOOS</b>
</Typography>
      
      <Typography variant="h7" color="yellow" mt={0} style={{ fontFamily: 'Playfair Display, serif', opacity: 0.8, textShadow: '0 0 15px rgba(	255, 208, 0, 1)' }}>
      <b>EXCEPTIONAL ARTISTRY CRAFTED TO PERFECTION</b>
      </Typography>

      <Typography variant="h8" color="white" mt={2} style={{opacity: 0.8, textShadow: '0 0 20px rgba(	255, 208, 0, 1)', fontFamily: '.david-libre-medium'}}>
        <b>
      .הסטודיו מתמחה במגוון סגנונות ובעיקר בסגנון הריאליזם. ממוקם באור עקיבא ומנוהל על ידי האמנית-מקעקעת דניאל אצרם <br /> .יחד נתרגם את החלום שלך לקעקוע בעיצוב אישי וייחודי תוך דגש על סטנדרט גבוהה באווירה סבלנית ומקצועית
      </b>
      </Typography>
      <br />
      <br />
      <hr style={{ width: '65%', borderTop: '2px solid white', margin: '20px 0' }} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={5}
        flexWrap="wrap"
        mb={9}
      >
        <Box mx={2} my={2}>
          <a href="https://www.facebook.com/Daniel.Atzram?mibextid=sCpJLy" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#FFF' }} />
          </a>
        </Box>
        <Box mx={2} my={2}>
          <a href="https://www.instagram.com/daniel_atzram_tattoos?igsh=MWl6anNjeGhydjFyeQ==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#FFF' }} />
          </a>
        </Box>
        <Box mx={2} my={2}>
          <a href="https://wa.me/+9720527015654" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#FFF' }} />
          </a>
        </Box>
      </Box>
      
    </div>


    <Box mt={10} id="gallery" style={{ background: '#262626', color: '#FFF', padding: '50px' }}>
      <p className="david-libre-meduim" style={{textAlign: 'center', fontSize: 30}}>
          גלריה
        </p>
        <Gallery />
      </Box>

      <Box mt={10} id="tattooTreatment" style={{ background: '#1A1A1A', color: '#FFF', padding: '50px' }}>
        <p className="david-libre-meduim" style={{textAlign: 'center', fontSize: 30}}>
          טיפול בקעקוע חדש
        </p>
        <TattooTreatment />
      </Box>

      <Box mt={10} id="contact" style={{ background: '#2C2C2C', color: '#FFF', padding: '50px' }}>
        <p className="david-libre-meduim" style={{textAlign: 'center', fontSize: 30}}> 
          יצירת קשר
        </p>
        <Contact />
      </Box>  

    </>
  );
}

export default Home;
