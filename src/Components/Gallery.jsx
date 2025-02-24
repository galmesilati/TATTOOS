import { Grid, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";


const Gallery = () => {
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const imageUrls = [
    'https://i.ibb.co/8dr9CVZ/6.jpg',
    'https://i.ibb.co/ZHt8zGT/2.jpg',
    'https://i.ibb.co/jv8kRG0/3.jpg',
    'https://i.ibb.co/XtZwvpT/4.jpg',
    'https://i.ibb.co/mbD0Ymn/6.jpg',
    'https://i.ibb.co/wBQwDv5/3.jpg',
    'https://i.ibb.co/pXjFSL7/1.jpg',
    'https://i.ibb.co/8rHSBJH/2.jpg',
    'https://i.ibb.co/k3dfVJL/10.jpg',
    'https://i.ibb.co/bL1VgLV/dd.jpg',
    'https://i.ibb.co/VCPyk3K/4.jpg',
    'https://i.ibb.co/XxMDcFt/5.jpg',
    'https://i.ibb.co/V3dBVS2/14.jpg',
    'https://i.ibb.co/t4FSXBg/15.jpg',
    'https://i.ibb.co/fX9tmkg/16.jpg',
    'https://i.ibb.co/B3hbWw2/17.jpg',
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
