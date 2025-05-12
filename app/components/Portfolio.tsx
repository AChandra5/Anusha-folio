"use client"
import React from 'react';
import { Box, Typography, Grid, List, ListItem, ListItemText, Container } from '@mui/material';
import { motion } from 'framer-motion';

export default function AnushaPortfolio() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box textAlign="center" mb={5}>
          <Typography variant="h4" fontWeight="bold">Anusha Sree K</Typography>
          <Typography variant="subtitle1" color="text.secondary">Content Writer and Strategist</Typography>
          <Typography mt={2}>📞 +91 9121651973</Typography>
          <Typography>📧 anushak1925@gmail.com</Typography>
        </Box>
      </motion.div>

      {/* Two-column layout */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <AnimatedSection title="Writing Skills" items={[
            'Content writing',
            'Social Media strategy',
            'SEO content',
            'AI prompt creation',
            'UX copywriting',
            'Technical & Business Writing',
          ]} />

          <AnimatedSection title="Tools" items={[
            'Google Analytics',
            'Google Search Console',
            'Canva',
            'CMS',
            'Hootsuite',
            'SEMrush',
            'Mailchimp',
            'Basic HTML',
          ]} />
        </Grid>

        <Grid item xs={12} md={6}>
          <AnimatedSection title="Qualification" items={[
            'MA English from IGNOU - 2023',
            'BSc Life Sciences from Osmania University - 2020',
            'Content Writing Workshop from Content Vidhya - 2020',
          ]} />

          <AnimatedSection title="Certifications" items={[
            'HubSpot SEO Certification',
            'Udemy Digital Marketing Certification',
            'Udemy Technical and Business Writing',
          ]} />
        </Grid>
      </Grid>

      {/* Work Experience */}
      <ExperienceSection />

      {/* Projects */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Box my={5}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>Project Highlights</Typography>
          <Typography paragraph>
            Social Media is one of the most essential digital spaces for building trust, increasing engagement, and promoting brand visibility.
            A good strategy includes research, a posting schedule, and consistency. How about a great one?
          </Typography>
          <Typography paragraph>
            I've worked on diverse niches like SEO, e-commerce, healthcare, and more. Projects include:
          </Typography>
          <Section title="Some Blog Samples" items={[
            'Creative Storytelling',
            'Entertainment',
            'e-News Article',
            'Finance',
            'Healthcare-related',
            'E-Commerce',
            'Business',
            'Lifestyle',
            'A story',
            'Technical Content',
          ]} />
          <Section title="Client Projects" items={[
            'Ajmal Perfumes USA',
            'One Health - Online Doctor Consultation',
            'ASH Distributions',
            'Haveli Punjab',
            'Bac Proof Professional Sanitization Services',
            'Agri Gain Avenues',
            'Sri Vinayaka Packers and Movers',
            'Sri Radha Herbal Skincare',
            "Veteran Kitchen Equipments",
            "Dr. Supriya Rai's Dental Care",
            'Varuna HDPE Pipes',
            'Morkiz Digital Solutions',
            'Spire News',
            'Eziom Digital Marketing',
          ]} />
        </Box>
      </motion.div>
    </Container>
  );
}

function Section({ title, items }) {
  return (
    <Box my={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>{title}</Typography>
      <List dense>
        {items.map((item, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

function AnimatedSection({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Section title={title} items={items} />
    </motion.div>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      role: 'Content Creator - Prompt Engineer (AI)',
      company: 'Amazon',
      duration: 'July 2023 — March 2025',
      responsibilities: [
        'Develop and refine prompts for AI models.',
        'Contributed to the launch of Alexa+.',
        'Optimize model performance using different prompt techniques.',
        'Analyze and assess AI output effectiveness.',
        'Collaborate with engineers and data scientists to fine-tune models.',
      ]
    },
    {
      role: 'Sr. Content Writer',
      company: 'ASH Software Design and Services Inc.',
      duration: 'Feb 2022 — June 2023',
      responsibilities: [
        'Create and implement content strategies.',
        'Oversee content quality and consistency.',
        'Research trends and competitor content.',
        'Maintain and manage content calendars.',
        'Analyze content performance and report.',
      ]
    },
    {
      role: 'Content Writer (Intern)',
      company: 'Morkiz Digital Solutions',
      duration: 'Aug 2020 — July 2021',
      responsibilities: [
        'Write, edit, and proofread for blogs, social media, and websites.',
        'Conduct research to ensure accuracy and relevance.',
        'Tailor content for audience preferences.',
        'Revise content based on feedback.',
      ]
    },
    {
      role: 'Freelance Copywriter',
      company: 'Self-employed',
      duration: 'Jan 2020 — Present',
      responsibilities: [
        'Create persuasive content for digital marketing.',
        'Conduct target audience and competitor analysis.',
        'Implement SEO best practices in copy.',
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Box my={5}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>Work Experience</Typography>
        {experiences.map((exp, idx) => (
          <Box key={idx} mb={4}>
            <Typography variant="h6" fontWeight="medium">{exp.role} - {exp.company}</Typography>
            <Typography variant="body2" color="text.secondary">{exp.duration}</Typography>
            <List dense>
              {exp.responsibilities.map((item, i) => (
                <ListItem key={i} sx={{ pl: 2 }}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </motion.div>
  );
}
