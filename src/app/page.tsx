import { Box, Button, Sheet } from "@mui/joy";
import Header from "../components/Header";
import FileTable from "../components/FileTable";
import FavsTable from "../components/FavsTable";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <main>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `1fr 1fr 1fr`,
            minHeight: "100vh",
            gridTemplateRows: "3rem 1fr 2rem",
            gridTemplateAreas: `
              "top top top "
              "main main main"
              "bottom bottom bottom"`,
          }}
        >
          <Box sx={{ gridArea: "top" }}>
            <Header />
          </Box>

          <Box
            sx={{
              gridArea: "main",
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
              m: "2rem",
              gap: "2rem",
            }}
          >
            <FavsTable />
            <FileTable />
          </Box>

          <Box sx={{ gridArea: "bottom" }}>
            <Footer />
          </Box>
        </Box>
      </main>
    </>
  );
}
