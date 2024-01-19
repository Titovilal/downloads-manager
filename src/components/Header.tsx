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
  Sheet,
} from "@mui/joy";

export default function Header() {
  return (
    <>
      <Sheet
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          px: "1rem",
          bgcolor: "neutral.100",
        }}
      >
        <Typography level="h3">Downloads manager</Typography>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <IconButton sx={{ borderRadius: "lg" }} variant="outlined">
            EN
          </IconButton>
          <IconButton sx={{ borderRadius: "lg" }} variant="outlined">
            <ModeNightIcon />
          </IconButton>
          <IconButton sx={{ borderRadius: "lg" }} variant="outlined">
            <SettingsIcon />
          </IconButton>
        </Box>
      </Sheet>
    </>
  );
}
