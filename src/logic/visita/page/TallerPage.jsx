import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

import { FabButton } from "../../../components";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  TextField,
  Button,
  Grid,
  SwipeableDrawer,
  IconButton,
  Stack,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Switch,
} from "@mui/material";
import { CloseOutlined } from "@ant-design/icons";
import { SaveAs } from "@mui/icons-material";

const data = [
  {
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Joe",
      lastName: "Doe",
    },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
];

const TallerPage = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  const [isOpen, setisOpen] = useState(false);

  const onClickOpen = () => {
    setisOpen(!isOpen);
  };

  const [selectDepartament, setSelectDepartament] = useState("");

  const handleChangeDepartament = (event) => {
    setSelectDepartament(event.target.value);
  };

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const navigate = useNavigate();

  const routeNewTaller = () => navigate("/taller/new");

  return (
    <>
      <MaterialReactTable table={table} />
      <FabButton onClick={routeNewTaller} />

      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onOpen={onClickOpen}
        onClose={onClickOpen}
        sx={{
          fontSize: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        width={500}
      >
        <IconButton
          edge="start"
          color="inherit"
          onClick={onClickOpen}
          sx={{
            borderRadius: "50%",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <CloseOutlined />
        </IconButton>

        <Stack style={{ marginTop: 25, padding: 4 }}>
          <Typography marginLeft={1}>Nuevo Taller</Typography>

          <Stack style={{ marginTop: 15, padding: 4 }} spacing={2}>
            <TextField
              variant="outlined"
              label="Taller"
              placeholder="Ingresar Taller"
              autoComplete="off"
              style={{ width: 260 }}
            />

            <TextField
              variant="outlined"
              label="Propietario"
              placeholder="Ingresar Propietario"
              autoComplete="off"
              style={{ width: 260 }}
            />

            <TextField
              variant="outlined"
              label="Taller"
              placeholder="Ingresar Taller"
              autoComplete="off"
              style={{ width: 260 }}
            />

            <Box sx={{ minWidth: 100 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Departamento
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectDepartament}
                  label="Age"
                  onChange={handleChangeDepartament}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <TextField
              variant="outlined"
              label="Direccion"
              placeholder="Ingresar Direccion"
              autoComplete="off"
              multiline
              rows={5}
              style={{ width: 260 }}
            />
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Button fullWidth variant="contained" startIcon={<SaveAs />}>
              Guardar
            </Button>
          </Stack>
        </Stack>
      </SwipeableDrawer>
    </>
  );
};

export default TallerPage;
