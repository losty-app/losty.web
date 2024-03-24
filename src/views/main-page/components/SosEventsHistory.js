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
import { ArrowUpward, ArrowDownward, SortByAlpha } from "@mui/icons-material";

const SosEventsHistory = () => {
  const { sosEvents } = useSosEvents("HOME");
  const [sortedSosEvents, setSortedSosEvents] = useState([]);
  const [sortBy, setSortBy] = useState("status");
  const [sortOrder, setSortOrder] = useState("desc");

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
            backgroundColor: "#888", // Change this color as needed
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
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  textAlign={"right"}
                  variant="subtitle2"
                  fontWeight={600}
                  onClick={() => handleSort("place")}
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
                >
                  שעת עדכון אחרון
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedSosEvents.map((sosEvent) => (
              <TableRow key={sosEvent.id}>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        textAlign={"right"}
                        color="textSecondary"
                        sx={{
                          fontSize: "13px",
                        }}
                      >
                        {sosEvent.fullName}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    textAlign={"right"}
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {formatDateToIsraelLocale(sosEvent.createdAt)}
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
                        variant="subtitle2"
                        fontWeight={600}
                        sx={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {sosEvent.place.slice(0, 30) + "..." || " "}
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
                    {sosEvent.approvedOut &&
                      sosEvent.approvedOut.length > 0 &&
                      sosEvent.approvedOut.map((providerName) => (
                        <Box key={providerName}>
                          <Typography
                            textAlign={"right"}
                            color="textSecondary"
                            sx={{
                              fontSize: "13px",
                            }}
                          >
                            {providerName}
                          </Typography>
                        </Box>
                      ))}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {sosEvent.approvedDest &&
                      sosEvent.approvedDest.length > 0 &&
                      sosEvent.approvedDest.map((providerName) => (
                        <Box key={providerName}>
                          <Typography
                            textAlign={"right"}
                            color="textSecondary"
                            sx={{
                              fontSize: "13px",
                            }}
                          >
                            {providerName}
                          </Typography>
                        </Box>
                      ))}
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    textAlign={"right"}
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {formatDateToIsraelLocale(sosEvent.updatedAt)}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default SosEventsHistory;
