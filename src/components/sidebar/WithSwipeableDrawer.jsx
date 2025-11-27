import { Box, SwipeableDrawer, useMediaQuery, useTheme } from "@mui/material";
import PropTypes from "prop-types";

const WithSwipeableDrawer = ({
  open = false,
  handleClose,
  children,
  anchor = "right",
  width = 380,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCancel = () => {
    handleClose();
  };

  return (
    <SwipeableDrawer
      style={{ zIndex: 11000 }}
      anchor={anchor}
      open={open}
      onClose={handleCancel}
      onOpen={handleCancel}
    >
      <Box
        sx={{
          width:
            anchor === "top" || anchor === "bottom"
              ? "auto"
              : isMobile
              ? "100vw"
              : width,
          px: 1,
        }}
      >
              {children}
      </Box>
    </SwipeableDrawer>
  );
};

WithSwipeableDrawer.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.any,
  anchor: PropTypes.string,
  width: PropTypes.number,
};

export { WithSwipeableDrawer };
