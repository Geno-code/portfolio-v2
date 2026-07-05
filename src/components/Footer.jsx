import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#09090b', /* Zinc 950 */
  padding: theme.spacing(5, 4),
  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
}));

const SocialLink = styled(Link)(({ theme }) => ({
  color: '#a1a1aa',
  margin: theme.spacing(0, 2),
  transition: 'all 0.3s ease',
  display: 'inline-flex',
  alignItems: 'center',
  fontFamily: "'Fira Code', monospace",
  fontSize: '0.85rem',
  textDecoration: 'none',
  '&:hover': {
    color: '#10b981',
    transform: 'translateY(-2px)',
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
        
        <Typography variant="body2" color="#a1a1aa" sx={{ mb: 1 }}>
          Designed & Built by Geno A
        </Typography>
        
        <Typography variant="body2" color="#71717a">
          © {new Date().getFullYear()} All Rights Reserved
        </Typography>
      </Box>
    </FooterContainer>
  );
}

export default Footer;