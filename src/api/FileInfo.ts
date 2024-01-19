import fs from 'fs';
import path from 'path';

export async function getFilesInfo(directoryPath: string): Promise<{ fileName: string; sizeInGB: number }[]> {
  try {
    const files = await fs.promises.readdir(directoryPath);

    const filesInfo = await Promise.all(
      files.map(async (fileName) => {
        const filePath = path.join(directoryPath, fileName);
        const stats = await fs.promises.stat(filePath);
        const sizeInGB = stats.size / (1024 * 1024 * 1024); // Convert bytes to gigabytes

        return { fileName, sizeInGB };
      })
    );

    return filesInfo;
  } catch (error) {
    console.error('Error reading directory:', error);
    throw error;
  }
}
