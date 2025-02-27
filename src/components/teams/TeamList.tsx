import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  IconButton,
  Collapse,
  Box
} from '@mui/material';
import {
  Delete as DeleteIcon,
  ExpandLess,
  ExpandMore,
  Person as PersonIcon
} from '@mui/icons-material';
import { useState } from 'react';
import { useTeam } from '../../context/TeamContext';
import { teamListStyles } from '../../styles/teamListStyles';
import { useLanguage } from '../../context/LanguageContext';

const TeamList = () => {
  const { teams, removeTeam, removeUser } = useTeam();
  const [openTeams, setOpenTeams] = useState<Record<string, boolean>>({});
  const { t } = useLanguage();

  const toggleTeam = (teamId: string) => {
    setOpenTeams(prev => ({
      ...prev,
      [teamId]: !prev[teamId]
    }));
  };

  return (
    <Paper sx={teamListStyles.root}>
      <Box sx={teamListStyles.header}>
        <Typography variant="h6" sx={teamListStyles.headerTitle}>
          {t('teams.teamsAndMembers')}
        </Typography>
      </Box>
      <List disablePadding>
        {teams.map(team => (
          <>
            <ListItem key={team.id} sx={teamListStyles.teamItem} disablePadding>
              <Box sx={teamListStyles.teamHeader}>
                <Box sx={teamListStyles.teamInfo}>
                  <Typography sx={teamListStyles.teamName}>
                    {team.name}
                  </Typography>
                  <Typography sx={teamListStyles.teamDescription}>
                    {team.description}
                  </Typography>
                </Box>
                <Box sx={teamListStyles.actions}>
                  <IconButton size="small" onClick={() => toggleTeam(team.id)}>
                    {openTeams[team.id] ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => removeTeam(team.id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            </ListItem>

            <Collapse in={openTeams[team.id]} timeout="auto">
              <List sx={{ pl: 4 }}> 
                {team.users.map(user => (
                  <ListItem
                    key={user.id}
                    sx={teamListStyles.userItem}
                    secondaryAction={
                      <IconButton
                        edge="end"
                        size="small"
                        onClick={() => removeUser(user.id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <PersonIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <ListItemText
                      primary={user.name}
                      secondary={`${user.role} • ${user.email}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TeamList;
