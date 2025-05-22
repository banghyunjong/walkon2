import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  TextField,
  Divider,
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const Settings = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [reminderTime, setReminderTime] = useState('09:00');

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 4 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Settings
        </Typography>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Prayer Reminder
          </Typography>
          <TextField
            label="Reminder Time"
            type="time"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button variant="contained" fullWidth>
            Save Reminder Time
          </Button>
        </Paper>

        <Divider sx={{ my: 3 }} />

        <Button
          variant="outlined"
          color="error"
          fullWidth
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Settings; 