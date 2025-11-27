/* eslint-disable react/prop-types */
import { Box, Fab } from "@mui/material";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import PropTypes from "prop-types";

const WithFabButton = ({
  icon = <SaveAsIcon style={{ color: "white", fontSize: 30 }} />,
  onClick = () => {},
  type = "button",
  disabled = false,
  container = {
    position: "fixed",
    bottom: "1px",
    right: "25px",
    zIndex: 10,
  },
}) => {
  const style = {
    container: container,
    box: {
      "& > :not(style)": { m: 1, marginRight: "auto" },
    },
    fab: {
      background: "#00695c",
    },
  };

  return (
    <>
      <div style={style.container}>
        <Box sx={style.box}>
          <Fab
            type={type}
            color="primary"
            onClick={onClick}
            disabled={disabled}
          >
            {icon}
          </Fab>
        </Box>
      </div>
    </>
  );
};

WithFabButton.propTypes = {
  icon: PropTypes.any,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export { WithFabButton };
