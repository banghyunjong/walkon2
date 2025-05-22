import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface VideoEntry {
  id: string;
  url: string;
  note: string;
  thumbnail: string;
}

const YouTubeVideos = () => {
  const [videos, setVideos] = useState<VideoEntry[]>([
    {
      id: '1',
      url: 'https://www.youtube.com/watch?v=example1',
      note: 'Morning devotion',
      thumbnail: 'https://img.youtube.com/vi/example1/maxresdefault.jpg',
    },
  ]);

  const [open, setOpen] = useState(false);
  const [newVideo, setNewVideo] = useState({ url: '', note: '' });

  const getYouTubeThumbnail = (url: string) => {
    const videoId = url.split('v=')[1];
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
  };

  const handleAddVideo = () => {
    if (newVideo.url && newVideo.note) {
      setVideos([
        ...videos,
        {
          id: Date.now().toString(),
          url: newVideo.url,
          note: newVideo.note,
          thumbnail: getYouTubeThumbnail(newVideo.url),
        },
      ]);
      setNewVideo({ url: '', note: '' });
      setOpen(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 4 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          YouTube Videos
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          fullWidth
          sx={{ mb: 3 }}
          onClick={() => setOpen(true)}
        >
          Add New Video
        </Button>

        {videos.map(video => (
          <Card key={video.id} sx={{ mb: 3 }}>
            <CardMedia
              component="img"
              height="140"
              image={video.thumbnail}
              alt="Video thumbnail"
            />
            <CardContent>
              <Typography variant="body1" gutterBottom>
                {video.note}
              </Typography>
              <Button
                variant="outlined"
                size="small"
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Video
              </Button>
            </CardContent>
          </Card>
        ))}

        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Add New Video</DialogTitle>
          <DialogContent>
            <TextField
              label="YouTube URL"
              value={newVideo.url}
              onChange={(e) => setNewVideo({ ...newVideo, url: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Note"
              value={newVideo.note}
              onChange={(e) => setNewVideo({ ...newVideo, note: e.target.value })}
              fullWidth
              margin="normal"
              multiline
              rows={2}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleAddVideo} variant="contained">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default YouTubeVideos; 