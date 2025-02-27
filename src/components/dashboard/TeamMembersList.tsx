import { Box, Paper, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText, Chip } from '@mui/material';
import { Team } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

const TeamMembersList = ({ teams }: { teams: Team[] }) => {
  const { t } = useLanguage();

  return (
    <Paper sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
      <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Typography variant="h6">{t('dashboard.membersByTeam')}</Typography>
      </Box>
      <List sx={{ p: 0 }}>
        {teams.map(team => (
          <ListItem key={team.id} sx={{ py: 2 }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'primary.light' }}>
                {team.name.charAt(0)}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {team.name}
                  </Typography>
                  <Chip
                    size="small"
                    label={`${team.users.length} üye`}
                    sx={{ bgcolor: 'primary.light', color: 'primary.main' }}
                  />
                </Box>
              }
              secondary={team.description}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TeamMembersList; 