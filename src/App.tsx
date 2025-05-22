import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import NewEntry from './pages/NewEntry';
import PrayerTopics from './pages/PrayerTopics';
import YouTubeVideos from './pages/YouTubeVideos';
import Settings from './pages/Settings';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A6741', // Soft green
    },
    secondary: {
      main: '#F5F5DC', // Beige
    },
    background: {
      default: '#F8F8F8', // Soft gray
    },
  },
  typography: {
    fontFamily: '"Noto Sans", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Home />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/new-entry"
              element={
                <ProtectedRoute>
                  <Layout>
                    <NewEntry />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/prayer-topics"
              element={
                <ProtectedRoute>
                  <Layout>
                    <PrayerTopics />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/youtube-videos"
              element={
                <ProtectedRoute>
                  <Layout>
                    <YouTubeVideos />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Settings />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App; 