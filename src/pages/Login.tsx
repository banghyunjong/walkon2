import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'https://walkon2.vercel.app/home',
        },
      });

      if (error) throw error;
    } catch (error) {
      console.error('Error logging in with Google:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          py: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: '100%',
            textAlign: 'center',
            backgroundColor: 'background.paper',
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ color: 'primary.main', mb: 4 }}
          >
            Welcome to Walkon
          </Typography>
          
          <Typography
            variant="body1"
            sx={{ mb: 4, color: 'text.secondary' }}
          >
            Take one step at a time in your spiritual journey
          </Typography>

          <Button
            variant="contained"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleLogin}
            disabled={loading}
            fullWidth
            size="large"
            sx={{
              backgroundColor: 'white',
              color: 'text.primary',
              '&:hover': {
                backgroundColor: 'grey.100',
              },
            }}
          >
            {loading ? 'Signing in...' : 'Sign in with Google'}
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login; 