import { Box, Grid, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";


const Gallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const imageUrls = [
    'https://i.ibb.co/FJvLrFP/18.jpg',
    'https://i.ibb.co/ZHt8zGT/2.jpg',
    'https://i.ibb.co/jv8kRG0/3.jpg',
    'https://i.ibb.co/XtZwvpT/4.jpg',
    'https://i.ibb.co/mbD0Ymn/6.jpg',
    'https://i.ibb.co/SNPMKWn/7.jpg',
    'https://i.ibb.co/JBnv8r7/8.jpg',
    'https://i.ibb.co/55tZbwz/9.jpg',
    'https://i.ibb.co/k3dfVJL/10.jpg',
    'https://i.ibb.co/bL1VgLV/dd.jpg',
    'https://i.ibb.co/1ZHG6tp/12.jpg',
    'https://i.ibb.co/hRyRgs1/13.jpg',
    'https://i.ibb.co/V3dBVS2/14.jpg',
    'https://i.ibb.co/t4FSXBg/15.jpg',
    'https://i.ibb.co/fX9tmkg/16.jpg',
    'https://i.ibb.co/B3hbWw2/17.jpg',
    // ... Add more image URLs
  ];

  const getGridItemSize = () => {
    if (isMobile) {
      return { xs: 12, sm: 6, md: 6 };
    } else {
      return { xs: 12, sm: 6, md: 3 };
    }
  };

  return (
    <>
    <Grid container spacing={3} marginTop={5}>
      {imageUrls.map((imageUrl, index) => (
        <Grid item key={index} xs={12} sm={6} md={getGridItemSize().md}>
          <Paper elevation={3} style={{ height: '200px', overflow: 'hidden' }}>
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover',  }}
              
            />
          </Paper>
        </Grid>
      ))}
    </Grid>
    </>
  );
  
};

export default Gallery;
