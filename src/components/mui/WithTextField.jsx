import { TextField } from "@mui/material";

const WithTextField = ({ label, placeholder, multiline = false, row = 1 }) => {
  return (
    <>
      <TextField
        fullWidth
        multiline={multiline}
        rows={row}
        label={label}
        placeholder={placeholder}
        InputProps={{
          style: {
            border: "none",
            boxShadow: "none",
          },
        }}
      />
    </>
  );
};

export { WithTextField };
