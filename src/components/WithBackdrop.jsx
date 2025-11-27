import { Backdrop } from "@mui/material";
import { RingSpinner } from "react-spinner-overlay";
import PropTypes from "prop-types";

const WithBackdrop = ({ open }) => {
  return (
    <div>
      <Backdrop sx={{ color: "#FFFFFF", zIndex: 15000 }} open={open}>
        <RingSpinner
          loading={open}
          overlayColor="rgba(0, 0, 0, 0.8)"
                  color="#FFFFFF"
          size={100}
          borderWidth={3}
        />
      </Backdrop>
    </div>
  );
};

WithBackdrop.propTypes = {
  open: PropTypes.bool.isRequired,
};

export { WithBackdrop };
