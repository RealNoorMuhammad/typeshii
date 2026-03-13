import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#e5e5e5',
    },
    secondary: {
      main: '#a3a3a3',
      light: '#d4d4d4',
      dark: '#737373',
    },
    background: {
      default: '#0a0a0a',
      paper: '#141414',
    },
    text: {
      primary: '#fafafa',
      secondary: '#737373',
    },
    success: { main: '#e5e5e5' },
    error: { main: '#fafafa' },
  },
  typography: {
    fontFamily: '"Exo 2", "Orbitron", system-ui, sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    button: { fontWeight: 700 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        },
        containedPrimary: {
          background: '#ffffff',
          color: '#0a0a0a',
          '&:hover': {
            background: '#e5e5e5',
            boxShadow: '0 0 24px rgba(255, 255, 255, 0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.35)',
        },
      },
    },
  },
});
