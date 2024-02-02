import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Button,
  TextField,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";
import { IconEditCircle, IconCamera } from "@tabler/icons";
import { toast } from "react-toastify";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { useDispatch, useSelector } from "react-redux";
import LoadingModal from "src/components/loading/LoadingModal";
import { updateUserMutation } from "src/helpers/mutationsHelper";
const Profile = ({
  name = "",
  phoneNumber = "",
  profilePicture,
  onNameChange,
  onPictureChange,
}) => {
  const [editingName, setEditingName] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSaveName = () => {
    onNameChange(newName);
    setEditingName(false);
  };

  const handleCancelNameEdit = () => {
    setNewName(name);
    setEditingName(false);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={6} align="center">
        <Avatar
          src={profilePicture}
          alt={name}
          sx={{ width: 150, height: 150 }}
        />
        <Box mt={2}>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="fileInput"
            onChange={onPictureChange}
          />
          <label htmlFor="fileInput">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <IconCamera />
            </IconButton>
          </label>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        {editingName ? (
          <Box mt={2} mb={2}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TextField
                value={newName}
                onChange={handleNameChange}
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px", // Add border radius
                    "& fieldset": {
                      borderColor: "rgba(0, 0, 0, 0.2)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(0, 0, 0, 0.3)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "rgba(0, 0, 0, 0.5)",
                    },
                  },
                }}
              />

              <Button
                variant="outlined"
                onClick={handleCancelNameEdit}
                color="secondary"
                style={{ margin: "8px" }}
              >
                בטל
              </Button>
              <Button
                style={{ margin: "8px" }}
                variant="contained"
                onClick={handleSaveName}
                color="primary"
              >
                שמור
              </Button>
            </div>
          </Box>
        ) : (
          <Typography mb={2} variant="h4" gutterBottom>
            {name ? name : "הכנס שם"}
            <IconButton color="primary" onClick={() => setEditingName(true)}>
              <IconEditCircle />
            </IconButton>
          </Typography>
        )}
        {phoneNumber && (
          <Typography
            sx={{ direction: "ltr", textAlign: "end" }}
            variant="body1"
            paragraph
          >
            {phoneNumber}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

const MyProfilePage = () => {
  const [currentName, setCurrentName] = useState("");
  const [tel, setTel] = useState("");
  const [id, setId] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    setId(profile?.id);
    setCurrentName(profile?.name);
    setTel(profile?.tel);
  }, []);

  const handleNameChange = async (newName) => {
    setLoading(true);
    try {
      const updatedProfile = {
        id,
        name: newName,
      };
      dispatch({ type: "UPDATE_PROFILE", payload: updatedProfile });
      await updateUserMutation(updatedProfile);
      setCurrentName(newName);
      setLoading(false);
      toast.success("שם הפרופיל שונה בהצלחה!");
    } catch (error) {
      toast.error("עדכון עריכת פרופיל נכשלה");
      setLoading(false);
    }
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setProfilePicture(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <PageContainer title="מסך פרופיל" description="זה הוא מסך הפרופיל">
      <DashboardCard title="מסך הפרופיל">
        <Profile
          name={currentName}
          phoneNumber={tel}
          profilePicture={profilePicture}
          onNameChange={handleNameChange}
          onPictureChange={handlePictureChange}
        />
      </DashboardCard>
      <LoadingModal open={loading} text={"מעדכן פרטי פרופיל..."} />
    </PageContainer>
  );
};

export default MyProfilePage;
