import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['בית', '|', 'גלריה','|', 'טיפול בקעקוע','|', 'יצירת קשר','|', 'צוות'];

function Header() {

  let pages = []
if (localStorage.getItem('token') ) {
  pages = ['צוות', '|', 'יצירת קשר','|', 'גלריה','|', 'טיפול בקעקוע','|', 'בית']
} else {
  pages = ['בית']
}

const pageMapping = {
      'בית': '/',
      'גלריה': '/Gallery',
      'טיפול בקעקוע': '/TattooTreatment',
      'יצירת  קשר': '/Contact',
      'צוות': '/Crew'
    }


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="relative" sx={{ backgroundColor: '#333', color: 'white' }}>
      <Toolbar sx={{justifyContent: 'center'}}>
        <Box sx={{justifyContent: 'center', mt: 2.5, mb: 2.5, flexGrow: 1,  display: { xs: 'none', md: 'flex'}}}>
          {pages.map((page, index) => (
            <Button key={index} sx={{color: 'white', mx: 1, fontFamily: 'Arimo, sans-serif', fontSize: '1.3rem', fontWeight: 'bold' }}>
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

//   return (
//     <AppBar position="relative" sx={{ backgroundColor: 'grey', color: 'black' }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters sx={{ justifyContent: 'right' }}>
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu} >
//                   <Typography  textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <Box sx={{justifyContent: 'center',  flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ mr: 3, my: 4, color: 'black', display: 'block', fontSize: '1.4rem', fontWeight: 700 }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>


//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
export default Header;