import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const WithSelect = ({ id, labelId, list = [], handleChange, value, name }) => {
  return (
    <>
      <Box sx={{ minWidth: 100 }}>
        <FormControl fullWidth>
          <InputLabel id={labelId}>{name}</InputLabel>
          <Select
            labelId={labelId}
            id={id}
            value={value}
            onChange={handleChange}
            sx={{
              border: "none",
              "&:hover": {
                boxShadow: "none",
              },
              "&:focus": {
                boxShadow: "none",
              },
              "&.Mui-focused": {
                boxShadow: "none",
              },
            }}
          >
            {list.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export { WithSelect };
