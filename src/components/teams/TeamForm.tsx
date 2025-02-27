import { useState } from 'react';
import { Box, TextField, Button, Paper, Typography, InputAdornment } from '@mui/material';
import { useTeam } from '../../context/TeamContext';
import AddIcon from '@mui/icons-material/Add';
import { useLanguage } from '../../context/LanguageContext'; 
import GroupsIcon from '@mui/icons-material/Groups';
import { formStyles } from '../../styles/formStyles';

const TeamForm = () => {
  const { addTeam } = useTeam();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTeam(formData);
    setFormData({ name: '', description: '' });
  };

  return (
    <Paper elevation={0} sx={formStyles.root}>
      <Box sx={formStyles.header}>
        <AddIcon color="primary" />
        <Typography variant="subtitle1" sx={formStyles.title}>
          {t('teams.create')}
        </Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={formStyles.form}>
        <TextField
          fullWidth
          size="small"
          placeholder={t('teams.name')}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GroupsIcon fontSize="small" sx={{ color: 'text.secondary' }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          size="small"
          multiline
          rows={3}
          placeholder={t('teams.description')}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={formStyles.submitButton}
        >
          {t('teams.create')}
        </Button>
      </Box>
    </Paper>
  );
};

export default TeamForm; 