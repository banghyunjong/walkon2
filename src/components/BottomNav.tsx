import { useNavigate, useLocation } from 'react-router-dom';
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from '@mui/material';
import {
  Home as HomeIcon,
  Add as AddIcon,
  Bookmark as BookmarkIcon,
  YouTube as YouTubeIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
      elevation={3}
    >
      <BottomNavigation
        value={location.pathname}
        onChange={(_, newValue) => {
          navigate(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          label="Home"
          value="/home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="New"
          value="/new-entry"
          icon={<AddIcon />}
        />
        <BottomNavigationAction
          label="Prayer"
          value="/prayer-topics"
          icon={<BookmarkIcon />}
        />
        <BottomNavigationAction
          label="Videos"
          value="/youtube-videos"
          icon={<YouTubeIcon />}
        />
        <BottomNavigationAction
          label="Settings"
          value="/settings"
          icon={<SettingsIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav; 