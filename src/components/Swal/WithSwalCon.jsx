import { GlobalStyles } from "@mui/material";

export const SwalGlobalStyles = () => (
  <GlobalStyles
    styles={{
      ".swal2-container": {
        zIndex: 3000, 
      },
      ".swal2-popup": {
        zIndex: 3001,
      },
    }}
  />
);
