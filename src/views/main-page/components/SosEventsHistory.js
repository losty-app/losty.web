import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import DashboardCard from "../../../components/shared/DashboardCard";
import useSosEvents from "src/hooks/useSosEvents";
import { formatDateToIsraelLocale } from "src/utils/utils";
import {
  ArrowUpward,
  ArrowDownward,
  SortByAlpha,
  SortOutlined,
  MapSharp,
} from "@mui/icons-material";
import SosEventHistory from "./requesters/SosEventHistory";

const SosEventsHistory = () => {
  const { sosEvents } = useSosEvents("HOME");
  const [sortedSosEvents, setSortedSosEvents] = useState([]);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");

  const openGoogleMaps = (requester) => {
    const { latitude, longitude } = JSON.parse(requester.place);
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    const windowName = `google_maps_${latitude}_${longitude}`; // Unique window name
    window.open(url, windowName, "_blank");
  };

  useEffect(() => {
    if (!sortBy) return;
    const sortedData = [...sosEvents].sort((a, b) => {
      if (sortBy === "fullName") {
        return sortOrder === "asc"
          ? a.fullName.localeCompare(b.fullName)
          : b.fullName.localeCompare(a.fullName);
      }
      if (sortBy === "status") {
        return sortOrder === "desc" ? (a.isSOS ? -1 : 1) : a.isSOS ? 1 : -1;
      }
      if (sortBy === "updatedAt") {
        return sortOrder === "asc"
          ? new Date(a.updatedAt) - new Date(b.updatedAt)
          : new Date(b.updatedAt) - new Date(a.updatedAt);
      }
      if (sortBy === "createdAt") {
        return sortOrder === "asc"
          ? new Date(a.createdAt) - new Date(b.createdAt)
          : new Date(b.createdAt) - new Date(a.createdAt);
      }
      return 0;
    });
    setSortedSosEvents(sortedData);
  }, [sosEvents, sortBy, sortOrder]);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("desc");
    }
  };

  return (
    <DashboardCard title="טבלת מקרי חירום">
      <Box
        sx={{
          direction: "rtl",
          maxHeight: "30vh",
          overflow: "auto",
          width: { xs: "280px", sm: "auto" },
          "&::-webkit-scrollbar": {
            width: "8px",
            backgroundColor: "#f5f5f5", // Change this color as needed
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888", // Change this color as needed vgbnh
            borderRadius: "4px",
          },
        }}
      >
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
            mb: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="right">
                <Typography
                  textAlign={"right"}
                  variant="subtitle2"
                  fontWeight={600}
                  onClick={() => handleSort("fullName")}
                  style={{ cursor: "pointer" }}
                >
                  שם
                  <IconButton
                    size="small"
                    onClick={() => handleSort("fullName")}
                  >
                    {sortBy === "fullName" ? (
                      sortOrder === "desc" ? (
                        <ArrowDownward />
                      ) : (
                        <ArrowUpward />
                      )
                    ) : (
                      <SortByAlpha />
                    )}
                  </IconButton>
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  textAlign={"right"}
                  variant="subtitle2"
                  fontWeight={600}
                  onClick={() => handleSort("createdAt")}
                  style={{ cursor: "pointer" }}
                >
                  שעת מצוקה
                  <IconButton
                    size="small"
                    onClick={() => handleSort("createdAt")}
                  >
                    {sortBy === "createdAt" ? (
                      sortOrder === "desc" ? (
                        <ArrowDownward />
                      ) : (
                        <ArrowUpward />
                      )
                    ) : (
                      <SortOutlined />
                    )}
                  </IconButton>
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  textAlign={"right"}
                  variant="subtitle2"
                  fontWeight={600}
                  style={{ cursor: "pointer" }}
                >
                  מיקום תחילת האירוע
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  textAlign={"right"}
                  variant="subtitle2"
                  fontWeight={600}
                >
                  מאשרי היציאה
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"right"}
                  variant="subtitle2"
                  fontWeight={600}
                >
                  מאשרי ההגעה
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"right"}
                  variant="subtitle2"
                  fontWeight={600}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSort("updatedAt")}
                >
                  זמן עדכון אחרון
                  <IconButton
                    size="small"
                    onClick={() => handleSort("updatedAt")}
                  >
                    {sortBy === "updatedAt" ? (
                      sortOrder === "desc" ? (
                        <ArrowDownward />
                      ) : (
                        <ArrowUpward />
                      )
                    ) : (
                      <SortOutlined />
                    )}
                  </IconButton>
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedSosEvents.map((sosEvent) => (
              <SosEventHistory sosEvent={sosEvent} />
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default SosEventsHistory;
