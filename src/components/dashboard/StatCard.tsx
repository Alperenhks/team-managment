import { Box, Paper, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { StatCardProps } from '../../types';
import { statCardStyles } from '../../styles/statCard';

export const StatCard = ({ title, value, icon, trend }: StatCardProps) => {
  const isPositive = trend > 0;

  return (
    <Paper sx={statCardStyles.root}>
      <Box sx={statCardStyles.iconWrapper}>{icon}</Box>
      <Box sx={statCardStyles.content}>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h4" sx={statCardStyles.value}>
          {value}
        </Typography>
        <Box sx={statCardStyles.trend}>
          {isPositive ? (
            <TrendingUpIcon color="success" fontSize="small" />
          ) : (
            <TrendingDownIcon color="error" fontSize="small" />
          )}
          <Typography
            variant="caption"
            color={isPositive ? 'success.main' : 'error.main'}
            fontWeight={500}
          >
            {trend}%
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

