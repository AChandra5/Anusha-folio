"use client"
import * as React from 'react';
import {
  Box,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

const handleTabsChange = (_: React.SyntheticEvent, newValue: number) => {
  setValue(newValue);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleTabSelect = (index: number) => {
  setValue(index);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};



  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (index: number) => {
    setValue(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight="bold" sx={{ flexGrow: 1 }}>
            Anusha Sree K
          </Typography>

          {!isMobile ? (
            <Tabs value={value} onChange={handleTabsChange} aria-label="desktop tabs">
              <Tab label="About" />
              <Tab label="My Portfolio" />
              <Tab label="Contact Me" />
            </Tabs>
          ) : (
            <>
              <IconButton onClick={handleMenuClick}>
                <MenuIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={() => handleMenuItemClick(0)}>About</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick(1)}>My Portfolio</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick(2)}>Contact Me</MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>

      <CustomTabPanel value={value} index={0}>
        <About />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Portfolio />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Contact />
      </CustomTabPanel>
      <Footer onTabSelect={handleTabSelect} />
    </>
  );
}
