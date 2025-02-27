import { Box, TextField, Button, MenuItem, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { useTeam } from '../../context/TeamContext';
import { useLanguage } from '../../context/LanguageContext';
import { formStyles } from '../../styles/formStyles';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const UserForm = () => {
  const { teams, addUser } = useTeam();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    teamId: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.teamId) {
      addUser(formData);
      setFormData({ name: '', email: '', role: '', teamId: '' });
    }
  };

  return (
    <Paper sx={formStyles.root}>
      <Box sx={formStyles.header}>
        <PersonAddIcon color="primary" />
        <Typography variant="subtitle1" sx={formStyles.title}>
          {t('users.addUser')}
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit} sx={formStyles.form}>
        <TextField
          fullWidth
          size="small"
          label={t('users.name')}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder={t('users.namePlaceholder')}
          required
        />

        <TextField
          fullWidth
          size="small"
          label={t('users.email')}
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder={t('users.emailPlaceholder')}
          required
        />

        <TextField
          fullWidth
          size="small"
          label={t('users.role')}
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          placeholder={t('users.rolePlaceholder')}
          required
        />

        <TextField
          select
          fullWidth
          size="small"
          label={t('users.selectTeam')}
          value={formData.teamId}
          onChange={(e) => setFormData({ ...formData, teamId: e.target.value })}
          required
        >
          {teams.length > 0 ? (
            teams.map((team) => (
              <MenuItem key={team.id} value={team.id}>
                {team.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled value="">
              {t('users.noTeams')}
            </MenuItem>
          )}
        </TextField>

        <Button
          type="submit"
          variant="contained"
          startIcon={<PersonAddIcon />}
          disabled={!formData.teamId}
          sx={formStyles.submitButton}
        >
          {t('common.add')}
        </Button>
      </Box>
    </Paper>
  );
};

export default UserForm; 