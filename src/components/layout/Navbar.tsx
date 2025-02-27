import { 
  AppBar, 
  Toolbar, 
  Box, 
  IconButton, 
  Tooltip, 
  Menu, 
  MenuItem, 
  Avatar
} from '@mui/material';
import { 
  DarkMode, 
  LightMode, 
  Menu as MenuIcon 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { navbarStyles } from '../../styles/navbarStyles'; 
import GroupIcon from '@mui/icons-material/Group';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useState } from 'react';
import { NavItemProps } from '../../types';

interface NavbarProps {}

const Navbar = () => {
  
  const navigate = useNavigate();
  const { t, language, toggleLanguage } = useLanguage();
  const { mode, toggleTheme } = useTheme();
  const [mobileMenu, setMobileMenu] = useState<null | HTMLElement>(null);

  const navItems: NavItemProps[] = [
    { label: t('nav.teams'), path: '/', icon: <GroupIcon /> },
    { label: t('nav.diagram'), path: '/diagram', icon: <AccountTreeIcon /> },
    { label: t('nav.charts'), path: '/charts', icon: <BarChartIcon /> }
  ];

  return (
    <AppBar position="sticky" sx={navbarStyles.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={navbarStyles.menuButton}
          onClick={(e) => setMobileMenu(e.currentTarget)}
        >
          <MenuIcon />
        </IconButton>

        <Avatar 
          src="/logo.svg" 
          sx={navbarStyles.logo} 
          variant="rounded"
        />

        {/* Desktop Navigation */}
        <Box sx={navbarStyles.desktopNav}>
          {navItems.map((item) => (
            <Tooltip key={item.path} title={item.label}>
              <IconButton
                onClick={() => navigate(item.path)}
                sx={navbarStyles.navButton}
              >
                {item.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Actions */}
        <Box sx={navbarStyles.actions}>
          <Tooltip title={language === 'tr' ? 'Switch to English' : 'Türkçeye Geç'}>
            <IconButton 
              onClick={toggleLanguage} 
              sx={navbarStyles.actionButton}
            >
              <Box sx={navbarStyles.languageButton}>
                {language === 'tr' ? 'EN' : 'TR'}
              </Box>
            </IconButton>
          </Tooltip>
          <Tooltip title={t('common.toggleTheme')}>
            <IconButton onClick={toggleTheme} sx={navbarStyles.actionButton}>
              {mode === 'dark' ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Tooltip>
        </Box>

        {/* Mobile Menu */}
        <Menu
          anchorEl={mobileMenu}
          open={Boolean(mobileMenu)}
          onClose={() => setMobileMenu(null)}
          sx={navbarStyles.mobileMenu}
        >
          {navItems.map((item) => (
            <MenuItem
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setMobileMenu(null);
              }}
              sx={navbarStyles.menuItem}
            >
              {item.icon}
              <Box component="span" sx={navbarStyles.menuItemText}>
                {item.label}
              </Box>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 