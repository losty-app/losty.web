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
import useSosEvents from "src/hooks/useSosEvents";
import { formatDateToIsraelLocale } from "src/utils/utils";

const SosEventsHistory = () => {
  const { sosEvents } = useSosEvents("HOME");

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
              <TableCell>
                <Typography
                  textAlign={"right"}
                  variant="subtitle2"
                  fontWeight={600}
                >
                  שם
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"right"}
                  variant="subtitle2"
                  fontWeight={600}
                >
                  שעת מצוקה
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  textAlign={"right"}
                  variant="subtitle2"
                  fontWeight={600}
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
                >
                  שעת עדכון אחרון
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          {!sosEvents || sosEvents.length === 0 ? (
            <TableBody>
              <Typography textAlign={"right"}>אין מקרי מצוקה קיימים</Typography>
            </TableBody>
          ) : (
            <TableBody>
              {sosEvents.map((sosEvent) => (
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
                          textAlign={"right"}
                          variant="subtitle2"
                          fontWeight={600}
                        >
                          {sosEvent.geoPlace}
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
                      {sosEvent.approvedOut.map((provider) => (
                        <Box>
                          <Typography
                            textAlign={"right"}
                            color="textSecondary"
                            sx={{
                              fontSize: "13px",
                            }}
                          >
                            {provider.name}
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
                      {sosEvent.approvedDest.map((provider) => (
                        <Box>
                          <Typography
                            textAlign={"right"}
                            color="textSecondary"
                            sx={{
                              fontSize: "13px",
                            }}
                          >
                            {provider.name}
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
          )}
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default SosEventsHistory;
