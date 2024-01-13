import { Box, Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'  }}>
      <img
        src="https://i.ibb.co/h9ydL1X/Daniel-Atzram-2.jpg"
        style={{ borderRadius: '50%', width: '200px', height: '200px', border: '2px solid white', }}
        alt="Circular Avatar"
      />

<Typography variant="h4" color="white" mt={2} style={{ fontFamily: 'Playfair Display, serif' }}>
  <b>DANIEL ATZRAM TATTOOS</b>
</Typography>
      
      <Typography variant="h7" color="yellow" mt={0} style={{ fontFamily: 'Playfair Display, serif' }}>
      <b>EXCEPTIONAL ARTISTRY CRAFTED TO PERFECTION</b>
      </Typography>

      <Typography variant="h8" color="white" mt={2}>
        <b>
      .הסטודיו מתמחה במגוון סגנונות ובעיקר בסגנון הריאליזם. ממוקם באור עקיבא ומנוהל על ידי האמנית-מקעקעת דניאל אצרם <br /> .יחד נתרגם את החלום שלך לקעקוע בעיצוב אישי וייחודי תוך דגש על סטנדרט גבוהה באווירה סבלנית ומקצועית
      </b>
      </Typography>
      <br />
      <br />
      <hr style={{ width: '65%', borderTop: '2px solid white', margin: '20px 0' }} />
    </div>
  );
}

export default Home;
