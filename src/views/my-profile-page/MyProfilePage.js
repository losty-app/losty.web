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
import { updateProviderMutation } from "src/helpers/mutationsHelper";
import { uploadFileToS3Bucket } from "src/helpers/s3Helper";
const Profile = ({
  firstName = "",
  lastName = "",
  tel = "",
  profileImageFile,
  onFirstNameChange,
  onLastNameChange,
  onProfileImageFileChange,
}) => {
  const [editingFirstName, setEditingFirstName] = useState(false);
  const [editingLastName, setEditingLastName] = useState(false);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);

  const handleFirstNameChange = (e) => {
    setNewFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setNewLastName(e.target.value);
  };

  const handleSaveFirstName = () => {
    onFirstNameChange(newFirstName);
    setEditingFirstName(false);
  };

  const handleSaveLastName = () => {
    onLastNameChange(newLastName);
    setEditingLastName(false);
  };

  const handleCancelFirstNameEdit = () => {
    setNewFirstName(firstName);
    setEditingFirstName(false);
  };

  const handleCancelLastNameEdit = () => {
    setNewLastName(lastName);
    setEditingLastName(false);
  };

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    onProfileImageFileChange(file);
    if (file) {
    } else {
      toast.error("נכשל להוסיף תמונה");
    }
  };
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={6} align="center">
        <Avatar
          src={profileImageFile}
          alt={firstName + " " + lastName}
          sx={{ width: 150, height: 150 }}
        />
        <Box mt={2}>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="fileInput"
            onChange={handleFileSelect}
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
        {editingFirstName ? (
          <Box mt={2} mb={2}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TextField
                value={newFirstName}
                onChange={handleFirstNameChange}
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
                onClick={handleCancelFirstNameEdit}
                color="secondary"
                style={{ margin: "8px" }}
              >
                בטל
              </Button>
              <Button
                style={{ margin: "8px" }}
                variant="contained"
                onClick={handleSaveFirstName}
                color="primary"
              >
                שמור
              </Button>
            </div>
          </Box>
        ) : (
          <Typography mb={2} variant="h4" gutterBottom>
            {firstName ? firstName : "הכנס שם פרטי"}
            <IconButton
              color="primary"
              onClick={() => setEditingFirstName(true)}
            >
              <IconEditCircle />
            </IconButton>
          </Typography>
        )}
        {editingLastName ? (
          <Box mt={2} mb={2}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TextField
                value={newLastName}
                onChange={handleLastNameChange}
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
                onClick={handleCancelLastNameEdit}
                color="secondary"
                style={{ margin: "8px" }}
              >
                בטל
              </Button>
              <Button
                style={{ margin: "8px" }}
                variant="contained"
                onClick={handleSaveLastName}
                color="primary"
              >
                שמור
              </Button>
            </div>
          </Box>
        ) : (
          <Typography mb={2} variant="h4" gutterBottom>
            {lastName ? lastName : "הכנס שם משפחה"}
            <IconButton
              color="primary"
              onClick={() => setEditingLastName(true)}
            >
              <IconEditCircle />
            </IconButton>
          </Typography>
        )}
        {tel && (
          <Typography
            sx={{ direction: "ltr", textAlign: "end" }}
            variant="body1"
            paragraph
          >
            {tel}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

const MyProfilePage = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState("");
  const [id, setId] = useState("");
  const [profileImageFile, setProfileImageFile] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchProfileImage = async () => {
    if (profile && profile.uriImage && profile.uriImage !== "") {
      const image = await getImageFromS3(profile.uriImage);
      setProfileImageFile(image);
    }
  };

  useEffect(() => {
    fetchProfileImage();
  }, [profile && profile.uriImage]);

  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    setId(profile?.id);
    setFirstName(profile?.firstName);
    setLastName(profile?.lastName);
    setTel(profile?.tel);
  }, []);

  const handleFirstNameChange = async (newFirstName) => {
    setLoading(true);
    try {
      const updatedProvider = {
        id,
        firstName: newFirstName,
      };
      dispatch({ type: "UPDATE_PROFILE", payload: updatedProvider });
      await updateProviderMutation(updatedProvider);
      setFirstName(newFirstName);
      setLoading(false);
      toast.success("שם הפרטי של הפרופיל שונה בהצלחה!");
    } catch (error) {
      toast.error("עדכון עריכת פרופיל נכשלה");
      setLoading(false);
    }
  };

  const onLastNameChange = async (newLastName) => {
    setLoading(true);
    try {
      const updatedProvider = {
        id,
        lastName: newLastName,
      };
      dispatch({ type: "UPDATE_PROFILE", payload: updatedProvider });
      await updateProviderMutation(updatedProvider);
      setLastName(newLastName);
      setLoading(false);
      toast.success("שם המשפחה של הפרופיל שונה בהצלחה!");
    } catch (error) {
      toast.error("עדכון עריכת פרופיל נכשלה");
      setLoading(false);
    }
  };

  const onProfileImageFileChange = async (file) => {
    setLoading(true);
    try {
      const uploadedProfileImageUri = await uploadFileToS3Bucket(file);
      const updatedProvider = {
        id,
        uriImage: uploadedProfileImageUri,
      };
      dispatch({ type: "UPDATE_PROFILE", payload: updatedProvider });
      await updateProviderMutation(updatedProvider);
      setLoading(false);
      toast.success("תמונת הפרופיל שונה בהצלחה!");
    } catch (error) {
      toast.error("עדכון תמונת הפרופיל נכשלה");
      setLoading(false);
    }
  };

  return (
    <PageContainer title="מסך פרופיל" description="זה הוא מסך הפרופיל">
      <DashboardCard title="מסך הפרופיל">
        <Profile
          firstName={firstName}
          lastName={lastName}
          tel={tel}
          profileImageFile={profileImageFile}
          onFirstNameChange={handleFirstNameChange}
          onLastNameChange={onLastNameChange}
          onProfileImageFileChange={onProfileImageFileChange}
        />
      </DashboardCard>
      <LoadingModal open={loading} text={"מעדכן פרטי פרופיל..."} />
    </PageContainer>
  );
};

export default MyProfilePage;
