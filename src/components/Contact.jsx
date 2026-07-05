import React from 'react';
import { Box, Typography, TextField, Button, Grid, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import emailjs from 'emailjs-com';
import { useState, useRef } from 'react';

const ContactContainer = styled(Box)(({ theme }) => ({
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
  width: '450px',
  height: '450px',
  borderRadius: '50%',
  background: color || 'rgba(16, 185, 129, 0.04)',
  filter: 'blur(120px)',
  top: top || 'auto',
  left: left || 'auto',
  right: right || 'auto',
  pointerEvents: 'none',
  zIndex: 0,
}));

const ContactCard = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(24, 24, 27, 0.45)', /* Glassmorphic Zinc */
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(12px)',
  padding: theme.spacing(5),
  maxWidth: '1000px',
  width: '100%',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
  transition: 'all 0.3s ease',
  zIndex: 2,
  '&:hover': {
    borderColor: 'rgba(16, 185, 129, 0.35)',
    boxShadow: '0 25px 50px rgba(16, 185, 129, 0.1)',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#f4f4f5',
  position: 'relative',
  paddingBottom: theme.spacing(1.5),
  fontFamily: "'Fira Code', monospace",
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '70px',
    height: '2px',
    backgroundColor: '#10b981',
  },
}));

const HighlightText = styled('span')(({ theme }) => ({
  color: '#10b981',
}));

const ContactButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  marginTop: theme.spacing(3),
  borderRadius: '99px',
  backgroundColor: '#10b981',
  color: '#09090b',
  fontWeight: 600,
  border: 'none',
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
  '&:disabled': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    color: '#71717a',
  }
}));

const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  color: '#a1a1aa',
}));

const SocialButton = styled(Button)(({ theme }) => ({
  color: '#a1a1aa',
  minWidth: 0,
  padding: theme.spacing(1),
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#10b981',
    backgroundColor: 'rgba(16, 185, 129, 0.08)',
    borderColor: '#10b981',
    transform: 'translateY(-3px)',
  },
}));

function Contact() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_xzoj18b',
      'template_8gynsjd',
      formRef.current,
      'pjEHkvj-_7fZxsmZQ'
    )
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setSubmitStatus('error');
      })
      .finally(() => setIsSubmitting(false));
  };

  const fieldStyles = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '10px',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(16, 185, 129, 0.5)',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#10b981',
      },
    },
  };

  return (
    <ContactContainer id="contact">
      <div className="mesh-grid"></div>
      <Spotlight color="rgba(16, 185, 129, 0.04)" top="10%" right="-10%" />
      
      <ContactCard>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6} sx={{ zIndex: 5 }}>
            <SectionTitle variant="h4">
              <HighlightText>04.</HighlightText> Get In Touch
            </SectionTitle>
            <Typography color="#a1a1aa" paragraph sx={{ mt: 3, lineHeight: 1.7, fontSize: '1rem' }}>
              I'm actively searching for full-time Backend Developer and Java Backend Engineer positions. If you have an opening on your engineering team, or just want to connect, feel free to drop a message!
            </Typography>

            <form ref={formRef} onSubmit={handleSubmit} style={{ marginTop: '24px' }}>
              <TextField
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                label="Name"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ style: { color: '#a1a1aa' } }}
                InputProps={{ style: { color: '#f4f4f5' } }}
                sx={fieldStyles}
              />
              <TextField
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
                label="Email"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ style: { color: '#a1a1aa' } }}
                InputProps={{ style: { color: '#f4f4f5' } }}
                sx={fieldStyles}
              />
              <TextField
                fullWidth
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                InputLabelProps={{ style: { color: '#a1a1aa' } }}
                InputProps={{ style: { color: '#f4f4f5' } }}
                sx={fieldStyles}
              />
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <ContactButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </ContactButton>
                {submitStatus === 'success' && (
                  <Typography color="#10b981" sx={{ mt: 2, fontFamily: "'Fira Code', monospace" }}>
                    Message sent successfully!
                  </Typography>
                )}
                {submitStatus === 'error' && (
                  <Typography color="error" sx={{ mt: 2, fontFamily: "'Fira Code', monospace" }}>
                    Failed to send message. Please try again.
                  </Typography>
                )}
              </Box>
            </form>
          </Grid>

          <Grid item xs={12} md={6} sx={{ zIndex: 5 }}>
            <Box sx={{ mt: isSmallScreen ? 4 : 0, pl: { md: 6 } }}>
              <Typography color="#f4f4f5" variant="h5" sx={{ mb: 3, fontFamily: "'Fira Code', monospace", fontWeight: 600 }}>
                Contact Details
              </Typography>

              <ContactInfoItem>
                <EmailIcon sx={{ mr: 2, color: '#10b981' }} />
                <Typography sx={{ fontFamily: "'Fira Code', monospace" }}>geno.dev7@gmail.com</Typography>
              </ContactInfoItem>

              <ContactInfoItem>
                <PhoneIcon sx={{ mr: 2, color: '#10b981' }} />
                <Typography sx={{ fontFamily: "'Fira Code', monospace" }}>+91 9360810235</Typography>
              </ContactInfoItem>

              <ContactInfoItem>
                <LocationOnIcon sx={{ mr: 2, color: '#10b981' }} />
                <Typography>Kanyakumari, Tamil Nadu, India</Typography>
              </ContactInfoItem>

              <Box sx={{ mt: 5 }}>
                <Typography color="#f4f4f5" variant="h5" sx={{ mb: 3, fontFamily: "'Fira Code', monospace", fontWeight: 600 }}>
                  Developer Channels
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <SocialButton
                    href="https://www.linkedin.com/in/geno07/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon fontSize="medium" />
                  </SocialButton>
                  <SocialButton
                    href="https://github.com/Geno-code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon fontSize="medium" />
                  </SocialButton>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ContactCard>
    </ContactContainer>
  );
}

export default Contact;