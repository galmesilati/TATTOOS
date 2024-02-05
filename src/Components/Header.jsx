  // import * as React from 'react';
  // import IconButton from '@mui/material/IconButton';
  // import Menu from '@mui/material/Menu';
  // import MenuIcon from '@mui/icons-material/Menu';
  // import MenuItem from '@mui/material/MenuItem';
  // import { useNavigate } from 'react-router-dom';


  // function Header() {

  //   let pages = []
  //   pages = [ 'בית' ,'גלריה','טיפול בקעקוע', 'יצירת קשר']
    

  // const pageMapping = {
  //       'בית': '/',
  //       'גלריה': '/gallery',
  //       'טיפול בקעקוע': '/TattooTreatment',
  //       'יצירת קשר': '/Contact'
  //     }


  // const navigate = useNavigate()


  //   const [anchorElNav, setAnchorElNav] = React.useState(null);
  //   const [anchorElUser, setAnchorElUser] = React.useState(null);
  //   const [anchorEl, setAnchorEl] = React.useState(null);

  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  //   const handleOpenNavMenu = (event) => {
  //     setAnchorElNav(event.currentTarget);
  //   };
  //   const handleOpenUserMenu = (event) => {
  //     setAnchorElUser(event.currentTarget);
  //   };

  //   const handleCloseNavMenu = (pageName) => {
  //     const targetElementId = pageMapping[pageName];
      
  //     if (targetElementId) {
  //       const targetElement = document.getElementById(targetElementId.substring(1));
  
  //       if (targetElement) {
  //         targetElement.scrollIntoView({ behavior: 'smooth' });
  //       }
  //     }
  
  //     // Use the navigate function to update the URL
  //     const path = pageMapping[pageName];
  //     if (path) {
  //       handleNavigate(path);
  //     }
  
  //     setAnchorElNav(null);
  //   };

  //   const handleNavigate = (path) => {
  //     navigate(path);
  //   };

  //   return (
  //     <div style={{ position: 'absolute', right: '10px' }}>
  //       <IconButton
  //         size="large"
  //         edge="start"
  //         color="inherit"
  //         aria-label="menu"
  //         onClick={handleOpenNavMenu}
  //         style={{ color: 'white' }}
  //       >
  //         <MenuIcon />
  //       </IconButton>

  //       <Menu
  //         anchorEl={anchorElNav}
  //         open={Boolean(anchorElNav)}
  //         onClose={() => setAnchorElNav(null)}
  //       >
  //         {pages.map((page, index) => (
  //           <MenuItem key={index} onClick={() => handleCloseNavMenu(page)}>
  //             {page}
  //           </MenuItem>
  //         ))}
  //       </Menu>
  //     </div>
  //   );
  // }

  // export default Header;