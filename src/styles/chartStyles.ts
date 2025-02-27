import { SxProps, Theme } from '@mui/material';

export const chartStyles = {
  root: {
    py: 3,
    minHeight: 'calc(100vh - 64px)',
    bgcolor: 'background.default'
  },
  pageTitle: {
    mb: 3,
    fontWeight: 600,
    color: 'text.primary'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)'
    },
    gap: 3,
    mb: 3
  },
  mainContent: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      lg: '2fr 1fr'
    },
    gap: 3
  },
  leftColumn: {
    width: '100%'
  },
  chartCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 2,
    overflow: 'hidden'
  },
  activityCard: {
    height: 'fit-content',
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 2,
    overflow: 'hidden'
  },
  chartHeader: {
    p: 2,
    borderBottom: '1px solid',
    borderColor: 'divider',
    bgcolor: 'background.default'
  },
  chartContent: {
    p: 2,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    py: 4,
  },
  başlık: {
    mb: 4,
    textAlign: 'center',
    color: 'primary.main',
    fontWeight: 'bold',
  },
  kart: {
    p: 3,
    height: '100%',
    bgcolor: 'background.paper',
    boxShadow: 3,
  },
  altBaşlık: {
    mb: 3,
    fontWeight: 500,
    color: 'text.primary',
  },
  grafikKutusu: (height: number): SxProps<Theme> => ({
    width: '100%',
    height: height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
} as const;

export const CHART_COLORS = [
  '#1E88E5', 
  '#00897B', 
  '#FFA000', 
  '#7B1FA2', 
  '#C62828', 
]; 