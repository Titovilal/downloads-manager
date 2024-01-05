import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
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
        <Box sx={{ display: "flex" , justifyContent: "space-between"}}>
          <Typography
            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            level="title-md"
          >
            Favourite paths
          </Typography>
          <Button
          size='sm'
            variant="outlined"
            color="neutral"
            startDecorator={<AddIcon />}
            sx={{ borderRadius: "xl" }}
          >
            Add path
          </Button>
        </Box>
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
