import { Typography, Box } from "@mui/joy";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        px: "1rem",
        bgcolor: "neutral.100",
      }}
    >
      <Typography level="body-xs">Version: 0.1.1</Typography>
      <Typography level="body-xs">
        Made with
        <FavoriteIcon color="error" sx={{ px: "0.2rem" }} />
        from Valencia
      </Typography>

      <Typography level="body-xs">
        <Link href="https://github.com/Titovilal">
          <GitHubIcon sx={{ px: "0.1rem" }} /> Titovilal
        </Link>
      </Typography>
    </Box>
  );
}
