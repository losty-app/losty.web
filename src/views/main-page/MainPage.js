import React from "react";
import { Typography } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import LiveRequesters from "./components/LiveRequesters";
import SosEventsHistory from "./components/SosEventsHistory";
import SyncNow from "./components/SyncNow";

const MainPage = () => {
  return (
    <>
      <SyncNow />
      <PageContainer
        title="מסך ראשי"
        description="פרטי הדיירים והיסטוריית מקרי מצוקה"
      >
        <LiveRequesters />
        <SosEventsHistory />
      </PageContainer>
    </>
  );
};

export default MainPage;
