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
  letterSpacing: '.2rem',
  color: '#10b981',
  textDecoration: 'none',
  '&:hover': {
    animation: `${pulse} 1s ease-in-out infinite`,
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0.5, 1),
  color: '#a1a1aa',
  fontFamily: "'Fira Code', monospace",
  fontWeight: 500,
  fontSize: '0.85rem',
  textTransform: 'none',
  position: 'relative',
  '&:hover': {
    color: '#10b981',
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
    backgroundColor: '#10b981',
    transition: 'width 0.3s ease',
  },
}));

const MobileMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#121214',
    color: '#f4f4f5',
    border: '1px solid rgba(255, 255, 255, 0.08)',
  },
}));

const MobileMenuItem = styled(MenuItem)(({ theme }) => ({
  fontFamily: "'Fira Code', monospace",
  '&:hover': {
    backgroundColor: 'rgba(16, 185, 129, 0.08)',
    color: '#10b981',
  },
}));

const pages = ['Home', 'About', 'Skills', 'Works', 'Contact'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
        top: scrolled ? '15px' : '0px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: scrolled ? 'calc(100% - 30px)' : '100%',
        maxWidth: scrolled ? '1100px' : '100%',
        borderRadius: scrolled ? '24px' : '0px',
        backgroundColor: scrolled ? 'rgba(9, 9, 11, 0.75)' : 'transparent',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.3s ease-in-out',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        border: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        px: { xs: 1, sm: 2 },
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
              sx={{ color: '#10b981' }}
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
              style={{ color: '#10b981', fontWeight: 'bold' }}
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
                color: '#10b981',
                borderColor: '#10b981',
                borderRadius: '99px',
                padding: '0.4rem 1.2rem',
                marginLeft: '1rem',
                fontFamily: "'Fira Code', monospace",
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.85rem',
                '&:hover': {
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  borderColor: '#10b981',
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