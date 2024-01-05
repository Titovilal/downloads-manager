import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Card,
  Button,
  Box,
  IconButton,
  Typography,
  Divider,
  Input,
} from "@mui/joy";

export default function Favourites() {
  return (
    <Box sx={{ display: "flex", padding: "2rem" }}>
      <Card variant="soft" sx={{ overflow: "auto", height: "100%" }}>
        <Typography
          sx={{ display: "flex", justifyContent: "center" }}
          level="title-lg"
        >
          Favourite paths
        </Typography>
        <Button variant="outlined" color="neutral" sx={{ borderRadius: "xl" }}>
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
  );
}
