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
import useRequesters from "src/hooks/useRequesters";
import {
  SortByAlpha,
  ArrowDownward,
  ArrowUpward,
  SortOutlined,
} from "@mui/icons-material";
import LiveRequester from "./requesters/LiveRequester";

const LiveRequesters = () => {
  const { requesters } = useRequesters("HOME");
  const [sortedRequesters, setSortedRequesters] = useState([]);
  const [sortBy, setSortBy] = useState("status");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    if (!sortBy) return;
    const sortedData = [...requesters].sort((a, b) => {
      if (sortBy === "name") {
        return sortOrder === "asc"
          ? a.firstName.localeCompare(b.firstName)
          : b.firstName.localeCompare(a.firstName);
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
    setSortedRequesters(sortedData);
  }, [requesters, sortBy, sortOrder]);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("desc");
    }
  };

  return (
    <DashboardCard title="טבלת מקבלי שירות">
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
                <Typography
                  textAlign={"right"}
                  variant="subtitle2"
                  fontWeight={600}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSort("name")}
                >
                  שם
                  <IconButton size="small" onClick={() => handleSort("name")}>
                    {sortBy === "name" ? (
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
              <TableCell>
                <Typography
                  textAlign={"right"}
                  variant="subtitle2"
                  fontWeight={600}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSort("status")}
                >
                  סטטוס
                  <IconButton size="small" onClick={() => handleSort("status")}>
                    {sortBy === "status" ? (
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
              <TableCell>
                <Typography
                  textAlign={"right"}
                  variant="subtitle2"
                  fontWeight={600}
                >
                  מיקום אחרון
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          {!requesters || requesters.length === 0 ? (
            <TableBody>
              <Typography textAlign={"right"}>אין משתמשים נוכחים</Typography>
            </TableBody>
          ) : (
            <TableBody>
              {sortedRequesters.map((requester) => (
                <LiveRequester
                  key={requester.id}
                  requester={requester}
                  handleLocationClick={handleLocationClick}
                />
              ))}
            </TableBody>
          )}
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default LiveRequesters;
