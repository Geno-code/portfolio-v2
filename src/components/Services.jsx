import React from 'react';
import { Box, Container, Grid, Typography, Paper, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';
import TerminalIcon from '@mui/icons-material/Terminal';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';

// Floating animation on hover
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

// Styled components matching current theme
const ServicesContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#0a192f',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(8, 2),
}));

const ServiceCard = styled(Paper)(({ theme }) => ({
  backgroundColor: '#112240',
  borderRadius: '8px',
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(100, 255, 218, 0.05)',
  boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: '#64ffda',
    boxShadow: '0 20px 30px -15px rgba(100, 255, 218, 0.15)',
    '& .icon-wrapper': {
      backgroundColor: 'rgba(100, 255, 218, 0.2)',
      color: '#64ffda',
      animation: `${float} 2s ease-in-out infinite`,
    }
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#ccd6f6',
  position: 'relative',
  paddingBottom: '10px',
  marginBottom: theme.spacing(6),
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '2px',
    backgroundColor: '#64ffda',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: 'rgba(100, 255, 218, 0.08)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: '#64ffda',
  transition: 'all 0.3s ease',
}));

const ServiceTitle = styled(Typography)(({ theme }) => ({
  color: '#ccd6f6',
  fontWeight: 600,
  fontFamily: "'Fira Code', monospace",
  marginBottom: theme.spacing(2),
}));

const ServiceDescription = styled(Typography)(({ theme }) => ({
  color: '#8892b0',
  lineHeight: 1.6,
  fontSize: '0.95rem',
}));

const HighlightText = styled('span')(({ theme }) => ({
  color: '#64ffda',
}));

const servicesList = [
  {
    title: "Scalable API Design",
    description: "Designing RESTful and real-time APIs using Java and Spring Boot. Clean separation of concerns, OpenAPI/Swagger specifications, and integration of external payment (Razorpay/Stripe) or messaging gateways.",
    icon: <TerminalIcon sx={{ fontSize: '2rem' }} />
  },
  {
    title: "Auth & Security Systems",
    description: "Securing server engines and API gateways. Implementing stateless authentication via JWTs, OAuth2 social logins, secure password hashing, and granular Role-Based Access Control (RBAC) to ensure customer data integrity.",
    icon: <SecurityIcon sx={{ fontSize: '2rem' }} />
  },
  {
    title: "Database Tuning",
    description: "Relational modeling (MySQL, PostgreSQL) and document stores (MongoDB). Performance optimizations, writing custom query filters using JPA Specifications, cache-on-miss strategies (Redis), and transaction isolation tuning.",
    icon: <StorageIcon sx={{ fontSize: '2rem' }} />
  },
  {
    title: "Cloud & DevOps",
    description: "Containerizing backend environments using Docker. Setting up modular deployment configurations, orchestrating multi-service environments with Docker Compose, and deploying projects onto cloud infrastructures (AWS S3, EC2).",
    icon: <CloudIcon sx={{ fontSize: '2rem' }} />
  }
];

function Services() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <ServicesContainer id="services">
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 6 }}>
          <SectionTitle variant={isSmallScreen ? 'h4' : 'h3'} align="center">
            <HighlightText>02.</HighlightText> Freelance & Consulting Services
          </SectionTitle>
          <Typography 
            color='#8892b0' 
            align="center" 
            variant={isSmallScreen ? 'body1' : 'h6'}
            sx={{ maxWidth: '700px', lineHeight: 1.6 }}
          >
            I architect robust backends and API solutions. Here is how I can help bring your business systems online and optimize them for high traffic:
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {servicesList.map((service, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <ServiceCard elevation={0}>
                <IconWrapper className="icon-wrapper">
                  {service.icon}
                </IconWrapper>
                <ServiceTitle variant="h5">
                  {service.title}
                </ServiceTitle>
                <ServiceDescription variant="body2">
                  {service.description}
                </ServiceDescription>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ServicesContainer>
  );
}

export default Services;
