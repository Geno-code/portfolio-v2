import React from 'react';
import { Box, Paper, Typography, Grid, Button, Container, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
// import HowToVoteIcon from '@mui/icons-material/HowToVote';
// import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CodeIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';
import ChatIcon from '@mui/icons-material/Chat';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PsychologyIcon from '@mui/icons-material/Psychology';

// Styled components
const WorksContainer = styled(Box)(({ theme }) => ({
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

const ProjectCard = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(24, 24, 27, 0.45)', /* Glassmorphic Zinc */
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(12px)',
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'all 0.3s ease',
  zIndex: 2,
  '&:hover': {
    borderColor: 'rgba(16, 185, 129, 0.35)',
    boxShadow: '0 25px 40px rgba(16, 185, 129, 0.1)',
    transform: 'translateY(-5px)',
    '& .icon-wrapper': {
      backgroundColor: 'rgba(16, 185, 129, 0.15)',
      color: '#10b981',
    }
  },
}));

const ProjectHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  backgroundColor: 'rgba(16, 185, 129, 0.06)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#10b981',
  transition: 'all 0.3s ease',
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  color: '#f4f4f5',
  fontFamily: "'Fira Code', monospace",
  fontWeight: 600,
  fontSize: '1.2rem',
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: '#a1a1aa',
  lineHeight: 1.6,
  fontSize: '0.92rem',
  marginBottom: theme.spacing(3),
}));

const TechTag = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  fontSize: '0.75rem',
  fontFamily: "'Fira Code', monospace",
  color: '#a1a1aa',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  padding: '3px 10px',
  borderRadius: '4px',
  margin: '2px',
}));

const ProjectButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 2.5),
  borderRadius: '99px',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  color: '#f4f4f5',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  fontFamily: "'Fira Code', monospace",
  fontSize: '0.8rem',
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.3s ease',
  marginTop: theme.spacing(3),
  '&:hover': {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderColor: '#10b981',
    color: '#10b981',
    transform: 'translateY(-2px)',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#f4f4f5',
  position: 'relative',
  paddingBottom: theme.spacing(1),
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

const projects = [
  {
    projectName: "AI Resume Analyzer & Assistant",
    description: "A production-ready RESTful backend using Java 21, Spring Boot, and Spring AI. Implements a pgvector RAG pipeline for natural language Q&A over resume data, parses PDFs using Apache PDFBox, and maps LLM outputs directly to Java DTOs.",
    code: "https://github.com/Geno-code/AI-Resume-Analyzer.git",
    icon: <PsychologyIcon fontSize="medium" />,
    tags: ["Java 21", "Spring Boot", "Spring AI", "pgvector", "PostgreSQL", "Mistral AI", "PDFBox"]
  },
  {
    projectName: "Multiplayer 2D Game Backend",
    description: "A real-time, low-latency multiplayer game backend using Spring Boot WebSockets and STOMP. Managed concurrency using thread-safe state engines (ConcurrentHashMap) and implemented server-side location validation checks.",
    code: "https://github.com/Geno-code/two-player-game.git",
    icon: <SportsEsportsIcon fontSize="medium" />,
    tags: ["Java", "Spring Boot", "WebSockets", "STOMP", "Concurrency"]
  },
  {
    projectName: "Enterprise Bug Tracker API",
    description: "A secure issue tracker featuring dynamic Role-Based Access Control (RBAC) via Spring Security. Optimized PostgreSQL queries using database indexing on lookup keys, securing user data and reducing API latencies.",
    code: "https://github.com/Geno-code/bug-tracker-api.git",
    icon: <BugReportIcon fontSize="medium" />,
    tags: ["Java", "Spring Boot", "Spring Security", "RBAC", "PostgreSQL"]
  },
  {
    projectName: "WebSocket Chat Service",
    description: "A real-time chat service engine implementing active room management and messaging persistence. Built using Spring Boot WebSockets and STOMP to ensure immediate event tracking and low-latency client delivery.",
    code: "https://github.com/Geno-code/chat-app.git",
    icon: <ChatIcon fontSize="medium" />,
    tags: ["Java", "Spring Boot", "WebSockets", "STOMP", "React.js"]
  }
  // {
  //   projectName: "Secure Election Engine",
  //   description: "A transaction-consistent secure election engine. Implemented database level validators in Spring Data JPA to guarantee transaction integrity, preventing double-ballots and maintaining strict election timelines.",
  //   code: "https://github.com/Geno-code/voterEngineAPI.git",
  //   icon: <HowToVoteIcon fontSize="medium" />,
  //   tags: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Transactions"]
  // },
  // {
  //   projectName: "Streetlight Telemetry Monitor",
  //   description: "An IoT monitoring service parsing fault-status and GPS tracking data payloads from sensor nodes, persisting diagnostic alarms and rendering coordinates dynamically on web-based maps.",
  //   code: "https://github.com/Geno-code/StreetLightFaultDetection.git",
  //   icon: <LightbulbIcon fontSize="medium" />,
  //   tags: ["Java", "Spring Boot", "IoT Telemetry", "GPS Map Integration"]
  // }
];

function Works() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <WorksContainer id="works">
      <div className="mesh-grid"></div>
      <Spotlight color="rgba(16, 185, 129, 0.04)" top="-10%" right="10%" />
      <Spotlight color="rgba(6, 182, 212, 0.03)" bottom="10%" left="10%" />

      <Container maxWidth="lg" sx={{ zIndex: 5, position: 'relative' }}>
        <Box sx={{
          display: "flex",
          alignItems: 'center',
          justifyContent: "center",
          flexDirection: 'column',
          mb: 6
        }}>
          <SectionTitle variant={isSmallScreen ? 'h4' : 'h3'}>
            <HighlightText>03.</HighlightText> Featured Projects
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
            A curated showcase of backend software components. Click to inspect source code and architecture.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard elevation={0}>
                <Box>
                  <ProjectHeader>
                    <IconWrapper className="icon-wrapper">
                      {project.icon}
                    </IconWrapper>
                    <ProjectTitle variant="h5">
                      {project.projectName}
                    </ProjectTitle>
                  </ProjectHeader>
                  <ProjectDescription variant="body2">
                    {project.description}
                  </ProjectDescription>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', m: -0.25 }}>
                    {project.tags.map((tag, tagIdx) => (
                      <TechTag key={tagIdx}>
                        {tag}
                      </TechTag>
                    ))}
                  </Box>
                </Box>

                <Box>
                  {project.code && (
                    <ProjectButton
                      variant="outlined"
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<CodeIcon />}
                      fullWidth
                    >
                      View Source Code
                    </ProjectButton>
                  )}
                </Box>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </WorksContainer>
  );
}

export default Works;