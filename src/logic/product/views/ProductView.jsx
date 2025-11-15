import CrudTable from "./CrudTable";
import { fakeData, usStates } from "./makeData";

export default function ProductView() {
  const columns = [
    { accessorKey: "firstName", header: "First Name" },
    {
      accessorKey: "state",
      header: "State",
      editVariant: "select",
      editSelectOptions: usStates,
    },
  ];

  const handleCreate = (values) => console.log("Crear:", values);
  const handleUpdate = (values) => console.log("Actualizar:", values);
  const handleDelete = (id) => console.log("Eliminar:", id);

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) errors.firstName = "Campo requerido";
    if (!values.email) errors.email = "Campo requerido";
    return errors;
  };

  return (
    <CrudTable
      title="Usuario"
      columns={columns}
      data={fakeData}
      isLoading={false}
      isFetching={false}
      isError={false}
      isSaving={false}
      onCreate={handleCreate}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
      validateFn={validate}
    />
  );
}
