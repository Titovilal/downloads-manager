import { Box, IconButton, Table } from "@mui/joy";
import DeleteIcon from "@mui/icons-material/Delete";
import MoveUpIcon from "@mui/icons-material/MoveUp";
import FolderZipIcon from "@mui/icons-material/FolderZip";
export default function FileTable() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Table aria-label="basic ">
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
                  <IconButton sx={{ borderRadius: "lg" }} variant="outlined">
                    {" "}
                    <FolderZipIcon />
                  </IconButton>
                  <IconButton sx={{ borderRadius: "lg" }} variant="outlined">
                    {" "}
                    <MoveUpIcon />
                  </IconButton>
                  <IconButton sx={{ borderRadius: "lg" }} variant="outlined">
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
    </>
  );
}
