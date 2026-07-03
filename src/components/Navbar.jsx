import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';

// Animation for logo
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Custom styled components
const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Fira Code', monospace",
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: '#64ffda',
  textDecoration: 'none',
  '&:hover': {
    animation: `${pulse} 1s ease-in-out infinite`,
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  color: '#ccd6f6',
  fontFamily: "'Fira Code', monospace",
  fontWeight: 500,
  fontSize: '0.9rem',
  textTransform: 'none',
  position: 'relative',
  '&:hover': {
    color: '#64ffda',
    backgroundColor: 'transparent',
    '&::before': {
      width: '100%',
    },
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '0',
    height: '2px',
    bottom: '5px',
    backgroundColor: '#64ffda',
    transition: 'width 0.3s ease',
  },
}));

const MobileMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#112240',
    color: '#ccd6f6',
  },
}));

const MobileMenuItem = styled(MenuItem)(({ theme }) => ({
  fontFamily: "'Fira Code', monospace",
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
  },
}));

const pages = ['Home', 'About', 'Services', 'Skills', 'Works', 'Contact'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{
        backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.9)' : '#0a192f',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(2, 12, 27, 0.7)' : 'none',
        transition: 'all 0.3s ease-in-out',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Desktop Logo - Left side */}
          <LogoText
            variant="h6"
            noWrap
            component="a"
            href="#home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            GENO
          </LogoText>

          {/* Mobile menu button and logo */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: '#64ffda' }}
            >
              <MenuIcon />
            </IconButton>
            
            <LogoText
              variant="h5"
              noWrap
              component="a"
              href="#home"
              sx={{
                ml: 1,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                alignItems: 'center',
              }}
            >
              GENO
            </LogoText>
          </Box>

          {/* Mobile Menu */}
          <MobileMenu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((page) => (
              <MobileMenuItem 
                key={page} 
                onClick={handleCloseNavMenu}
                component="a"
                href={`#${page.toLowerCase()}`}
              >
                <Typography textAlign="center">{page}</Typography>
              </MobileMenuItem>
            ))}
            <MobileMenuItem 
              onClick={handleCloseNavMenu}
              component="a"
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#64ffda', fontWeight: 'bold' }}
            >
              <Typography textAlign="center">Resume</Typography>
            </MobileMenuItem>
          </MobileMenu>

          {/* Desktop Navigation - Right side */}
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' }, 
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}>
            {pages.map((page) => (
              <NavButton
                key={page}
                onClick={handleCloseNavMenu}
                href={`#${page.toLowerCase()}`}
              >
                {page}
              </NavButton>
            ))}
            <Button
              variant="outlined"
              sx={{
                color: '#64ffda',
                borderColor: '#64ffda',
                borderRadius: '4px',
                padding: '0.5rem 1rem',
                marginLeft: '1rem',
                fontFamily: "'Fira Code', monospace",
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  borderColor: '#64ffda',
                },
              }}
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;