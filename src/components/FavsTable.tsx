"use client";
import { Box, IconButton, Table, Sheet, Tooltip, Typography, Button } from "@mui/joy";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import React, { useState, useEffect } from "react";
import { Add } from "@mui/icons-material";

interface File {
  name: string;
  sizeMb: number;
}

const getFileSizeMb = (sizeInBytes: number): number => {
  return sizeInBytes / (1024 * 1024);
};

const FileTable: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    // Aquí deberías obtener la lista de archivos y sus tamaños.
    // En este ejemplo, uso un array de objetos para representar la información.
    const sampleFiles: File[] = [
      { name: "Frozen yoghurt", sizeMb: 159 },
      { name: "Ice cream sandwich", sizeMb: 237 },
      { name: "Eclair", sizeMb: 262 },
      { name: "Cupcake", sizeMb: 305 },
      { name: "Gingerbread", sizeMb: 356 },
    ];

    setFiles(sampleFiles);
  }, []);

  return (
    <Sheet variant="outlined" sx={{ borderRadius: "xl" }}>
      <Table>
        <caption><Button color="neutral" variant='outlined' startDecorator={<Add />} sx={{borderRadius: 'xl'}}>Add favourite folder</Button></caption>
        <thead>
          <tr>
            <th>File name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                  <Tooltip title="Edit">
                    <IconButton sx={{ borderRadius: "lg" }} variant="outlined">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton sx={{ borderRadius: "lg" }} variant="outlined">
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
};

export default FileTable;
