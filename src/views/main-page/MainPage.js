import React from "react";
import { Typography } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import LiveRequesters from "./components/LiveRequesters";

const MainPage = () => {
  return (
    <PageContainer
      title="מסך ראשי"
      description="פרטי הדיירים והיסטוריית מקרי מצוקה"
    >
      <DashboardCard title="מסך ראשי">
        <Typography>במסך זה תהיה רשימת החניכים ו האירועים של העמותה</Typography>
      </DashboardCard>
      <LiveRequesters />
      <SosEvents />
    </PageContainer>
  );
};

export default MainPage;
