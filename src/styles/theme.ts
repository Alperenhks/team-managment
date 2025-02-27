import { createTheme, PaletteMode } from '@mui/material';

export const getTheme = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#2563eb', // Modern mavi
      light: '#60a5fa',
      dark: '#1d4ed8',
      contrastText: '#fff'
    },
    secondary: {
      main: '#7c3aed', // Mor
      light: '#a78bfa',
      dark: '#5b21b6',
      contrastText: '#fff'
    },
    background: {
      default: mode === 'light' ? '#f8fafc' : '#0f172a',
      paper: mode === 'light' ? '#ffffff' : '#1e293b'
    },
    text: {
      primary: mode === 'light' ? '#1e293b' : '#f1f5f9',
      secondary: mode === 'light' ? '#64748b' : '#94a3b8'
    },
    divider: mode === 'light' ? '#e2e8f0' : '#334155',
    error: {
      main: '#ef4444', // Modern kırmızı
      light: '#fca5a5',
      dark: '#dc2626'
    },
    success: {
      main: '#22c55e', // Modern yeşil
      light: '#86efac',
      dark: '#16a34a'
    },
    warning: {
      main: '#f59e0b', // Modern turuncu
      light: '#fcd34d',
      dark: '#d97706'
    }
  },
  shape: {
    borderRadius: 8
  },
  shadows: [
    'none',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    '0 6px 8px -2px rgb(0 0 0 / 0.1)',
    '0 8px 10px -3px rgb(0 0 0 / 0.1)',
    '0 10px 12px -4px rgb(0 0 0 / 0.1)',
    '0 12px 14px -5px rgb(0 0 0 / 0.1)',
    '0 14px 16px -6px rgb(0 0 0 / 0.1)',
    '0 16px 18px -7px rgb(0 0 0 / 0.1)',
    '0 18px 20px -8px rgb(0 0 0 / 0.1)',
    '0 20px 22px -9px rgb(0 0 0 / 0.1)',
    '0 22px 24px -10px rgb(0 0 0 / 0.1)',
    '0 24px 26px -11px rgb(0 0 0 / 0.1)',
    '0 26px 28px -12px rgb(0 0 0 / 0.1)',
    '0 28px 30px -13px rgb(0 0 0 / 0.1)',
    '0 30px 32px -14px rgb(0 0 0 / 0.1)',
    '0 32px 34px -15px rgb(0 0 0 / 0.1)',
    '0 34px 36px -16px rgb(0 0 0 / 0.1)',
    '0 36px 38px -17px rgb(0 0 0 / 0.1)',
    '0 38px 40px -18px rgb(0 0 0 / 0.1)',
    '0 40px 42px -19px rgb(0 0 0 / 0.1)',
    '0 42px 44px -20px rgb(0 0 0 / 0.1)',
    '0 44px 46px -21px rgb(0 0 0 / 0.1)',
    '0 46px 48px -22px rgb(0 0 0 / 0.1)'
  ]
});

// Grafik renkleri için
export const CHART_COLORS = [
  '#2563eb', // Primary
  '#7c3aed', // Secondary
  '#f59e0b', // Warning
  '#22c55e', // Success
  '#ef4444', // Error
  '#64748b', // Text Secondary
];

export default getTheme; 