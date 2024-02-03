import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "src/contexts/AuthContext";
import Spline from "@splinetool/react-spline";
import { Box, CircularProgress } from "@mui/material";
import Logo from "../loggedIn/shared/logo/Logo";

const LoggedOutLayout = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  const handleSplineLoad = () => {
    setIsSplineLoaded(true);
  };

  return (
    <>
      <Spline
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          position: "absolute", // Add this line
          opacity: isSplineLoaded ? 0.3 : 0,
          transition: "opacity 3s",
        }}
        scene="https://prod.spline.design/pj7d1pf87cKyXVd9/scene.splinecode"
        onLoad={handleSplineLoad}
      ></Spline>
      {!isSplineLoaded && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent background
          }}
        >
          <Box display="flex" alignItems="center" justifyContent="center">
            <Logo />
          </Box>
        </div>
      )}
      {isSplineLoaded && (
        <div
          style={{
            opacity: isSplineLoaded ? 1 : 0,
            transition: "opacity 3s",
          }}
        >
          <Outlet />
        </div>
      )}
      {!isSplineLoaded && (
        <div
          style={{
            position: "fixed",
            bottom: "10%",
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent background
          }}
        >
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default LoggedOutLayout;
