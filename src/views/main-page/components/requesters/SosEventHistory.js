import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  TableCell,
  TableRow,
  IconButton,
} from "@mui/material";
import { formatDateToIsraelLocale } from "src/utils/utils";
import { MapSharp } from "@mui/icons-material";

const SosEventHistory = () => {
  return (
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
              color={"#1a237e"} // Dark blue color
              size="small"
              sx={{ cursor: "pointer" }} // Set cursor to pointer
              onClick={(requester) => {
                openGoogleMaps(requester);
              }}
            >
              {"לחצ/י למיקום"}
              <IconButton
                sx={{ color: "#1a237e" }}
                onClick={(requester) => {
                  openGoogleMaps(requester);
                }}
              >
                <MapSharp sx={{ fontSize: 20, color: "#1a237e" }} />
              </IconButton>
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
  );
};

export default SosEventHistory;
