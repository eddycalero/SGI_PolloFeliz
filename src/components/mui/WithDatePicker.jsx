import { Box } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const WithDatePicker = ({ label, value, onChange, disabled = false }) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          format="YYYY-MM-DD"
          disabled={disabled}
          label={label}
          value={value}
          onChange={onChange}
          fullWidth
          sx={{ width: "100%" }}
          renderInput={(props) => (
            <TextField
              {...props}
              InputProps={{
                style: {
                  border: "none",
                  boxShadow: "none",
                },
              }}
              variant="outlined"
            />
          )}
          slotProps={{ textField: { variant: "outlined" } }}
        />
      </LocalizationProvider>
    </>
  );
};

export { WithDatePicker };
