import React from 'react';
import { Box, Paper, Typography, Grid, Container, useMediaQuery } from '@mui/material';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/system';

// Float animation on hover
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-4px); }
  100% { transform: translateY(0px); }
`;

// Styled components
const SkillsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#09090b', /* Zinc 950 */
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(8, 2),
  position: 'relative',
  overflow: 'hidden',
}));

const Spotlight = styled(Box)(({ theme, color, top, left, right }) => ({
  position: 'absolute',
  width: '500px',
  height: '500px',
  borderRadius: '50%',
  background: color || 'rgba(16, 185, 129, 0.04)',
  filter: 'blur(120px)',
  top: top || 'auto',
  left: left || 'auto',
  right: right || 'auto',
  pointerEvents: 'none',
  zIndex: 0,
}));

const CategoryCard = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(24, 24, 27, 0.45)', /* Glassmorphic Zinc */
  borderRadius: '16px',
  padding: theme.spacing(4),
  height: '100%',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(12px)',
  transition: 'all 0.3s ease',
  zIndex: 2,
  '&:hover': {
    borderColor: 'rgba(16, 185, 129, 0.35)',
    boxShadow: '0 25px 40px rgba(16, 185, 129, 0.1)',
    transform: 'translateY(-4px)',
  },
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  color: '#f4f4f5',
  fontFamily: "'Fira Code', monospace",
  fontWeight: 600,
  fontSize: '1.1rem',
  marginBottom: theme.spacing(3),
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  paddingBottom: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const SkillPill = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  color: '#d4d4d8', /* Zinc 300 */
  padding: theme.spacing(0.6, 1.8),
  borderRadius: '99px',
  margin: theme.spacing(0.6),
  fontSize: '0.85rem',
  fontFamily: "'Fira Code', monospace",
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: 'rgba(16, 185, 129, 0.08)',
    borderColor: '#10b981',
    color: '#10b981',
    animation: `${float} 2s ease-in-out infinite`,
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#f4f4f5',
  position: 'relative',
  paddingBottom: '10px',
  fontFamily: "'Fira Code', monospace",
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '2px',
    backgroundColor: '#10b981',
  },
}));

const HighlightText = styled('span')(({ theme }) => ({
  color: '#10b981',
}));

const categorizedSkills = [
  {
    category: "Core JVM & Frameworks",
    count: "01",
    items: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "Microservices", "REST APIs"]
  },
  {
    category: "Databases & Caching",
    count: "02",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "WebSockets"]
  },
  {
    category: "DevOps & Cloud Integration",
    count: "03",
    items: ["Docker", "AWS S3", "Git / GitHub", "Maven", "CI/CD basics"]
  },
  {
    category: "Testing & Architecture",
    count: "04",
    items: ["JUnit", "Mockito", "Postman", "JWT Auth", "Distributed Tracing", "System Design"]
  }
];

function Skills() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <SkillsContainer id="skills">
      <div className="mesh-grid"></div>
      <Spotlight color="rgba(16, 185, 129, 0.04)" top="20%" left="-10%" />
      <Spotlight color="rgba(6, 182, 212, 0.03)" bottom="20%" right="-10%" />

      <Container maxWidth="lg" sx={{ zIndex: 5, position: 'relative' }}>
        <Box sx={{ 
          display: "flex", 
          alignItems: 'center', 
          justifyContent: "center",
          flexDirection: 'column',
          mb: 6
        }}>
          <SectionTitle variant={isSmallScreen ? 'h4' : 'h3'}>
            <HighlightText>02.</HighlightText> Technical Skillset
          </SectionTitle>
          <Typography 
            color='#a1a1aa' 
            align="center" 
            variant={isSmallScreen ? 'body1' : 'h6'}
            sx={{ 
              mt: 3,
              maxWidth: '700px',
              lineHeight: 1.6
            }}
          >
            I structure my solutions on robust software engineering concepts and reliable tools. Here is my development stack:
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {categorizedSkills.map((cat, idx) => (
            <Grid key={idx} item xs={12} md={6}>
              <CategoryCard elevation={0}>
                <CategoryTitle variant="h6">
                  <span>{cat.category}</span>
                  <HighlightText sx={{ fontSize: '0.9rem' }}>{"//" + cat.count}</HighlightText>
                </CategoryTitle>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', m: -0.6 }}>
                  {cat.items.map((skill, index) => (
                    <SkillPill key={index}>
                      {skill}
                    </SkillPill>
                  ))}
                </Box>
              </CategoryCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SkillsContainer>
  );
}

export default Skills;