import React from 'react';
import { Typography, Box, Grid, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 188, 212, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(0, 188, 212, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 188, 212, 0); }
`;

// Styled Components
const AboutContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#0a192f',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2, 2),
}));

const AboutCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#112240',
  borderRadius: '8px',
  padding: theme.spacing(4),
  maxWidth: '900px',
  boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  animation: `${fadeIn} 0.8s ease forwards`,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#ccd6f6',
  fontFamily: "'Fira Code', monospace",
  position: 'relative',
  display: 'inline-block',
  marginBottom: theme.spacing(4),
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: 0,
    width: '70px',
    height: '2px',
    backgroundColor: '#64ffda',
  },
}));

const HighlightText = styled('span')(({ theme }) => ({
  color: '#64ffda',
  fontWeight: 500,
}));

const SkillPill = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  backgroundColor: 'rgba(100, 255, 218, 0.1)',
  color: '#64ffda',
  padding: theme.spacing(0.5, 2),
  borderRadius: '20px',
  margin: theme.spacing(0.5),
  fontSize: '0.8rem',
  fontFamily: "'Fira Code', monospace",
  animation: `${pulse} 2s infinite`,
}));

function About() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const skills = [
    'Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA',
    'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
    'REST APIs', 'Microservices', 'WebSockets', 'Distributed Tracing',
    'React.js', 'Docker', 'Git', 'JUnit / Mockito'
  ];

  return (
    <AboutContainer id="about">
      <AboutCard>
        <SectionTitle variant="h4">
          <HighlightText>01.</HighlightText> About Me
        </SectionTitle>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography color="#8892b0" paragraph sx={{ lineHeight: 1.6 }}>
              Hello! I'm <HighlightText>Geno A.</HighlightText>, a Backend Software Engineer with a B.E. in Electronics & Communication Engineering. I combine strong logical foundations with deep systems knowledge to engineer secure, high-performance backends.
            </Typography>
            
            <Typography color="#8892b0" paragraph sx={{ lineHeight: 1.6 }}>
              Currently, at <HighlightText>Zarthi Pvt Ltd</HighlightText>, I build core backend services for the Third Wave Coffee platform, where I focus on API design, caching structures (Redis), and distributed logging. Previously, at <HighlightText>Techneat Info Solutions</HighlightText>, I standardized code validation rules and built secure document flow modules.
            </Typography>
            
            <Typography color="#8892b0" paragraph sx={{ lineHeight: 1.6 }}>
              My engineering approach prioritizes database query optimizations, performance tuning, and clean architecture principles. I specialize in Java and the Spring Boot ecosystem, while keeping a high level of versatility to integrate cloud and frontend technologies.
            </Typography>
            
            {!isSmallScreen && (
              <Typography color="#8892b0" paragraph sx={{ lineHeight: 1.6 }}>
                Here are a few technologies I've been working with recently:
              </Typography>
            )}
          </Grid>
          
          <Grid item xs={12} md={6}>
            {!isSmallScreen && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: 2, mb: 3 }}>
                {skills.map((skill, index) => (
                  <SkillPill key={index}>{skill}</SkillPill>
                ))}
              </Box>
            )}
            
            <Typography color="#8892b0" paragraph sx={{ lineHeight: 1.6 }}>
              I have hands-on experience with <HighlightText>microservices architecture</HighlightText> and real-time messaging using <HighlightText>WebSockets</HighlightText>. I enjoy solving distributed environment challenges, such as implementing distributed tracing context propagation to coordinate logging across multiple microservices.
            </Typography>
            
            <Typography color="#8892b0" paragraph sx={{ lineHeight: 1.6 }}>
              I am open to both full-time positions and select freelance backend consulting engagements where I can help businesses optimize database performance, secure endpoints, or build customized API integrations.
            </Typography>
            
            {isSmallScreen && (
              <>
                <Typography color="#8892b0" paragraph sx={{ lineHeight: 1.6, mt: 2 }}>
                  Here are a few technologies I've been working with recently:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  {skills.map((skill, index) => (
                    <SkillPill key={index}>{skill}</SkillPill>
                  ))}
                </Box>
              </>
            )}
          </Grid>
        </Grid>
      </AboutCard>
    </AboutContainer>
  );
}

export default About;