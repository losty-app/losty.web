import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

const EventsPage = () => {
  return (
    <PageContainer title="מסך אירועים" description="במסך זו יופיעו אירועים">
      <DashboardCard title="מסך אירועים">
        <Typography>במסך זה תהיה רשימת האירועים של המשתמש הנוכחי</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default EventsPage;
