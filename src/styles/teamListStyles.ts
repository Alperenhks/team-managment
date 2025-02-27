export const teamListStyles = {
  root: {
    bgcolor: 'background.paper',
    borderRadius: 2,
    overflow: 'hidden',
    border: '1px solid',
    borderColor: 'divider',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    p: 2.5,
    borderBottom: '1px solid',
    borderColor: 'divider',
    bgcolor: 'background.default',
    display: 'flex',
    alignItems: 'center',
    gap: 1
  },
  headerTitle: {
    color: 'text.primary',
    fontWeight: 600,
    fontSize: '1.1rem'
  },
  teamItem: {
    borderBottom: '1px solid',
    borderColor: 'divider',
    '&:last-child': {
      borderBottom: 0
    },
    transition: 'all 0.2s',
    '&:hover': {
      bgcolor: 'action.hover'
    }
  },
  teamHeader: {
    display: 'flex',
    alignItems: 'center',
    p: 2.5
  },
  teamInfo: {
    flexGrow: 1
  },
  teamName: {
    fontWeight: 600,
    color: 'text.primary',
    fontSize: '0.95rem',
    mb: 0.5
  },
  teamDescription: {
    color: 'text.secondary',
    fontSize: '0.875rem'
  },
  userList: {
    bgcolor: 'background.default',
    pl: 4,
    py: 1
  },
  userItem: {
    borderLeft: '2px solid',
    borderColor: 'primary.main',
    my: 0.5,
    transition: 'all 0.2s',
    '&:hover': {
      bgcolor: 'background.paper'
    }
  },
  actions: {
    display: 'flex',
    gap: 1
  },
  iconButton: {
    color: 'text.secondary',
    '&:hover': {
      color: 'primary.main',
      bgcolor: 'primary.light',
      opacity: 0.1
    }
  },
  deleteButton: {
    '&:hover': {
      color: 'error.main',
      bgcolor: 'error.light',
      opacity: 0.1
    }
  }
} as const; 