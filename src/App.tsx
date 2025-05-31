import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Resume from "./components/Resume";
import data from "./data";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.05)",
        }}
      >
        <Container component="main" maxWidth="lg" sx={{ paddingY: 3 }}>
          <Resume data={data} />
        </Container>
      </Box>
    </>
  );
}
