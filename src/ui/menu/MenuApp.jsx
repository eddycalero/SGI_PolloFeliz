import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useTheme } from "@mui/material/styles";
import { Box, Toolbar, useMediaQuery } from "@mui/material";

const MenuApp = () => {
  return (
    <>
      <h1>Hola mundo</h1>
    </>
  );
};

export { MenuApp };
