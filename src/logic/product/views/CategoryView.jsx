import { Tooltip, IconButton, Typography } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import { WithMaterialReactTable } from "../../../components/material-react-table/WithMaterialReactTable"
import { useEffect, useMemo, useState } from "react";
import { categoryApi } from "../../../api";
import WithChip from "../../../components/mui/WithChip";
import { WithFabButton } from "../../../components/button/WithFabButton";
import { useHookCategoryService } from "../services/categoryValidateYup"
import { FormProvider } from "react-hook-form";
import { SideBarCategoryForm } from "../forms/CategoryForm"
import { WithBackdrop } from "../../../components";
import { swalError, swalSuccess } from "../../../components/Swal/WithSwal";

const CategoryView = () => {
    const { useHook, reset } = useHookCategoryService()

    const [data, setData] = useState({
        table: [],
        isLoading: false,
        isOpen: false,
    });

    const handleLoading = (value) => {
        setData((x) => ({
            ...x,
            isLoading: value
        }))
        console.log(data)
    }

    const loadingData = () => {
        handleLoading(true)
        categoryApi.getAll().then(res => {
            setData((x) => ({
                ...x,
                table: res.data
            }))
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            handleLoading(false)
        })
    }

    const columns = useMemo(
        () => [
            { accessorKey: "name", header: "CATEGORIA", size: 200 },
            {
                accessorKey: "isDeleted",
                header: "ESTADO",
                size: 50,
                Cell: ({ cell }) => {
                    const label = cell.row.original.isActive;
                    return <WithChip
                        label={label ? "Activo" : "Inactivo"}
                        backgroundColor={label ? "#005a3a" : "#df463e"} />;
                },
            },
        ],
        []
    );

    useEffect(() => {
        loadingData()
    }, [])

    const saveData = (data) => {
        const dataSave = {
            ...data
        }
        setData((x) => ({
            ...x,
            isOpen: !x.isOpen
        }))

        reset();

        handleLoading(true)
        if (dataSave.categoryId == 0) {
            categoryApi.create(dataSave).then(res => {
                swalSuccess("Registro guardado");
            }).catch(error => { }).finally(() => {
                swalError("Ocurrio un error al guardar la categoria")
            }).finally(() => {
                handleLoading(false)
                loadingData()
            })
        } else {
            categoryApi.update(dataSave.categoryId, dataSave).then(res => {
                swalSuccess("Registro actualizado");
            }).catch(error => {
                  swalError("Ocurrio un error al modificar la categoria")
             }).finally(() => {
            }).finally(() => {
                loadingData()
                handleLoading(false)
            })
        }
    }

    const handleClosed = () => {
        setData((x) => ({
            ...x,
            isOpen: !x.isOpen
        }))
        reset();
    }

    const renderRowActions = ({ row }) => (
        <>
            <Tooltip title="Editar">
                <IconButton
                    color="primary"
                    onClick={() => {
                        setData((x) => ({
                            ...x,
                            isOpen: !x.isOpen
                        }))
                        const data = row.original
                        useHook.reset(data)
                    }}
                >
                    <EditIcon />
                </IconButton>
            </Tooltip>
        </>
    );

    return (
        <>
            <WithBackdrop open={data.isLoading} />
            <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                Categoria
            </Typography>

            <FormProvider {...useHook}>
                <SideBarCategoryForm
                    open={data.isOpen}
                    handleCarga={saveData}
                    handleClose={handleClosed} />
            </FormProvider>

            <WithMaterialReactTable
                data={data.table || []}
                column={columns}
                renderRowActions={renderRowActions} />

            <WithFabButton onClick={handleClosed}
            />
        </>
    )
}

export default CategoryView