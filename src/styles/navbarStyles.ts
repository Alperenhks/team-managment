export const navbarStyles = {
  appBar: {
    backgroundColor: 'background.paper',
    borderBottom: 1,
    borderColor: 'divider',
    backdropFilter: 'blur(8px)',
  },
  logo: {
    width: 40,
    height: 40,
    mr: 2,
  },
  menuButton: {
    mr: 2,
    display: { xs: 'flex', md: 'none' },
    color: 'text.primary',
  },
  desktopNav: {
    display: { xs: 'none', md: 'flex' },
    gap: 1,
  },
  navButton: {
    color: 'text.primary',
    '&:hover': {
      backgroundColor: 'action.hover',
    },
    p: 1.5,
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  actionButton: {
    color: 'text.primary',
    '&:hover': {
      backgroundColor: 'action.hover',
    },
  },
  languageIndicator: {
    ml: 0.5,
    fontSize: '0.75rem',
    fontWeight: 600,
  },
  mobileMenu: {
    '& .MuiPaper-root': {
      width: 200,
      maxWidth: '100%',
      mt: 1.5,
    },
  },
  menuItem: {
    gap: 2,
    py: 1.5,
  },
  menuItemText: {
    fontWeight: 500,
  },
  languageButton: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: 'text.primary',
    minWidth: 32
  },
} as const; 