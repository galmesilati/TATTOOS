import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaze } from '@fortawesome/free-brands-svg-icons'; // Import the Waze icon
import '@fortawesome/fontawesome-svg-core/styles.css';




const Contact = () => {
  return (
    <Grid container spacing={3} marginTop={5}>
      {/* Left side - Google Map */}
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ height: '400px', width: '100%', position: 'relative' }}>
          {/* Replace the following iframe with your specific Google Map embed code */}
          <iframe
              title="Google Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.3113756096027!2d34.920511584824574!3d32.51782978105106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d0c452637ab2f%3A0x3606b0868d47174e!2z15TXl9eo157XldefIDUsINeQ15XXqCDXoten15nXkdeQ!5e0!3m2!1siw!2sil!4v1705339986767!5m2!1siw!2sil"
              allowFullScreen
        ></iframe>
        </Paper>
      </Grid>

      {/* Right side - Content */}
      <Grid item xs={12} md={6} style={{ padding: '20px' }} marginTop={5} >
        <Typography dir="rtl" fontSize={30}>
        <b>
        כתובת: החרמון 5, אור עקיבא <br/>
        טלפון: 052-701-5654 <br/>
        אימייל:{' '}
          <a href="mailto:AtzramDaniel22@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
            AtzramDaniel22@gmail.com
          </a>
          </b>
        </Typography>
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={5}
      >
        <Box mx={2} style={{ marginLeft: '30%', marginTop: '15%'}}>
          <a href="https://embed.waze.com/iframe?zoom=16&lat=32.518071&lon=34.918732&ct=livemap" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWaze} size="4x" style={{ color: '#FFF' }} />
          </a>
        </Box>
      </Box>
        
      </Grid>
    </Grid>
  );
};

export default Contact;