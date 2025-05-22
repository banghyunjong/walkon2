import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface PrayerTopic {
  id: string;
  text: string;
  category: string;
  completed: boolean;
}

const PrayerTopics = () => {
  const [topics, setTopics] = useState<PrayerTopic[]>([
    { id: '1', text: 'Family', category: 'Personal', completed: false },
    { id: '2', text: 'Health', category: 'Personal', completed: false },
    { id: '3', text: 'Work', category: 'Professional', completed: false },
  ]);

  const [open, setOpen] = useState(false);
  const [newTopic, setNewTopic] = useState({ text: '', category: '' });

  const handleToggle = (id: string) => {
    setTopics(topics =>
      topics.map(topic =>
        topic.id === id ? { ...topic, completed: !topic.completed } : topic
      )
    );
  };

  const handleAddTopic = () => {
    if (newTopic.text && newTopic.category) {
      setTopics([
        ...topics,
        {
          id: Date.now().toString(),
          text: newTopic.text,
          category: newTopic.category,
          completed: false,
        },
      ]);
      setNewTopic({ text: '', category: '' });
      setOpen(false);
    }
  };

  const categories = Array.from(new Set(topics.map(topic => topic.category)));

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 4 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Prayer Topics
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          fullWidth
          sx={{ mb: 3 }}
          onClick={() => setOpen(true)}
        >
          Add New Topic
        </Button>

        {categories.map(category => (
          <Paper key={category} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              {category}
            </Typography>
            <List>
              {topics
                .filter(topic => topic.category === category)
                .map(topic => (
                  <ListItem key={topic.id} disablePadding>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={topic.completed}
                        onChange={() => handleToggle(topic.id)}
                      />
                    </ListItemIcon>
                    <ListItemText primary={topic.text} />
                  </ListItem>
                ))}
            </List>
          </Paper>
        ))}

        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Add New Prayer Topic</DialogTitle>
          <DialogContent>
            <TextField
              label="Topic"
              value={newTopic.text}
              onChange={(e) => setNewTopic({ ...newTopic, text: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Category"
              value={newTopic.category}
              onChange={(e) => setNewTopic({ ...newTopic, category: e.target.value })}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleAddTopic} variant="contained">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default PrayerTopics; 