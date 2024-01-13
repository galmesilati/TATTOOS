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
import { useNavigate } from 'react-router-dom';

const pages = [ 'שאלות ותשובות','בית', 'גלריה', 'טיפול בקעקוע', 'יצירת קשר', 'צוות'];

function Header() {

  let pages = []
  pages = [ 'שאלות ותשובות','|','צוות', '|', 'יצירת קשר', 'גלריה','|', 'טיפול בקעקוע','|', 'בית']

const pageMapping = {
      'בית': '/',
      'גלריה': '/Gallery',
      'טיפול בקעקוע': '/TattooTreatment',
      'צוות': '/Crew',
      'שאלות ותשובות': '/QuestionsAnswers',
      'יצירת קשר': '/Contact'
    }

const navigate = useNavigate()


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (pageName) => {
    navigate(pageMapping[pageName])
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="relative" sx={{ backgroundColor: 'rgba(51, 51, 51, 0.8)', color: 'white', mt: 1 }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Box sx={{ justifyContent: 'center', mt: 0, mb: 0, flexGrow: 1, display: 'flex' }}>
          {pages.slice(0, 5).map((page, index) => (
            <Button key={index} onClick={() => handleCloseNavMenu(page)} sx={{ color: 'white', mx: 1, fontFamily: 'Arimo, sans-serif', fontSize: '1.3rem', fontWeight: 'bold' }}>
              {page}
            </Button>
          ))}
          <Avatar alt="Logo" src="https://i.ibb.co/h9ydL1X/Daniel-Atzram-2.jpg" sx={{ width: 105, height: 105, border: 2, ml: 'auto', mr: 'auto' }} />
          {pages.slice(5).map((page, index) => (
            <Button key={index + 5} onClick={() => handleCloseNavMenu(page)} sx={{ color: 'white', mx: 1, fontFamily: 'Arimo, sans-serif', fontSize: '1.3rem', fontWeight: 'bold' }}>
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;