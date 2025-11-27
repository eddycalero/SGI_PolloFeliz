import { Tooltip, IconButton, Typography } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import { WithMaterialReactTable } from "../../../components/material-react-table/WithMaterialReactTable"
import { useEffect, useMemo, useState } from "react";
import { unitMeasureApi } from "../../../api";
import WithChip from "../../../components/mui/WithChip";
import { WithFabButton } from "../../../components/button/WithFabButton";
import { useHookUnitMeasureService } from "../services/unitMeasureValidateYup"
import { FormProvider } from "react-hook-form";
import { SideBarUnitMeasureForm } from "../forms/UnitMeasureForm"
import { WithBackdrop } from "../../../components";

const UniMeasureView = () => {
    const { useHook, reset } = useHookUnitMeasureService()

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
        unitMeasureApi.getAll().then(res => {
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
            { accessorKey: "name", header: "UNIDAD DE MEDIDA", size: 200 },
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
        if (dataSave.unitMeasureId == 0) {
            unitMeasureApi.create(dataSave).then(res => {
            }).catch(error => { }).finally(() => {
                loadingData()
            }).finally(() => {
                handleLoading(false)
            })
        } else {
            unitMeasureApi.update(dataSave.unitMeasureId, dataSave).then(res => {
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
                Unidad de Medida
            </Typography>

            <FormProvider {...useHook}>
                <SideBarUnitMeasureForm
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

export default UniMeasureView