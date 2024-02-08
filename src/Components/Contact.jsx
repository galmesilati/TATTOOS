import React, { useState } from 'react';
import { Grid, Typography, Paper, Box, useMediaQuery, useTheme, TextField, Button, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaze, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: 'הגעתי אלייך דרך האתר, אני מעוניין לקבוע תור',
  });

  const openWhatsApp = () => {
    const { name, email, message } = formData;
    const whatsappMessage = `היי שמי ${name}, ${message}.`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(`https://wa.me/972527015654?text=${encodedMessage}`, '_blank');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  return (
    <Container maxWidth="lg" style={{ backgroundColor: '#E5E5E5', minHeight: '100vh' }}>
    <Grid container spacing={3} marginTop={5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Left side - Image */}
      <Grid item xs={12} md={6}>
        <Paper elevation={8} style={{ height: isMobile ? '300px' : '500px', width: '100%', position: 'relative', borderRadius: isMobile ? '15px' : '15px 0 15px 15px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}>
          <img
            src="https://i.ibb.co/RgSJPyk/image.jpg"
            alt="Left side image"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: isMobile ? '0' : '15px' }}
          />
        </Paper>
      </Grid>

      {/* Right side - Content */}
      <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Paper elevation={3} style={{ padding: isMobile ? '10px' : '20px', width: '100%', maxWidth: isMobile ? '100%' : '400px', margin: isMobile ? '10px 0' : '0 auto', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '15px' }}>
          {/* Form for details */}
          <form>
            <Typography variant="h5" align="center" style={{ color: '#333', marginBottom: '20px' }}>
              לתיאום תור 
            </Typography>
            <TextField
              label="שם מלא"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
              style={{ marginBottom: '15px' }}
              InputLabelProps={{ style: { color: '#333' } }}
            />
            <TextField
              label="אימייל"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
              InputLabelProps={{ style: { color: '#333' } }}
              InputProps={{ classes: { outlined: 'outlinedInput' } }}
              
            />

            {/* Button to send a message on WhatsApp */}
            <Box display="flex" justifyContent="center" alignItems="center" mt={3}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#25d366',
                  color: '#FFF',
                  fontWeight: 'bold',
                  borderRadius: '25px', // Rounded button
                }}
                onClick={openWhatsApp}
                startIcon={<FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '5px' }} />}
              >
                שלח הודעה
              </Button>
            </Box>
          </form>
        </Paper>
      </Grid>
    </Grid>
  </Container>
  );
};

export default Contact;
