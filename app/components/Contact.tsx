"use client"
import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form logic or connect to service here
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been received.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container maxWidth="sm">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box textAlign="center" py={5}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>Contact Me</Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            Feel free to reach out with questions or collaboration ideas.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={4}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained" size="large" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </motion.div>
    </Container>
  );
};

export default ContactPage;
