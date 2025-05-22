import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  TextField,
} from '@mui/material';

const NewEntry = () => {
  const navigate = useNavigate();
  const [bibleVerse, setBibleVerse] = useState('');
  const [summary, setSummary] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save to Supabase
    navigate('/home');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 4 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          New Meditation Entry
        </Typography>

        <Paper sx={{ p: 3 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Bible Verse"
              value={bibleVerse}
              onChange={(e) => setBibleVerse(e.target.value)}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              fullWidth
              margin="normal"
              required
              multiline
              rows={2}
            />

            <TextField
              label="Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />

            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => navigate('/home')}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                fullWidth
              >
                Save Entry
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default NewEntry; 