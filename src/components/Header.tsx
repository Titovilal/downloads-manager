import ModeNightIcon from "@mui/icons-material/ModeNight";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Card,
  Button,
  Box,
  IconButton,
  Table,
  Typography,
  Divider,
  Input,
} from "@mui/joy";

export default function Header() {
  return (
    <>
      <Typography level="h3">Downloads manager</Typography>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <IconButton sx={{ borderRadius: "lg" }} variant="outlined">
          <ModeNightIcon />
        </IconButton>
        <IconButton sx={{ borderRadius: "lg" }} variant="outlined">
          <SettingsIcon />
        </IconButton>
      </Box>
    </>
  );
}
