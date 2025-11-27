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
        console.log(data)
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
            { accessorKey: "name", header: "PRODUCTOS", size: 200 },
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
        if (dataSave.productId == 0) {
            productApi.create(dataSave).then(res => {
            }).catch(error => { }).finally(() => {
                loadingData()
            }).finally(() => {
                handleLoading(false)
            })
        } else {
            productApi.update(dataSave.productId, dataSave).then(res => {
            }).catch(error => { }).finally(() => {
                loadingData()
            }).finally(() => {
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