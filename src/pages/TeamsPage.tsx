import { Box, Container, Stack } from '@mui/material';
import TeamForm from '../components/teams/TeamForm';
import UserForm from '../components/teams/UserForm';
import TeamList from '../components/teams/TeamList';
import { teamPageStyles } from '../styles/teamPageStyles';

const TeamsPage = () => {
  return (
    <Box sx={teamPageStyles.root}>
      <Container maxWidth="xl">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          {/* Sol Sidebar - Formlar */}
          <Box sx={teamPageStyles.sidebar}>
            <TeamForm />
            <UserForm />
          </Box>

          <Box sx={{ flex: 1 }}>
            <TeamList />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default TeamsPage; 