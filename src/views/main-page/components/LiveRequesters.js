import React, { useEffect, useState } from "react";
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

const LiveRequesters = () => {
  const { requesters } = useRequesters("HOME");
  const [sortedRequesters, setSortedRequesters] = useState([]);

  useEffect(() => {
    setSortedRequesters([...requesters].sort((a, b) => (b.isSOS ? 1 : -1)));
  }, [requesters]);

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
          {!requesters || requesters.length === 0 ? (
            <TableBody>
              <Typography>אין משתמשים נוכחים</Typography>
            </TableBody>
          ) : (
            <TableBody>
              {sortedRequesters.map((requester) => (
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
                        {requester.isSOS ? (
                          <Typography
                            sx={{
                              fontSize: "16px",
                              color: "red",
                            }}
                          >
                            במצב חירום
                          </Typography>
                        ) : (
                          <Typography
                            color="textSecondary"
                            sx={{
                              fontSize: "13px",
                            }}
                          >
                            במצב בטוח
                          </Typography>
                        )}
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
          )}
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default LiveRequesters;
