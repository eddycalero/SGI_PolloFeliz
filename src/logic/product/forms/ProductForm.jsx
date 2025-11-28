import { Divider, Button, Grid, Box, Typography, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import { WithSwipeableDrawer } from "../../../components/sidebar/WithSwipeableDrawer"
import { WithAutocomplite, WithSwitchForm, WithTextField } from "../../../components"
import { useEffect, useState } from "react";
import { subCategoryApi, unitMeasureApi } from "../../../api";

const ProductForm = ({ open, handleClose, handleCarga }) => {
    const { handleSubmit } = useFormContext();

    const [listData, setData]=useState({
        subCategory: [],
        unitMeasure: []
    })

    useEffect(()=>{
        subCategoryApi.getAll().then(x =>{
            const result = x.data?.filter(x => x.isActive);
            setData((x)=>({
                ...x,
                 subCategory: result
            }))
        }).catch(error => {
        })

          unitMeasureApi.getAll().then(x =>{
            const result = x.data?.filter(x => x.isActive);
               setData((x)=>({
                ...x,
                   unitMeasure: result
            }))
        }).catch(error =>{
        })

    }, [])

    return (
        <>
            <WithSwipeableDrawer open={open} handleClose={handleClose}>
                <form onSubmit={handleSubmit(handleCarga)}>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ mt: 1 }}
                    >
                        <Grid item>
                            <Box display="flex" alignItems="center" gap={1}>
                                <Typography variant="subtitle2" color="primary">
                                    {"Productos"}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item>
                            <IconButton
                                onClick={handleClose}
                                aria-label="Cerrar"
                                size="small"
                                sx={{
                                    color: "text.secondary",
                                    "&:hover": { color: "error.main" },
                                }}
                            >
                                <ClearIcon fontSize="small" />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Divider />

                    <div className="space-y-2 mt-5">
                        <WithTextField
                            name={"name"}
                            label="Nombre"
                            placeholder="Ingresar un Producto"
                        />
                        <WithAutocomplite
                            data={listData.subCategory}
                            label="Sub Categoria"
                            value={"categoryName"}
                            name={"subCategoryId"}
                        />

                        <WithAutocomplite
                            data={listData.unitMeasure}
                            label="Unidad de Medida"
                            value={"name"}
                            name={"unitMeasureId"}
                        />
                        <WithSwitchForm name={"isActive"} />
                    </div>

                    <div className="flex">

                        <Button
                            style={{ fontSize: 12 }}
                            type="submit"
                            fullWidth
                            startIcon={<EditIcon color="white" className="mx-4" />}
                            variant="contained"
                        >
                            {"Guardar"}
                        </Button>

                        <Button
                            onClick={handleClose}
                            style={{ fontSize: 12, marginTop: 2 }}

                            color="error"
                            fullWidth
                            startIcon={<ClearIcon color="white" className="mx-4" />}
                            variant="outlined"
                        >
                            {"Cerrar"}
                        </Button>


                    </div>



                </form>
            </WithSwipeableDrawer>
        </>
    );
};

ProductForm.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    handleCarga: PropTypes.func,
};

export {
   ProductForm
}
