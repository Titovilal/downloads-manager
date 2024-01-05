import { Typography } from "@mui/joy";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <Typography
        level="body-xs"
        sx={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          left: "2rem",
        }}
      >
        Version: 0.1.1
      </Typography>
      <Typography
        level="body-xs"
        sx={{ display: "flex", alignItems: "center" }}
      >
        Made with <FavoriteIcon color="error" sx={{ px: "0.2rem" }} />
        from Valencia
      </Typography>

      <Typography
        level="body-xs"
        sx={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          right: "2rem",
        }}
      >
        <Link href="https://github.com/Titovilal">
          <GitHubIcon sx={{ px: "0.1rem" }} /> Titovilal
        </Link>
      </Typography>
    </>
  );
}
