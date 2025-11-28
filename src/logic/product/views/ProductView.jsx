import { Tooltip, IconButton, Typography } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import { WithMaterialReactTable } from "../../../components/material-react-table/WithMaterialReactTable"
import { useEffect, useMemo, useState } from "react";
import { productApi } from "../../../api";
import WithChip from "../../../components/mui/WithChip";
import { WithFabButton } from "../../../components/button/WithFabButton";
import { useHookProductService } from "../services/productValidateYup"
import { FormProvider } from "react-hook-form";
import { ProductForm } from "../forms/ProductForm"
import { WithBackdrop } from "../../../components";
import { swalError, swalSuccess } from "../../../components/Swal/WithSwal";

const ProductView = () => {
    const { useHook, reset } = useHookProductService()

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
        productApi.getAll().then(res => {
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
            { accessorKey: "categoryName", header: "CATEGORIA", size: 200 },
            { accessorKey: "subCategoryName", header: "SUB CATEGORIA", size: 200 },
            { accessorKey: "productName", header: "PRODUCTOS", size: 200 },
            { accessorKey: "unitMeasure", header: "U/M", size: 200 },
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
            unitMeasureId: data.unitMeasureId.unitMeasureId,
            subCategoryId: data.subCategoryId.subCategoryId
        }
        setData((x) => ({
            ...x,
            isOpen: !x.isOpen
        }))

        reset();

        handleLoading(true)
        if (dataSave.productId == 0) {
            productApi.create(dataSave).then(res => {
                 swalSuccess("Registro guardado");
            }).catch(error => { }).finally(() => {
                loadingData()
            }).finally(() => {
                handleLoading(false)
            })
        } else {
            productApi.update(dataSave.productId, dataSave).then(res => {
                 swalSuccess("Registro Actualizado");
            }).catch(error => {swalError("Ocurrio un error al modificar la categoria") }).finally(() => {
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

                        const data ={
                            name: row.original.productName,
                            productId: row.original.productId,
                            subCategoryId:{
                                subCategoryId: row.original.subCategoryId,
                                categoryName:row.original.subCategoryName
                            },
                             unitMeasureId:{
                                unitMeasureId: row.original.unitMeasureId,
                                 name: row.original.unitMeasure
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
                Productos
            </Typography>

            <FormProvider {...useHook}>
                <ProductForm
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

export default ProductView