import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#0a192f',
  padding: theme.spacing(4),
  borderTop: '1px solid rgba(100, 255, 218, 0.1)',
}));

const SocialLink = styled(Link)(({ theme }) => ({
  color: '#8892b0',
  margin: theme.spacing(0, 1.5),
  transition: 'all 0.3s ease',
  display: 'inline-flex',
  alignItems: 'center',
  '&:hover': {
    color: '#64ffda',
    transform: 'translateY(-3px)',
  },
}));

function Footer() {
  return (
    <FooterContainer component="footer">
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <Box sx={{ mb: 2 }}>
          <SocialLink href="https://github.com/Geno-code" target="_blank" rel="noopener">
            <GitHubIcon sx={{ mr: 1 }} /> GitHub
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/geno07/" target="_blank" rel="noopener">
            <LinkedInIcon sx={{ mr: 1 }} /> LinkedIn
          </SocialLink>
          <SocialLink href="mailto:geno.dev7@gmail.com">
            <EmailIcon sx={{ mr: 1 }} /> Email
          </SocialLink>
        </Box>
        
        <Typography variant="body2" color="#8892b0" sx={{ mb: 1 }}>
          Designed & Built by Geno A
        </Typography>
        
        <Typography variant="body2" color="#8892b0">
          © {new Date().getFullYear()} All Rights Reserved
        </Typography>
      </Box>
    </FooterContainer>
  );
}

export default Footer;