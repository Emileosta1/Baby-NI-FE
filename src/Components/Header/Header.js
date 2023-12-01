import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import LogoImage from './logo.svg'; 
import NIImage from './ni.svg'; 

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src={LogoImage}
              alt="Logo"
              style={{
                height: '70px',
                width:'70px',
                marginRight: '30px',
                display: { xs: 'none', md: 'flex' },
              }}
            />
            <img
              src={NIImage}
              alt="Logo"
              style={{
                height: '35px',
                width:'200px',
                marginBottom: '5px',
                display: { xs: 'none', md: 'flex' },
              }}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default ResponsiveAppBar;