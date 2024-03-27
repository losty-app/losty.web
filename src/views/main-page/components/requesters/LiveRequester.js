import React from "react";
import {
  Typography,
  Box,
  TableCell,
  TableRow,
  IconButton,
} from "@mui/material";
import { formatDateToIsraelLocale } from "src/utils/utils";
import { MapSharp } from "@mui/icons-material";

const LiveRequester = ({ requester }) => {
  const openGoogleMaps = () => {
    if (!requester?.place) return;
    const { latitude, longitude } = JSON.parse(requester.place);
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    const windowName = `google_maps_${latitude}_${longitude}`; // Unique window name
    window.open(url, windowName, "_blank");
  };

  return (
    <TableRow key={requester.id}>
      <TableCell>
        <Typography
          textAlign={"right"}
          style={
            requester.isSOS
              ? { color: "red", fontSize: "18px", fontWeight: "bold" }
              : { color: "black", fontSize: "15px", fontWeight: "500" }
          }
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
                textAlign={"right"}
                sx={{
                  fontSize: "18px",
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                במצב חירום 🚨
              </Typography>
            ) : (
              <Typography
                textAlign={"right"}
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
            <Typography
              variant="subtitle2"
              fontWeight={600}
              textAlign={"right"}
              style={{ color: "black" }}
            >
              {formatDateToIsraelLocale(requester.updatedAt)}
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
            <Typography
              textAlign={"right"}
              variant="subtitle2"
              fontWeight={600}
              color={"#1a237e"} // Dark blue color
              size={requester.isSOS ? "large" : "small"} //
              sx={{ cursor: "pointer" }} // Set cursor to pointer
              onClick={openGoogleMaps}
            >
              {"לחצ/י למיקום"}
              <IconButton sx={{ color: "#1a237e" }} onClick={openGoogleMaps}>
                <MapSharp
                  sx={{
                    fontSize: requester.isSOS ? 22 : 15,
                    color: "#1a237e",
                  }}
                />
              </IconButton>
            </Typography>
          </Box>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default LiveRequester;
