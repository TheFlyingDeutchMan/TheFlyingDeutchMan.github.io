import React from 'react';
import { Container, Typography, Box, Link, List, ListItem, ListItemText, Paper, CssBaseline } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const LearningPlan = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Tim's Learning Plan
          </Typography>
          <Link href="../index.html" underline="hover">
            Home
          </Link>
        </Box>
        
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h4" component="h3">
            The Plan
          </Typography>
          <Typography variant="body1">
            I have ordered my way of learning in steps, including the rituals prior to learning.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" component="h4">
            The Steps
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Morning Ritual" />
            </ListItem>
            <List component="ol" sx={{ listStyleType: 'decimal', pl: 4 }}>
              <ListItem>
                <ListItemText primary="Wake up" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Breakfast" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Prep Stim Drinks (energy drinks)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Queue loud music" />
              </ListItem>
            </List>
          </List>
        </Box>

        <Paper elevation={3} sx={{ p: 2, my: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <CodeIcon sx={{ mr: 1 }} />
            <Typography variant="h6" component="h4">
              Code Example
            </Typography>
          </Box>
          <Typography component="pre" sx={{ whiteSpace: 'pre-wrap', fontFamily: 'Monospace', bgcolor: '#f5f5f5', p: 2 }}>
            {`if problem:
    break-down
    ...
    wait break-down = break-down-complete:
      understand
      ...
      wait understand = understood:
        end

else:
    continue`}
          </Typography>
        </Paper>

        <Box sx={{ my: 4 }}>
          <Typography variant="body1" paragraph>
            At the end, I was hindering myself. Lack of motivation, and unwillingness to continue. The momentum I had, died. And I need to get the ball rolling. New routine, new ritual to learn. And at the top of that, now I am in the thick of it.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>So what will my long term plan be?</strong> <br />
            I am planning on using my skills to land a simple entry-level position in a job. To further cement my skills and set them in stone instead of quasi-knowing something. My goal after all of this and that... I don't know. Right now, I would enjoy creating a simple game leading into my dream game. Game development simply.
          </Typography>
          <Typography variant="body1" paragraph>
            Though I feel like, in the end, I want to have a role that requires me to be creative, while being logical about it. Varying each time.
          </Typography>

          <Typography variant="body1" paragraph>
            <strong>What would be my greatest strength and limitations in Bootcamp?</strong> <br />
            I think I am really good at delivering ideas. However, at the same time, I would struggle to be motivated, judging how I am at the moment, as well as difficulty delivering that idea.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>What would be my greatest non-technical challenge in Bootcamp?</strong> <br />
            I think my greatest non-technical challenge would be the fact that I struggle to recollect some parts I have learned. Quasi-knowing something. Though I am confident that I can overcome that throughout the course.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>What non-technical skills would I like to develop in myself while at Dev Academy?</strong> <br />
            I think getting myself organized and being more focused is something. Though organized is more likely than me being focused. I also want to end the course knowing the thing instead of quasi-knowing it.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>What are my expectations of myself for Bootcamp?</strong>
            <List component="ol" sx={{ listStyleType: 'decimal', pl: 4 }}>
              <ListItem>
                <ListItemText primary="To be organized" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Be on grounds at least once a week" />
              </ListItem>
              <ListItem>
                <ListItemText primary="To contribute and be an effective team player" />
              </ListItem>
              <ListItem>
                <ListItemText primary="110% like the course you did before" />
              </ListItem>
            </List>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default LearningPlan;
