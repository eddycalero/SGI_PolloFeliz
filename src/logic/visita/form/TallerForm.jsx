import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import dayjs from "dayjs";

import {
  WithTextField,
  WithSelect,
  WithSwitch,
  WithDatePicker,
} from "../../../components/mui";

const TallerForm = () => {
  const [value, setValue] = useState(dayjs(new Date()));
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [selectDepartament, setSelectDepartament] = useState("");

  const handleChangeDepartament = (event) => {
    setSelectDepartament(event.target.value);
  };

  const handleChangeDate = (date) => {
    setValue(date);
  };

  const listDepartament = [
    {
      id: 1,
      name: "Managua",
    },
    {
      id: 2,
      name: "Masaya",
    },
  ];

  useEffect(() => {
    console.log("departamtne", selectDepartament);
  }, [selectDepartament]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <WithTextField label={"Codigo"} placeholder="Auto generado" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <WithTextField label="Taller" placeholder="Ingresar Taller" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <WithDatePicker
            label={"Fecha Creacion"}
            value={value}
            onChange={handleChangeDate}
            disabled={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <WithSelect
            id={"departamentoId"}
            labelId={"departamentoId"}
            list={listDepartament}
            value={selectDepartament}
            name="Departamento"
            handleChange={handleChangeDepartament}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <WithTextField label="Cedula" placeholder="Ingresar Cedula" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <WithTextField label="Ruc" placeholder="Ingresar Ruc" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <WithTextField label="Telefono" placeholder="Ingresar Telefono" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <WithTextField fullWidth label="Correo" placeholder="Correo" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <WithTextField label="Primer Nombre" placeholder="Ingresar Taller" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <WithTextField label="Segundo Nombre" placeholder="Segundo Nombre" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <WithTextField
            label="Primer Apellido"
            placeholder="Primer Apellido"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <WithTextField label="Segundo Nombre" placeholder="Segundo Nombre" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <WithSwitch checked={checked} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <WithTextField
            multiline={true}
            row={1}
            label="Direccion"
            placeholder="Direccion"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <WithTextField
            multiline={true}
            row={3}
            label="Descripcion"
            placeholder="Ingresar Descripcion"
          />
        </Grid>
      </Grid>
    </>
  );
};

export { TallerForm };
