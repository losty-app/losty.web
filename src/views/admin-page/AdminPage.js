import React from "react";
import { Typography } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";

const AdminPage = () => {
  return (
    <PageContainer title="מסך מנהל" description="זה הוא מסך המנהל">
      <DashboardCard title="מסך מנהל">
        <Typography>במסך זה תוכל להוסיף אנשים, לערוך וליצור קבוצות</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default AdminPage;
