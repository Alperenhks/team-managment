import { SxProps, Theme } from '@mui/material';

export const teamPageStyles = {
  root: {
    py: 3,
    minHeight: 'calc(100vh - 64px)',
    bgcolor: 'background.default'
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    position: { md: 'sticky' },
    top: { md: '80px' }
  },
  header: {
    mb: 4,
    textAlign: 'center'
  },
  title: {
    color: 'primary.main',
    fontWeight: 600,
    mb: 1
  },
  subtitle: {
    color: 'text.secondary',
    mb: 4
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3
  },
  forms: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3
  },
  listContainer: {
    minHeight: '600px'
  }
} as const; 