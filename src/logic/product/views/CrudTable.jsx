import { useState } from "react";
import {
  MaterialReactTable,
  MRT_EditActionButtons,
  useMaterialReactTable,
} from "material-react-table";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CrudTable({
  title,
  columns,
  data,
  isLoading,
  isFetching,
  isError,
  isSaving,
  onCreate,
  onUpdate,
  onDelete,
  validateFn,
}) {
  const [validationErrors, setValidationErrors] = useState({});

  const handleCreate = async ({ values, table }) => {
    const errors = validateFn ? validateFn(values) : {};
    if (Object.values(errors).some(Boolean)) {
      setValidationErrors(errors);
      return;
    }
    await onCreate(values);
    setValidationErrors({});
    table.setCreatingRow(null);
  };

  const handleUpdate = async ({ values, table }) => {
    const errors = validateFn ? validateFn(values) : {};
    if (Object.values(errors).some(Boolean)) {
      setValidationErrors(errors);
      return;
    }
    await onUpdate(values);
    setValidationErrors({});
    table.setEditingRow(null);
  };

  const confirmDelete = (row) => {
    if (window.confirm("¿Seguro que deseas eliminar este registro?")) {
      onDelete(row.original.id);
    }
  };

  const table = useMaterialReactTable({
    columns,
    data,
    createDisplayMode: "modal",
    editDisplayMode: "modal",
    enableEditing: true,
    getRowId: (row) => row.id,
    muiToolbarAlertBannerProps: isError
      ? { color: "error", children: "Error al cargar los datos" }
      : undefined,
    muiTableContainerProps: { sx: { minHeight: "500px" } },
    onCreatingRowCancel: () => setValidationErrors({}),
    onEditingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreate,
    onEditingRowSave: handleUpdate,
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle>Crear {title}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {internalEditComponents}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle>Editar {title}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {internalEditComponents}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Editar">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Eliminar">
          <IconButton color="error" onClick={() => confirmDelete(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button variant="contained" onClick={() => table.setCreatingRow(true)}>
        Agregar {title}
      </Button>
    ),
    state: {
      isLoading,
      isSaving,
      showAlertBanner: isError,
      showProgressBars: isFetching,
    },
  });

  return <MaterialReactTable table={table} />;
}
