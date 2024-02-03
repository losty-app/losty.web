import { Link } from "react-router-dom";
import icon from "src/assets/images/logos/icon.png";
import { Typography, styled } from "@mui/material";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
  textDecoration: "none",
}));

const Logo = () => {
  return (
    <LinkStyled
      to="/"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        color="primary"
        mx={2}
        variant="h4"
        style={{ textDecoration: "none" }}
      >
        LOSTY
      </Typography>
      <img src={icon} height={40} />
    </LinkStyled>
  );
};

export default Logo;
