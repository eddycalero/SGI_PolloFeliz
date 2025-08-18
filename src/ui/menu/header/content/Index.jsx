import { Box, useMediaQuery } from "@mui/material";
// import { Box, IconButton, Link, useMediaQuery } from '@mui/material';
// import { GithubOutlined } from '@ant-design/icons';

import Search from "./Search";
import Profile from "./profile";
import MobileSection from "./MobileSection";

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: "100%", ml: 1 }} />}

    
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
