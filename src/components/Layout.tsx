import { Box } from '@mui/material';
import BottomNav from './BottomNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ pb: 7 }}>
      {children}
      <BottomNav />
    </Box>
  );
};

export default Layout; 