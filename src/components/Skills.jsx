import React from 'react';
import { Box, Paper, Typography, Grid, useMediaQuery } from '@mui/material';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/system';

// Animation for skill items
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

// Styled components
const SkillItem = styled(Paper)(({ theme }) => ({
  backgroundColor: '#112240',
  borderRadius: '4px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(100, 255, 218, 0.1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: '#64ffda',
    boxShadow: '0 5px 15px rgba(100, 255, 218, 0.2)',
    animation: `${float} 2s ease-in-out infinite`,
  },
}));

const SkillText = styled(Typography)(({ theme }) => ({
  color: '#ccd6f6',
  fontFamily: "'Fira Code', monospace",
  fontWeight: 500,
  fontSize: '0.9rem',
  textAlign: 'center',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#ccd6f6',
  position: 'relative',
  paddingBottom: '10px',
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

const skills = [
  "Java", "Spring Boot", "Microservices", "REST APIs",
  "Spring Security", "Spring Data JPA", "SQL", "PostgreSQL",
  "MySQL", "MongoDB", "Redis", "WebSockets",
  "Docker", "AWS S3", "Git / GitHub", "Maven",
  "JUnit", "Mockito", "Postman", "React.js",
  "JavaScript", "JWT / Auth", "Distributed Tracing", "System Design"
];

function Skills() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box 
      id="skills"
      sx={{ 
        backgroundColor: "#0a192f", 
        minHeight: '100vh',
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        // py: 8,
        px: 2
      }}
    >
      <Box sx={{ 
        display: "flex", 
        flexDirection: "column",
        maxWidth: '1000px',
        width: '100%'
      }}>
        <Box sx={{ 
          display: "flex", 
          alignItems: 'center', 
          justifyContent: "center",
          flexDirection: 'column',
          mb: 4
        }}>
          <SectionTitle variant={isSmallScreen ? 'h4' : 'h3'}>
            Skills & Technologies
          </SectionTitle>
          <Typography 
            color='#8892b0' 
            align="center" 
            variant={isSmallScreen ? 'body1' : 'h6'}
            sx={{ 
              mt: 3,
              maxWidth: '700px',
              lineHeight: 1.6
            }}
          >
            I enjoy diving into and learning new things. Here's a list of technologies I've worked with
          </Typography>
        </Box>
        
        <Grid 
          container 
          spacing={{ xs: 1.5, sm: 2 }} 
          sx={{
            justifyContent: 'center'
          }}
        >
          {skills.map((skill, index) => (
            <Grid 
              key={index} 
              item 
              xs={6} 
              sm={4} 
              md={3}
            >
              <SkillItem elevation={3}>
                <SkillText>
                  {skill}
                </SkillText>
              </SkillItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Skills;