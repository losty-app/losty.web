import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import DashboardCard from "../../../components/shared/DashboardCard";
import useRequesters from "src/hooks/useRequesters";
import useSosEvents from "src/hooks/useSosEvents";
import { SosEventStatus } from "src/models";

const LiveRequesters = () => {
  const { requesters } = useRequesters("HOME");
  const { sosEvents } = useSosEvents("HOME");

  const isRequesterInSos = (requesterId) => {
    if (sosEvents?.length > 0) {
      return sosEvents.some(
        ({ sosEventSentById, status }) =>
          sosEventSentById === requesterId && status === SosEventStatus.PENDING
      );
    }
    return false;
  };

  return (
    <DashboardCard title="טבלה">
      <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  שם
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  סטטוס
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  תאריך עדכון אחרון
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  מיקום אחרון
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requesters.map((requester) => (
              <TableRow key={requester.id}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {requester.firstName + " " + requester.lastName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        color="textSecondary"
                        sx={{
                          fontSize: "13px",
                        }}
                      >
                        {isRequesterInSos(requester.id)}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {requester.updatedAt}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {requester.geoPlace}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default LiveRequesters;
