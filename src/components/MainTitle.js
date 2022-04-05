import { Box, Typography } from "@mui/material";

function MainTitle() {
  return (
    <Box
      sx={{
        width: 1,
        border: 1,
      }}
    >
      <Typography variant="h3" component="h1" align="center">
        Keyboard Speed
      </Typography>
    </Box>
  );
}

export default MainTitle;
