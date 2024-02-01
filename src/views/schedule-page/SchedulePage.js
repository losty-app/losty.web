import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

const SchedulePage = () => {
  return (
    <PageContainer title="מסך לו״ז" description="זה מסך הלו״ז">
      <DashboardCard title="מסך לו״ז">
        <Typography>במסך לו״ז יהיה את הטבלת של האם די בי</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default SchedulePage;
