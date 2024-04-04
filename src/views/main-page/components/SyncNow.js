import { Refresh } from "@mui/icons-material";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useRequesters from "src/hooks/useRequesters";
import useSosEvents from "src/hooks/useSosEvents";
import { formatDateToIsraelLocale } from "src/utils/utils";

const SyncNow = () => {
  const dispatch = useDispatch();
  const { fetchRequesters } = useRequesters();
  const { fetchSosEvents } = useSosEvents();
  const lastSyncTime = useSelector((state) => state.lastSyncTime);
  const [displayText, setDisplayText] = useState("לחצ/י לעדכון הכל");

  const handleSyncNow = async () => {
    try {
      setDisplayText("מעדכן...");
      await fetchRequesters();
      await fetchSosEvents();
      dispatch({ type: "SET_LAST_SYNC_TIME", payload: new Date() });
      setDisplayText("עודכן ב-" + formatDateToIsraelLocale(lastSyncTime));
    } catch (e) {
      console.log("Failed to sync");
    }
  };
  return (
    <div
      onClick={handleSyncNow}
      style={{
        marginBottom: "1rem",
      }}
    >
      <Grid container>
        <Button variant="outlined" color="info">
          {displayText}
          <Refresh style={{ marginRight: "0.4rem" }} />
        </Button>
      </Grid>
    </div>
  );
};

export default SyncNow;
