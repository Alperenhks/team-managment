export const formStyles = {
  root: {
    p: 2,
    bgcolor: 'background.paper',
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 2,
    height: 'fit-content'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    mb: 2
  },
  title: {
    fontWeight: 500,
    color: 'text.primary'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  },
  input: {
    '& .MuiInputBase-input': {
      fontSize: '0.875rem'
    }
  },
  submitButton: {
    mt: 2,
    py: 1,
    textTransform: 'none',
    fontWeight: 500
  }
} as const; 