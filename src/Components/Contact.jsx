import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, Button, Box, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const openWhatsApp = () => {
    const { name, message } = formData;
    const whatsappMessage = `היי שמי ${name}, ${message || 'הגעתי אלייך דרך האתר ואני מעוניין בקביעת תור'}.`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(`https://wa.me/972527015654?text=${encodedMessage}`, '_blank');
  };

  return (
    <Container
      maxWidth="lg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundImage: 'url(https://i.ibb.co/RgSJPyk/image.jpg)', // Replace with your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
      }}
    >
      {/* Contact Form */}
      <Paper
        elevation={5}
        style={{
          width: '100%',
          maxWidth: '600px',
          padding: '30px',
          textAlign: 'center',
          borderRadius: '25px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography variant="h4" style={{ fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
          צור קשר
        </Typography>
        <form>
          <TextField
            label="שם מלא"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
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
          />
          <TextField
            label="הודעה"
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <Box mt={3}>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#25d366',
                color: '#FFF',
                fontWeight: 'bold',
                borderRadius: '25px',
                padding: '10px 20px',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
              onClick={openWhatsApp}
              startIcon={<FontAwesomeIcon icon={faWhatsapp} />}
            >
              שלח הודעה
            </Button>
          </Box>
        </form>
      </Paper>

      {/* Footer */}
      <Box mt={5} style={{ textAlign: 'center' }}>
        <Typography variant="body1" style={{ marginBottom: '10px', color: '#fff' }}>
          עקוב אחרינו
        </Typography>
        <Box>
          <IconButton
            style={{ color: '#4267B2', margin: '0 10px' }}
            onClick={() => window.open('https://www.facebook.com/Daniel.Atzram?mibextid=sCpJLy', '_blank')}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </IconButton>
          <IconButton
            style={{ color: '#C13584', margin: '0 10px' }}
            onClick={() => window.open('https://www.instagram.com/daniel_atzram_tattoos?igsh=MWl6anNjeGhydjFyeQ==', '_blank')}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
