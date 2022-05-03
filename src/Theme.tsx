import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: "#6750a4",
    },
    secondary: {
      main: '#a06cc2',
    },
    background: {
      default: '#f3ecec'
    }
  },
});

export default function Palette({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  );
}