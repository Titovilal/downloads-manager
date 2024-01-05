import { Box } from "@mui/joy";
import Header from "../components/Header";
import Favourites from "../components/Favourites";
import FileTable from "../components/FileTable";
import Footer from "../components/Footer";
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
            <Header />
          </Box>
          {/* main */}
          <Box sx={{ gridArea: "main", bgcolor: "white" }}>
            <Favourites />
            <FileTable />
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
            <Footer />
          </Box>
        </Box>
      </main>
    </>
  );
}
