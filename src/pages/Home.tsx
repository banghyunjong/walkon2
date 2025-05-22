import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { format } from 'date-fns';
import AddIcon from '@mui/icons-material/Add';

interface PrayerTopic {
  id: string;
  text: string;
  completed: boolean;
}

const Home = () => {
  const navigate = useNavigate();
  const [todayMeditation, setTodayMeditation] = useState<string | null>(null);
  const [prayerTopics, setPrayerTopics] = useState<PrayerTopic[]>([
    { id: '1', text: 'Family', completed: false },
    { id: '2', text: 'Health', completed: false },
    { id: '3', text: 'Work', completed: false },
  ]);

  const handlePrayerTopicToggle = (id: string) => {
    setPrayerTopics(topics =>
      topics.map(topic =>
        topic.id === id ? { ...topic, completed: !topic.completed } : topic
      )
    );
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 4 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          {format(new Date(), 'MMMM d, yyyy')}
        </Typography>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Today's Meditation
          </Typography>
          {todayMeditation ? (
            <>
              <Typography variant="body1" paragraph>
                {todayMeditation}
              </Typography>
              <Button variant="outlined" size="small">
                Read More
              </Button>
            </>
          ) : (
            <Typography variant="body1" color="text.secondary">
              No meditation for today
            </Typography>
          )}
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Prayer Topics
          </Typography>
          <List>
            {prayerTopics.map((topic) => (
              <ListItem key={topic.id} disablePadding>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={topic.completed}
                    onChange={() => handlePrayerTopicToggle(topic.id)}
                  />
                </ListItemIcon>
                <ListItemText primary={topic.text} />
              </ListItem>
            ))}
          </List>
        </Paper>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          fullWidth
          onClick={() => navigate('/new-entry')}
        >
          New Entry
        </Button>
      </Box>
    </Container>
  );
};

export default Home; 