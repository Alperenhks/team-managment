import { Box, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Team } from '../../types';
import { format } from 'date-fns';
import { tr, enUS } from 'date-fns/locale';
import { useLanguage } from '../../context/LanguageContext';

export const TeamActivityList = ({ teams }: { teams: Team[] }) => {
  const { language } = useLanguage();

  
  const activities = teams.flatMap(team => 
    team.users.map(user => ({
      type: 'joined',
      team: team.name,
      user: user.name,
      date: new Date(), 
    }))
  ).sort((a, b) => b.date.getTime() - a.date.getTime())
   .slice(0, 5);

  return (
    <List sx={{ p: 0 }}>
      {activities.map((activity, index) => (
        <ListItem key={index} sx={{ py: 2 }}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'primary.light' }}>
              {activity.user.charAt(0)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {activity.user}
              </Typography>
            }
            secondary={
              <Box component="span" sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mt: 0.5 }}>
                <Typography variant="caption" color="text.secondary">
                  {`${activity.team} ekibine katıldı`}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {format(activity.date, 'PPp', {
                    locale: language === 'tr' ? tr : enUS
                  })}
                </Typography>
              </Box>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}; 