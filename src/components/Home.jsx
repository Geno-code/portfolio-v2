import React from 'react';
import { Container, Typography, Button, Box, Grid, useMediaQuery } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import me from '../assets/me.png';
import { styled, keyframes } from '@mui/system';
import { Link as ScrollLink } from 'react-scroll';

// Animation for the floating image
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

// Styled components
const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#09090b', /* Zinc 950 */
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: theme.spacing(8),
}));

const Spotlight = styled(Box)(({ theme, color, top, left, right }) => ({
  position: 'absolute',
  width: '500px',
  height: '500px',
  borderRadius: '50%',
  background: color || 'rgba(16, 185, 129, 0.06)',
  filter: 'blur(120px)',
  top: top || 'auto',
  left: left || 'auto',
  right: right || 'auto',
  pointerEvents: 'none',
  zIndex: 0,
  [theme.breakpoints.down('md')]: {
    width: '300px',
    height: '300px',
  },
}));

const HeroImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '24px',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)',
  animation: `${float} 6s ease-in-out infinite`,
  filter: 'grayscale(20%) contrast(1.05) brightness(95%)',
  transition: 'all 0.3s ease',
  zIndex: 2,
  '&:hover': {
    filter: 'grayscale(0%) contrast(1.05) brightness(100%)',
    boxShadow: '0 25px 50px rgba(16, 185, 129, 0.25), 0 0 0 1px rgba(16, 185, 129, 0.3)',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '280px',
    marginTop: theme.spacing(4),
  },
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3.5),
  marginTop: theme.spacing(3),
  borderRadius: '99px',
  backgroundColor: '#10b981',
  color: '#09090b',
  fontWeight: 600,
  fontFamily: "'Fira Code', monospace",
  fontSize: '0.85rem',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)',
  '&:hover': {
    backgroundColor: '#059669',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(16, 185, 129, 0.5)',
  },
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3.5),
  marginTop: theme.spacing(3),
  borderRadius: '99px',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  color: '#f4f4f5',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  fontFamily: "'Fira Code', monospace",
  fontWeight: 600,
  fontSize: '0.85rem',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderColor: '#10b981',
    transform: 'translateY(-2px)',
  },
}));

const GreetingText = styled(Typography)(({ theme }) => ({
  color: '#10b981',
  fontFamily: "'Fira Code', monospace",
  marginBottom: theme.spacing(1.5),
  fontSize: '1rem',
  fontWeight: 600,
  letterSpacing: '0.05em',
}));

const NameText = styled(Typography)(({ theme }) => ({
  color: '#f4f4f5',
  fontWeight: 900,
  lineHeight: 1.05,
  marginBottom: theme.spacing(1),
  fontSize: '3.5rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

const GradientTagline = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  lineHeight: 1.15,
  marginBottom: theme.spacing(3),
  background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  color: '#a1a1aa',
  lineHeight: 1.6,
  fontSize: '1.05rem',
  marginBottom: theme.spacing(4),
  maxWidth: '600px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.95rem',
  }
}));

function Home() {
  const isSmallScreen = useMediaQuery('(max-width:900px)');

  return (
    <HeroContainer id="home">
      <div className="mesh-grid"></div>
      <Spotlight color="rgba(16, 185, 129, 0.05)" top="-10%" left="10%" />
      <Spotlight color="rgba(6, 182, 212, 0.04)" bottom="10%" right="10%" />
      
      <Container maxWidth="lg" sx={{ zIndex: 5, position: 'relative' }}>
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={7}>
            <Box sx={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
              <GreetingText variant="subtitle1">
                Hi, my name is
              </GreetingText>
              <NameText variant="h2">
                Geno A.
              </NameText>
              <GradientTagline variant="h3" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3.2rem' } }}>
                I build high-performance backend systems.
              </GradientTagline>
              <DescriptionText variant="body1" >
                I am a Backend Software Engineer with 2+ years of experience building secure, scalable microservices and REST APIs in Java and Spring Boot. 
                Whether you need robust data pipelines, optimized database queries, or real-time WebSocket integrations, I build the engines that run your applications.
              </DescriptionText>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: isSmallScreen ? 'center' : 'flex-start' }}>
                <ScrollLink to="works" smooth={true} duration={500} offset={-70}>
                  <PrimaryButton variant="contained" endIcon={<EastIcon />}>
                    View My Work
                  </PrimaryButton>
                </ScrollLink>
                <SecondaryButton 
                  variant="outlined" 
                  component="a"
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </SecondaryButton>
              </Box>
            </Box>
          </Grid>
          {!isSmallScreen && (
            <Grid item xs={12} md={5}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <HeroImage
                  src={me}
                  alt="Geno A"
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </HeroContainer>
  );
}

export default Home;