import { Chip } from "@mui/material";
import PropTypes from "prop-types";

const WithChip = ({ label, backgroundColor }) => {
  const color = "white";
  return (
    <Chip
      label={label}
      sx={{
        backgroundColor,
        color,
        "& .MuiChip-label": {
          display: "block",
          whiteSpace: "normal",
        },
      }}
    />
  );
};

WithChip.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default WithChip;
