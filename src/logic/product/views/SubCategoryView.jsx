import { Tooltip, IconButton, Typography } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import { WithMaterialReactTable } from "../../../components/material-react-table/WithMaterialReactTable"
import { useEffect, useMemo, useState } from "react";
import { subCategoryApi } from "../../../api";
import WithChip from "../../../components/mui/WithChip";
import { WithFabButton } from "../../../components/button/WithFabButton";
import { FormProvider } from "react-hook-form";
import { SidebarSubCategoryForm } from "../forms/SubCategoryForm"
import { WithBackdrop } from "../../../components";
import { useHookSubCategoryService } from "../services/subCategoryValidateYup";
import { swalError, swalSuccess } from "../../../components/Swal/WithSwal";

const SubCategoryView = () => {
    const { useHook, reset } = useHookSubCategoryService()

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
    }

    const loadingData = () => {
        handleLoading(true)
        subCategoryApi.getAll().then(res => {
            setData((x) => ({
                ...x,
                table: res.data
            }))
        }).catch(error => {
        }).finally(() => {
            handleLoading(false)
        })
    }

    const columns = useMemo(
        () => [
            { accessorKey: "categoryName", header: "CATEGORIA", size: 200 },
            { accessorKey: "subCategoryName", header: "SUB CATEGORIA", size: 200 },
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
            ...data,
            categoryId: data.categoryId.categoryId
        }
        setData((x) => ({
            ...x,
            isOpen: !x.isOpen
        }))

        reset();

        handleLoading(true)
        if (dataSave.subCategoryId == 0) {
            subCategoryApi.create(dataSave).then(res => {
                 swalSuccess("Registro guardado");
            }).catch(error => {  }).finally(() => {
                loadingData()
            }).finally(() => {
                handleLoading(false)
            })
        } else {
            subCategoryApi.update(dataSave.subCategoryId, dataSave).then(res => {
                 swalSuccess("Registro Actualizado");
            }).catch(error => {
                swalError("Ocurrio un error al modificar la categoria")
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
                        const data = {
                            name:row.original.subCategoryName,
                            subCategoryId:row.original.subCategoryId,
                            isActive:row.original.isActive,
                            categoryId:{
                                categoryId: row.original.categoryId,
                                name: row.original.categoryName
                            }
                        }
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
               Sub Categoria
            </Typography>

            <FormProvider {...useHook}>
                <SidebarSubCategoryForm
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

export default SubCategoryView