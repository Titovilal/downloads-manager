"use client";
import { Box, IconButton, Table, Sheet, Button } from "@mui/joy";
import DeleteIcon from "@mui/icons-material/Delete";
import MoveUpIcon from "@mui/icons-material/MoveUp";
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
    <Sheet
      variant="outlined"
      sx={{
        borderRadius: "xl",
        "& thead th:nth-child(1)": { width: "80%" },
        "& thead th:nth-child(2)": { width: "10%" },
        "& thead th:nth-child(3)": { width: "10%" },
      }}
    >
      <Table>
        <caption>
          <Box sx={{ gap: "1rem", display: "flex", justifyContent: "center" }}>
            <Button
              color="neutral"
              variant="outlined"
              sx={{ borderRadius: "xl" }}
            >
              Select folder
            </Button>
            <Button
              color="neutral"
              variant="outlined"
              sx={{ borderRadius: "xl" }}
            >
              Go to downloads
            </Button>
          </Box>
        </caption>
        <thead>
          <tr>
            <th style={{ width: "40%" }}>File name</th>
            <th>Size (MB)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>{file.sizeMb}</td>
              <td>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                  <IconButton sx={{ borderRadius: "lg" }} variant="outlined">
                    <FolderZipIcon />
                  </IconButton>
                  <IconButton sx={{ borderRadius: "lg" }} variant="outlined">
                    <MoveUpIcon />
                  </IconButton>
                  <IconButton sx={{ borderRadius: "lg" }} variant="outlined">
                    <DeleteIcon />
                  </IconButton>
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
