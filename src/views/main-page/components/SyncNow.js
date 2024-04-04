import { Refresh } from "@mui/icons-material";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useRequesters from "src/hooks/useRequesters";
import useSosEvents from "src/hooks/useSosEvents";

const SyncNow = () => {
  const dispatch = useDispatch();
  const { fetchRequesters } = useRequesters();
  const { fetchSosEvents } = useSosEvents();
  const lastSyncTime = useSelector((state) => state.lastSyncTime);

  const handleSyncNow = () => {
    try {
      fetchRequesters();
      fetchSosEvents();
      dispatch({ type: "SET_LAST_SYNC_TIME", payload: new Date() });
    } catch (e) {
      console.log("Failed to sync");
    }
  };
  return (
    <div
      onClick={handleSyncNow}
      style={{ position: "absolute", top: 60, right: "50%", zIndex: 99 }}
    >
      <Grid
        container
        style={{
          borderWidth: 2,
          borderRadius: "20%",
          backgroundColor: "gray",
          borderColor: "black",
        }}
      >
        <Typography
          textAlign={"right"}
          variant="subtitle2"
          fontWeight={600}
          style={{ cursor: "pointer" }}
        >
          עודכן ב {lastSyncTime}
          <IconButton size="small">
            <Refresh />
          </IconButton>
        </Typography>
      </Grid>
    </div>
  );
};

export default SyncNow;
