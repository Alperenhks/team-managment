export const diagramStyles = {
  root: {
    height: 'calc(100vh - 64px)',
    bgcolor: 'background.default'
  },
  panel: {
    bgcolor: 'background.paper',
    p: 1,
    borderRadius: 1,
    boxShadow: 1
  },
  teamNode: {
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    width: 180,
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    fontSize: '14px'
  },
  userNode: {
    background: '#f8f9fa',
    border: '1px solid #e9ecef',
    borderRadius: '8px',
    padding: '10px',
    width: 200,
    textAlign: 'center',
    fontSize: '14px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  }
} as const; 