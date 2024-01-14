import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar({ handleDownloadCsv, handleOpen }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
            <HomeSharpIcon sx={{ fontSize: 18 }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: 16, fontWeight: 600 }}
          >
            Timetable
          </Typography>
          <Button
            color="inherit"
            size="large"
            sx={{ fontSize: 13 }}
            onClick={() => navigate("/create")}
          >
            Edit
          </Button>
          <Button
            onClick={handleDownloadCsv}
            color="inherit"
            size="large"
            sx={{ fontSize: 13 }}
          >
            CSV
          </Button>
          <Button
            onClick={handleOpen}
            color="inherit"
            size="large"
            sx={{ fontSize: 13, display: "flex", alignItems: "center" }}
          >
            Save
            <SaveIcon sx={{ ml: 1 }} />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
