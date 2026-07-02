import React from 'react';
import { Box, Paper, Typography, Grid, Button, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';
import PublicIcon from '@mui/icons-material/Public';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CodeIcon from '@mui/icons-material/Code';
import TranslateIcon from '@mui/icons-material/Translate';
import BugReportIcon from '@mui/icons-material/BugReport';
import ChatIcon from '@mui/icons-material/Chat';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
// import GroupWorkIcon from '@mui/icons-material/GroupWork';
// import WorkIcon from '@mui/icons-material/Work';
// import EmailIcon from '@mui/icons-material/Email';
// import EventIcon from '@mui/icons-material/Event';
// import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';


// Animation for project cards
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

// Styled components
const ProjectCard = styled(Paper)(({ theme }) => ({
  position: 'relative',
  minHeight: '380px',
  height: '100%',
  overflow: 'hidden',
  borderRadius: '12px',
  boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
  transition: 'all 0.3s ease',
  backgroundColor: '#112240',
  margin: theme.spacing(2),
  '&:hover': {
    transform: 'translateY(-7px)',
    boxShadow: '0 20px 30px -15px rgba(100, 255, 218, 0.3)',
    animation: `${float} 3s ease-in-out infinite`,
    '& .project-overlay': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

const ProjectOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(10, 25, 47, 0.95)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing({ xs: 2, sm: 4 }),
  opacity: 0,
  transform: 'translateY(10px)',
  transition: 'all 0.3s ease',
  borderRadius: '12px',
}));

const ProjectButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1, 2.5),
  borderRadius: '4px',
  minWidth: '120px',
  backgroundColor: 'transparent',
  color: '#64ffda',
  border: '1px solid #64ffda',
  fontFamily: "'Fira Code', monospace",
  fontSize: '0.9rem',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    transform: 'translateY(-2px)',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#ccd6f6',
  position: 'relative',
  paddingBottom: theme.spacing(1),
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

const ProjectIconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: 'rgba(100, 255, 218, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: '#64ffda',
  fontSize: '2.5rem',
}));

const projects = [
  // {
  //   projectName: "Event Booking System",
  //   description: "Web application for event creation, ticket booking, and refund processing with separate user and organizer roles.",
  //   demo: "#",
  //   code: "#",
  //   icon: <EventIcon fontSize="large" />,
  // },
  {
    projectName: "Multiplayer 2D Jump-and-Shoot Game",
    description: "Multiplayer game using React, Spring Boot, and WebSocket, with player movement, jumping, and shooting mechanics.",
    // demo: "#",
    code: "https://github.com/Geno-code/game-api.git",
    icon: <SportsEsportsIcon fontSize="large" />,
  },
  // {
  //   projectName: "Live Collaboration Tool",
  //   description: "Real-time document and whiteboard collaboration platform using Spring Boot WebSocket and Slate.js.",
  //   demo: "#",
  //   code: "#",
  //   icon: <GroupWorkIcon fontSize="large" />,
  // },
  {
    projectName: "Chat Application",
    description: "Real-time chat app using Spring Boot WebSocket and React.js with room management and messaging.",
    // demo: "#",
    code: "https://github.com/Geno-code/chatapp-api.git",
    icon: <ChatIcon fontSize="large" />,
  },
  {
    projectName: "Bug Tracker System",
    description: "Full-stack bug tracking system with role-based access control using Spring Boot, and PostgreSQL.",
    // demo: "#",
    code: "https://github.com/Geno-code/bug-tracker-api.git",
    icon: <BugReportIcon fontSize="large" />,
  },
  // {
  //   projectName: "Job Portal",
  //   description: "A Laravel-based API with Filament admin panel and React frontend, featuring resume upload and employer dashboards.",
  //   demo: "#",
  //   code: "#",
  //   icon: <WorkIcon fontSize="large" />,
  // },
  // {
  //   projectName: "Email Client Desktop App",
  //   description: "A JavaFX-based email client for sending, receiving, and managing emails in a desktop environment.",
  //   demo: "#",
  //   code: "#",
  //   icon: <EmailIcon fontSize="large" />,
  // },
  {
    projectName: "Language Translator App",
    description: "A web app for translating between multiple languages using external APIs, built with React and python.",
    // demo: "#",
    code: "https://github.com/Geno-code/language_translator_project.git",
    icon: <TranslateIcon fontSize="large" />,
  },
  // {
  //   projectName: "Vehicle Tracking System",
  //   description: "Real-time vehicle tracking solution using GPS data, integrated with a web-based map dashboard.",
  //   demo: "#",
  //   code: "#",
  //   icon: <DirectionsCarIcon fontSize="large" />,
  // },
  {
    projectName: "Portfolio Website",
    description: "A responsive personal portfolio website built with React and Material-UI.",
    // demo: "#",
    code: "https://github.com/Geno-code/portfolio-v2.git",
    icon: <CodeIcon fontSize="large" />,
  },
  {
    projectName: "Smart Streetlight Monitoring",
    description: "IoT system to detect faulty streetlights and display their status and location on a web dashboard.",
    // demo: "#",
    code: "https://github.com/Geno-code/StreetLightFaultDetection.git",
    icon: <LightbulbIcon fontSize="large" />,
  },
  {
    projectName: "Online Voting System",
    description: "A secure web application for conducting elections with admin controls to manage users, voters, and election timing.",
    // demo: "#",
    code: "https://github.com/Geno-code/voterEngineAPI.git",
    icon: <HowToVoteIcon fontSize="large" />,
  },
];

function Works() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box
      id="works"
      sx={{
        backgroundColor: "#0a192f",
        minHeight: '100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 2,
        px: 2
      }}
    >
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: '1200px',
        width: '100%'
      }}>
        <Box sx={{
          display: "flex",
          alignItems: 'center',
          justifyContent: "center",
          flexDirection: 'column',
          mb: 6
        }}>
          <SectionTitle variant={isSmallScreen ? 'h4' : 'h3'}>
            <span style={{ color: '#64ffda' }}>03.</span> Featured Projects
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
            Here are some projects I've worked on. Click to view details.
          </Typography>
        </Box>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            animation: `${fadeIn} 0.8s ease forwards`
          }}
        >
          {projects.map((project, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
            >
              <ProjectCard elevation={3}>
                <Box sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: { xs: 2.5, sm: 3 },
                  background: 'linear-gradient(135deg, #112240 0%, #0a192f 100%)'
                }}>
                  <ProjectIconWrapper>
                    {project.icon}
                  </ProjectIconWrapper>
                  <Typography
                    color='#64ffda'
                    variant='h5'
                    align='center'
                    sx={{
                      fontFamily: "'Fira Code', monospace",
                      fontWeight: 600,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      mb: 2
                    }}
                  >
                    {project.projectName}
                  </Typography>
                </Box>

                <ProjectOverlay className="project-overlay">
                  <ProjectIconWrapper>
                    {project.icon}
                  </ProjectIconWrapper>
                  <Typography
                    color='#64ffda'
                    variant='h5'
                    align='center'
                    sx={{
                      fontFamily: "'Fira Code', monospace",
                      fontWeight: 600,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      mb: 2
                    }}
                  >
                    {project.projectName}
                  </Typography>
                  <Typography
                    color='#a8b2d1'
                    variant='body1'
                    align='center'
                    sx={{
                      mb: 3,
                      lineHeight: 1.6
                    }}
                  >
                    {project.description}
                  </Typography>
                  {(project.demo || project.code) && (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                      {project.demo && (
                        <ProjectButton
                          variant="outlined"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<PublicIcon />}
                        >
                          Live Demo
                        </ProjectButton>
                      )}
                      {project.code && (
                        <ProjectButton
                          variant="outlined"
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<CodeIcon />}
                        >
                          View Code
                        </ProjectButton>
                      )}
                    </Box>
                  )}

                </ProjectOverlay>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Works;