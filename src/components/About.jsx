import React, { useState } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
  100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
`;

// Styled Components
const AboutContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#09090b', /* Zinc 950 */
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(8, 2),
  position: 'relative',
}));

const AboutCard = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(24, 24, 27, 0.45)', /* Glassmorphic Zinc */
  border: '1px solid rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(12px)',
  borderRadius: '16px',
  padding: theme.spacing(5),
  maxWidth: '1100px',
  width: '100%',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: 'rgba(16, 185, 129, 0.3)',
    boxShadow: '0 25px 50px rgba(16, 185, 129, 0.1)',
  },
  animation: `${fadeIn} 0.8s ease forwards`,
  zIndex: 5,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#f4f4f5',
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
    backgroundColor: '#10b981',
  },
}));

const HighlightText = styled('span')(({ theme }) => ({
  color: '#10b981',
  fontWeight: 500,
}));

const SkillPill = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  backgroundColor: 'rgba(16, 185, 129, 0.08)',
  border: '1px solid rgba(16, 185, 129, 0.2)',
  color: '#10b981',
  padding: theme.spacing(0.5, 2),
  borderRadius: '20px',
  margin: theme.spacing(0.5),
  fontSize: '0.8rem',
  fontFamily: "'Fira Code', monospace",
  animation: `${pulse} 2.5s infinite`,
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    borderColor: '#10b981',
    transform: 'translateY(-2px)',
  }
}));

// Terminal Widget Mockup
const TerminalWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#09090b',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.6)',
  fontFamily: "'Fira Code', monospace",
  overflow: 'hidden',
  width: '100%',
  marginTop: theme.spacing(2),
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: 'rgba(16, 185, 129, 0.3)',
  }
}));

const TerminalHeader = styled(Box)(({ theme }) => ({
  backgroundColor: '#18181b',
  padding: theme.spacing(1.5, 2),
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  justifyContent: 'space-between',
}));

const TerminalTabs = styled(Box)({
  display: 'flex',
  gap: '8px',
});

const TerminalTab = styled(Box)(({ active }) => ({
  fontSize: '0.8rem',
  color: active ? '#10b981' : '#a1a1aa',
  backgroundColor: active ? '#09090b' : 'transparent',
  padding: '6px 14px',
  borderRadius: '6px 6px 0 0',
  border: active ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid transparent',
  borderBottom: active ? '1px solid #09090b' : 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    color: '#10b981',
  }
}));

const TerminalDot = styled(Box)(({ color }) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: color,
  marginRight: '6px',
  display: 'inline-block',
}));

const TerminalBody = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  fontSize: '0.85rem',
  lineHeight: 1.65,
  color: '#e4e4e7',
  minHeight: '240px',
  overflowX: 'auto',
}));

function About() {
  const [activeTab, setActiveTab] = useState('java');

  const skills = [
    'Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA',
    'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
    'REST APIs', 'Microservices', 'WebSockets', 'Distributed Tracing',
    'React.js', 'Docker', 'Git', 'JUnit / Mockito'
  ];

  const renderTerminalContent = () => {
    switch (activeTab) {
      case 'java':
        return (
          <Box>
            <span style={{ color: '#f43f5e' }}>@RestController</span><br />
            <span style={{ color: '#f43f5e' }}>@RequestMapping</span>(<span style={{ color: '#0ea5e9' }}>"/api/v1/menu"</span>)<br />
            <span style={{ color: '#fbbf24' }}>public class</span> <span style={{ color: '#10b981' }}>MenuController</span> &#123;<br />
            &nbsp;&nbsp;<span style={{ color: '#f43f5e' }}>@GetMapping</span><br />
            &nbsp;&nbsp;<span style={{ color: '#fbbf24' }}>public</span> ResponseEntity&lt;List&lt;Item&gt;&gt; <span style={{ color: '#38bdf8' }}>getMenuItems</span>() &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#71717a', fontStyle: 'italic' }}>{"// Caching optimization via Redis cache-on-miss"}</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;List&lt;Item&gt; items = cacheService.getOrSync(<span style={{ color: '#0ea5e9' }}>"menu:all"</span>, () -&gt; db.findAll());<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#fbbf24' }}>return</span> ResponseEntity.ok(items);<br />
            &nbsp;&nbsp;&#125;<br />
            &#125;
          </Box>
        );
      case 'sql':
        return (
          <Box>
            <span style={{ color: '#fbbf24' }}>CREATE INDEX</span> idx_menu_outlet_status<br />
            <span style={{ color: '#fbbf24' }}>ON</span> menu_items (outlet_id, status);<br /><br />
            <span style={{ color: '#71717a', fontStyle: 'italic' }}>{"-- EXPLAIN ANALYZE on menu query:"}</span><br />
            <span style={{ color: '#10b981' }}>Index Scan using idx_menu_outlet_status...</span><br />
            Planning Time: <span style={{ color: '#06b6d4' }}>0.078 ms</span><br />
            Execution Time: <span style={{ color: '#06b6d4' }}>1.120 ms</span> <span style={{ color: '#10b981' }}>(~40% load reduction)</span>
          </Box>
        );
      case 'sh':
        return (
          <Box>
            <span style={{ color: '#71717a' }}>$ docker-compose up -d --build</span><br />
            <span style={{ color: '#10b981' }}>[✔] Container redis-cache   Running</span><br />
            <span style={{ color: '#10b981' }}>[✔] Container postgres-db   Running</span><br />
            <span style={{ color: '#10b981' }}>[✔] Container jvm-service   Started [Port 8080]</span><br /><br />
            <span style={{ color: '#71717a' }}>$ mvn test -Dtest=MenuControllerTest</span><br />
            <span style={{ color: '#38bdf8' }}>Running com.geno.menu.MenuControllerTest</span><br />
            <span style={{ color: '#10b981' }}>Tests run: 14, Failures: 0, Errors: 0, Time elapsed: 1.82s</span><br />
            <span style={{ color: '#10b981', fontWeight: 'bold' }}>BUILD SUCCESS</span>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <AboutContainer id="about">
      <AboutCard>
        <SectionTitle variant="h4">
          <HighlightText>01.</HighlightText> About Me
        </SectionTitle>
        
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography color="#a1a1aa" paragraph sx={{ lineHeight: 1.7, fontSize: '1.02rem' }}>
              Hello! I'm <HighlightText>Geno A.</HighlightText>, a Backend Software Engineer with a B.E. in Electronics & Communication Engineering. I combine strong logical foundations with deep systems knowledge to engineer secure, high-performance, and scalable backends.
            </Typography>
            
            <Typography color="#a1a1aa" paragraph sx={{ lineHeight: 1.7, fontSize: '1.02rem' }}>
              My expertise lies in designing robust backend architectures, optimizing API performance, and implementing advanced caching strategies like <HighlightText>Redis</HighlightText> to handle high-traffic systems. I have a proven track record of standardizing code validation workflows, building secure document processing systems, and orchestrating distributed logging for complex applications.
            </Typography>
            
            <Typography color="#a1a1aa" paragraph sx={{ lineHeight: 1.7, fontSize: '1.02rem' }}>
              I specialize in Java and the Spring Boot ecosystem, focusing on clean code, database query optimization, and microservices architecture. I thrive on solving complex technical challenges while maintaining the flexibility to integrate modern cloud services and frontend solutions.
            </Typography>

            <Typography color="#f4f4f5" sx={{ mt: 3, mb: 2, fontFamily: "'Fira Code', monospace", fontSize: '0.9rem', fontWeight: 600 }}>
              Recent Technologies:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {skills.map((skill, index) => (
                <SkillPill key={index}>{skill}</SkillPill>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 2 } }}>
              <Typography color="#a1a1aa" paragraph sx={{ lineHeight: 1.7, fontSize: '1.02rem', mb: 3 }}>
                I have hands-on experience with <HighlightText>microservices architecture</HighlightText> and real-time messaging using <HighlightText>WebSockets</HighlightText>. I enjoy solving distributed environment challenges, such as implementing distributed tracing context propagation to coordinate logging across multiple microservices.
              </Typography>
              
              <TerminalWrapper>
                <TerminalHeader>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TerminalDot color="#ef4444" />
                    <TerminalDot color="#eab308" />
                    <TerminalDot color="#22c55e" />
                  </Box>
                  <TerminalTabs>
                    <TerminalTab active={activeTab === 'java'} onClick={() => setActiveTab('java')}>
                      api.java
                    </TerminalTab>
                    <TerminalTab active={activeTab === 'sql'} onClick={() => setActiveTab('sql')}>
                      explain.sql
                    </TerminalTab>
                    <TerminalTab active={activeTab === 'sh'} onClick={() => setActiveTab('sh')}>
                      docker.sh
                    </TerminalTab>
                  </TerminalTabs>
                </TerminalHeader>
                <TerminalBody>
                  {renderTerminalContent()}
                </TerminalBody>
              </TerminalWrapper>
            </Box>
          </Grid>
        </Grid>
      </AboutCard>
    </AboutContainer>
  );
}

export default About;