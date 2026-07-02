import React from 'react';
import { Box, Typography, TextField, Button, Grid, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import TwitterIcon from '@mui/icons-material/Twitter';
import emailjs from 'emailjs-com';
import { useState, useRef } from 'react';


const ContactContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#0a192f',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4, 2),
}));

const ContactCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#112240',
  borderRadius: '8px',
  padding: theme.spacing(4),
  maxWidth: '1000px',
  width: '100%',
  boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#ccd6f6',
  position: 'relative',
  paddingBottom: theme.spacing(1),
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '70px',
    height: '2px',
    backgroundColor: '#64ffda',
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  marginTop: theme.spacing(3),
  borderRadius: '4px',
  backgroundColor: 'transparent',
  color: '#64ffda',
  border: '1px solid #64ffda',
  fontFamily: "'Fira Code', monospace",
  fontSize: '0.9rem',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    transform: 'translateY(-3px)',
  },
}));

const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  color: '#8892b0',
}));

function Contact() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  // Add all state declarations
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


  return (
    <ContactContainer id="contact">
      <ContactCard>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <SectionTitle variant="h4">
              <span style={{ color: '#64ffda' }}>04.</span> Get In Touch
            </SectionTitle>
            <Typography color="#8892b0" paragraph sx={{ mt: 3, lineHeight: 1.6 }}>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </Typography>

            <form ref={formRef} onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
              <TextField
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                label="Name"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ style: { color: '#8892b0' } }}
                InputProps={{ style: { color: '#ccd6f6' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#233554',
                    },
                    '&:hover fieldset': {
                      borderColor: '#64ffda',
                    },
                  },
                }}
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
                InputLabelProps={{ style: { color: '#8892b0' } }}
                InputProps={{ style: { color: '#ccd6f6' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#233554',
                    },
                    '&:hover fieldset': {
                      borderColor: '#64ffda',
                    },
                  },
                }}
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
                InputLabelProps={{ style: { color: '#8892b0' } }}
                InputProps={{ style: { color: '#ccd6f6' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#233554',
                    },
                    '&:hover fieldset': {
                      borderColor: '#64ffda',
                    },
                  },
                }}
              />
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <ContactButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </ContactButton>
                {submitStatus === 'success' && (
                  <Typography color="#64ffda" sx={{ mt: 2 }}>
                    Message sent successfully!
                  </Typography>
                )}
                {submitStatus === 'error' && (
                  <Typography color="error" sx={{ mt: 2 }}>
                    Failed to send message. Please try again.
                  </Typography>
                )}
              </Box>
            </form>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ mt: isSmallScreen ? 4 : 0 }}>
              <Typography color="#ccd6f6" variant="h5" sx={{ mb: 3 }}>
                Contact Information
              </Typography>

              <ContactInfoItem>
                <EmailIcon sx={{ mr: 2, color: '#64ffda' }} />
                <Typography>geno.dev7@gmail.com</Typography>
              </ContactInfoItem>

              <ContactInfoItem>
                <PhoneIcon sx={{ mr: 2, color: '#64ffda' }} />
                <Typography>+91 9360810235</Typography>
              </ContactInfoItem>

              <ContactInfoItem>
                <LocationOnIcon sx={{ mr: 2, color: '#64ffda' }} />
                <Typography>Kanyakumari, India</Typography>
              </ContactInfoItem>

              <Box sx={{ mt: 4 }}>
                <Typography color="#ccd6f6" variant="h5" sx={{ mb: 3 }}>
                  Find Me On
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    href="https://www.linkedin.com/in/geno07/"
                    target="_blank"
                    sx={{ color: '#64ffda', minWidth: 0 }}
                  >
                    <LinkedInIcon fontSize="large" />
                  </Button>
                  <Button
                    href="https://github.com/Geno-code"
                    target="_blank"
                    sx={{ color: '#64ffda', minWidth: 0 }}
                  >
                    <GitHubIcon fontSize="large" />
                  </Button>
                  {/* <Button 
                    href="https://twitter.com" 
                    target="_blank"
                    sx={{ color: '#64ffda', minWidth: 0 }}
                  >
                    <TwitterIcon fontSize="large" />
                  </Button> */}
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