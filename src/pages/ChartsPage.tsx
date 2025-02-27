import { Box, Container, Paper, Typography, useTheme, useMediaQuery, Stack } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts';
import { useTeam } from '../context/TeamContext';
import { useLanguage } from '../context/LanguageContext';
import { chartStyles } from '../styles/chartStyles';
import { StatCard } from '../components/dashboard/StatCard';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { TeamActivityList } from '../components/dashboard/TeamActivityList'; 
import TeamMembersList from '../components/dashboard/TeamMembersList';
import { tooltipStyles } from '../styles/tooltipStyles';

const ChartsPage = () => {
  const { teams } = useTeam();
  const { t } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const totalUsers = teams.reduce((sum, team) => sum + team.users.length, 0);
  const averageTeamSize = teams.length ? (totalUsers / teams.length).toFixed(1) : '0';

  const calculateTrend = (current: number, previous: number) => {
    return previous ? ((current - previous) / previous * 100).toFixed(1) : 0;
  };

  const teamTrend = calculateTrend(teams.length, teams.length - 2); 
  const memberTrend = calculateTrend(totalUsers, totalUsers - 5); 

  const pieChartData = teams.map(team => ({
    name: team.name,
    value: team.users.length,
    color: theme.palette.primary.main
  }));

  console.log(pieChartData);

  
    if (!teams.length) {
    return (
      <Box sx={chartStyles.root}>
        <Container maxWidth="xl">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: 2,
            py: 8 
          }}>
            <GroupsIcon sx={{ fontSize: 48, color: 'primary.main' }} />
            <Typography variant="h6" color="text.secondary">
              {t('dashboard.noTeams')}
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={chartStyles.root}>
      <Container maxWidth="xl">
        <Typography variant="h5" sx={chartStyles.pageTitle}>
          {t('dashboard.overview')}
        </Typography>

        {/* Stats Grid */}
        <Box sx={chartStyles.statsGrid}>
          <StatCard
            title={t('dashboard.totalTeams')}
            value={teams.length}
            icon={<GroupsIcon />}
            trend={Number(teamTrend)}
          />
          <StatCard
            title={t('dashboard.totalMembers')}
            value={totalUsers}
            icon={<TrendingUpIcon />}
            trend={Number(memberTrend)}
          />
          <StatCard
            title={t('dashboard.avgTeamSize')}
            value={averageTeamSize}
            icon={<GroupsIcon />}
            trend={0}
          />
        </Box>

        {/* Main Content */}
        <Box sx={chartStyles.mainContent}>
          {/* Left Column */}
          <Stack spacing={3} sx={chartStyles.leftColumn}>
            {/* Team Distribution Chart */}
            <Paper sx={chartStyles.chartCard}>
              <Box sx={chartStyles.chartHeader}>
                <Typography variant="h6">{t('dashboard.teamDistribution')}</Typography>
              </Box>
              <Box sx={chartStyles.chartContent}>
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={isMobile ? 100 : 140}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}`}
                    >
                      {pieChartData?.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={theme.palette.primary[index % 3 === 0 ? 'main' : index % 3 === 1 ? 'light' : 'dark']}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{
                        backgroundColor: theme.palette.background.paper,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </Paper>

            {/* Bar Chart */}
            <Paper sx={chartStyles.chartCard}>
              <Box sx={chartStyles.chartHeader}>
                <Typography variant="h6">{t('dashboard.teamSizes')}</Typography>
              </Box>
              <Box sx={chartStyles.chartContent}>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart 
                    data={teams}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="name"
                      tick={{ fill: theme.palette.text.secondary }}
                      axisLine={{ stroke: theme.palette.divider }}
                      tickLine={{ stroke: theme.palette.divider }}
                    />
                    <YAxis 
                      label={{ 
                        value: t('dashboard.members'), 
                        angle: -90, 
                        position: 'insideLeft',
                        style: { fill: theme.palette.text.secondary }
                      }}
                      tick={{ fill: theme.palette.text.secondary }}
                      axisLine={{ stroke: theme.palette.divider }}
                      tickLine={{ stroke: theme.palette.divider }}
                    />
                    <Tooltip
                      cursor={{ fill: 'transparent' }}
                      content={({ payload, label }) => {
                        if (payload && payload.length) {
                          return (
                            <Box sx={tooltipStyles.container}>
                              <Typography variant="body2" color="text.primary">
                                {label}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {`${payload[0].value} ${t('dashboard.members')}`}
                              </Typography>
                            </Box>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar 
                      dataKey="users.length" 
                      fill={theme.palette.primary.main}
                      radius={[4, 4, 0, 0]}
                      maxBarSize={60}
                    >
                      {teams.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={theme.palette.primary[index % 2 === 0 ? 'main' : 'light']}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Paper>

            {/* Team Members List */}
            <TeamMembersList teams={teams} />
          </Stack>

          {/* Right Column - Recent Activity */}
          <Paper sx={chartStyles.activityCard}>
            <Box sx={chartStyles.chartHeader}>
              <Typography variant="h6">{t('dashboard.recentActivity')}</Typography>
            </Box>
            <TeamActivityList teams={teams} />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default ChartsPage; 