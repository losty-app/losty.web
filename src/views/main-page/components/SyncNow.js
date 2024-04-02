import { Refresh } from "@mui/icons-material";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import useRequesters from "src/hooks/useRequesters";
import useSosEvents from "src/hooks/useSosEvents";

const SyncNow = () => {
  const { fetchRequesters } = useRequesters();
  const { fetchSosEvents } = useSosEvents();

  const handleSyncNow = () => {};
  return (
    <div style={{ position: "absolute", top: 60, right: "50%", zIndex: 99 }}>
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
          עודכן ב
          <IconButton size="small">
            <Refresh />
          </IconButton>
        </Typography>
      </Grid>
    </div>
  );
};

export default SyncNow;
