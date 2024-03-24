import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Menu,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { IconListCheck, IconLogout, IconUser } from "@tabler/icons";

import LogoutConfirmationModal from "src/components/modal/LogoutConfirmationModal";
import { signOut } from "src/helpers/authHelper";
import { toast } from "react-toastify";
import LoadingModal from "src/components/loading/LoadingModal";
import { useDispatch, useSelector } from "react-redux";
import { getImageFromS3 } from "src/helpers/s3Helper";

const Profile = () => {
  const navigate = useNavigate();
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // State to control the modal
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const profile = useSelector((state) => state.profile);

  const fetchProfileImage = async () => {
    if (profile && profile.profileImage && profile.profileImage !== "") {
      const profileProfileImage = await getImageFromS3(profile.profileImage);
      setFile(profileProfileImage);
    }
  };

  useEffect(() => {
    fetchProfileImage();
  }, [profile && profile.profileImage]);

  const handleLogout = () => {
    setIsLogoutModalOpen(true); // Open the logout confirmation modal
  };

  const confirmLogout = async () => {
    try {
      setLoading(true);
      await signOut();
      dispatch({ type: "SET_PROFILE", payload: null });
      setLoading(false);
      navigate("/login");
    } catch (error) {
      toast.error("התנתקות נכשלה");
    }
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            color: "primary.main",
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          src={file}
          alt={"Profile Image"}
          sx={{
            width: 35,
            height: 35,
          }}
        />
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "200px",
          },
        }}
      >
        <MenuItem onClick={() => navigate("/")}>
          <ListItemIcon>
            <IconListCheck width={20} />
          </ListItemIcon>
          <ListItemText>ראשי</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => navigate("/profile")}>
          <ListItemIcon>
            <IconUser width={20} />
          </ListItemIcon>
          <ListItemText>הפרופיל שלי</ListItemText>
        </MenuItem>
        <MenuItem sx={{ color: "red" }} onClick={handleLogout}>
          <ListItemIcon sx={{ color: "red" }}>
            <IconLogout width={20} />
          </ListItemIcon>
          <ListItemText>התנתק</ListItemText>
        </MenuItem>
      </Menu>

      {/* Render the LogoutConfirmationModal */}
      <LogoutConfirmationModal
        open={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={confirmLogout}
      />
      <LoadingModal open={loading} text={"מתנתק..."} />
    </Box>
  );
};

export default Profile;
