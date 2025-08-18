import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import DrawerHeaderStyled from "./DrawerHeaderStyled";
import Logo from "../../../../components/LogoSection";

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Logo />
        <Typography>v1.0.0</Typography>
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool,
};

export default DrawerHeader;
