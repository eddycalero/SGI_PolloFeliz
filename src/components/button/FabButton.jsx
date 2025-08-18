import { Box, Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

const FabButton = ({
  icon = <Add style={{ color: "white", fontSize: 25 }} />,
  onClick,
}) => {
  const style = {
    container: {
      position: "fixed",
      bottom: "1px",
      right: "16px",
      zIndex: 10,
    },
    box: {
      "& > :not(style)": { m: 1, marginRight: "auto" },
    },
    fab: {
      background: "#005a3a",
    },
  };

  return (
    <>
      <div style={style.container}>
        <Box sx={style.box}>
          <Fab style={style.fab} onClick={onClick}>
            {icon}
          </Fab>
        </Box>
      </div>
    </>
  );
};

export { FabButton };
