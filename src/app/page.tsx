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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";
import MoveUpIcon from "@mui/icons-material/MoveUp";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
export default function Home() {
  return (
    <>
      <main>
        <Box
          sx={{
            display: "grid",
            bgcolor: "neutral.100",
            gridTemplateColumns: `1fr 1fr 1fr`,
            minHeight: "100vh",
            gridTemplateRows: "3rem 1fr 2rem",
            gridTemplateAreas: `
              "top top top "
              "main main main"
              "bottom bottom bottom"`,
          }}
        >
          {/* top */}
          <Box
            sx={{
              gridArea: "top",
              bgcolor: "neutral.100",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "2rem",
            }}
          >
            <Typography level="h3">Downloads manager</Typography>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <IconButton sx={{ borderRadius: "lg" }} variant="outlined">
                <ModeNightIcon />
              </IconButton>
              <IconButton sx={{ borderRadius: "lg" }} variant="outlined">
                <SettingsIcon />
              </IconButton>
            </Box>
          </Box>
          {/* main */}
          <Box sx={{ gridArea: "main", bgcolor: "white" }}>
            <Box sx={{ display: "flex", padding:'2rem' }}>
              <Card variant='soft' sx={{ overflow:'auto', height:'100%' }}>
                <Typography sx={{display:'flex', justifyContent:'center'}} level="title-lg">Favourite paths</Typography>
                <Button variant="outlined" color='neutral' sx={{ borderRadius: "xl" }}>
                  Add path
                </Button>
                <Divider />
                  <Input 
                    startDecorator={
                      <IconButton sx={{ borderRadius: "xl" }}>
                        <EditIcon />
                      </IconButton>
                    }
                    endDecorator={
                      <IconButton sx={{ borderRadius: "xl" }}>
                        <DeleteIcon />
                      </IconButton>
                    }
                    sx={{ borderRadius: "xl" }}
                  />
                  
                  <Input
                    startDecorator={
                      <IconButton sx={{ borderRadius: "xl" }}>
                        <EditIcon />
                      </IconButton>
                    }
                    endDecorator={
                      <IconButton sx={{ borderRadius: "xl" }}>
                        <DeleteIcon />
                      </IconButton>
                    }
                    sx={{ borderRadius: "xl" }}
                  />
                 
              </Card>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Table aria-label="basic table">
                <thead>
                  <tr>
                    <th style={{ width: "40%" }}>File name</th>
                    <th>Size (mb)</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Frozen yoghurt</td>
                    <td>159</td>
                    <td>
                      <Box sx={{ display: "flex", gap: "1rem" }}>
                        <IconButton
                          sx={{ borderRadius: "lg" }}
                          variant="outlined"
                        >
                          {" "}
                          <FolderZipIcon />
                        </IconButton>
                        <IconButton
                          sx={{ borderRadius: "lg" }}
                          variant="outlined"
                        >
                          {" "}
                          <MoveUpIcon />
                        </IconButton>
                        <IconButton
                          sx={{ borderRadius: "lg" }}
                          variant="outlined"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </td>
                  </tr>
                  <tr>
                    <td>Ice cream sandwich</td>
                    <td>237</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>Eclair</td>
                    <td>262</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>Cupcake</td>
                    <td>305</td>
                    <td>3.7</td>
                  </tr>
                  <tr>
                    <td>Gingerbread</td>
                    <td>356</td>
                    <td>16</td>
                  </tr>
                </tbody>
              </Table>
            </Box>
          </Box>
          {/* bottom */}
          <Box
            sx={{
              gridArea: "bottom",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
          </Box>
        </Box>
      </main>
    </>
  );
}
