

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CrudTable from "./ProductView";
import { useUserCrud } from "./useUserCrud";
import { usStates } from "./makeData";
import { useMemo } from "react";

const queryClient = new QueryClient();

const validateUser = (user) => ({
  firstName: !user.firstName ? "El nombre es obligatorio" : "",
  lastName: !user.lastName ? "El apellido es obligatorio" : "",
  email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email) ? "Email inválido" : "",
});

function UsersTable() {
  const { useGetUsers, useCreateUser, useUpdateUser, useDeleteUser } = useUserCrud();

  const { data = [], isError, isFetching, isLoading } = useGetUsers();
  const { mutateAsync: createUser, isPending: creating } = useCreateUser();
  const { mutateAsync: updateUser, isPending: updating } = useUpdateUser();
  const { mutateAsync: deleteUser, isPending: deleting } = useDeleteUser();

  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID", enableEditing: false },
      { accessorKey: "firstName", header: "Nombre" },
      { accessorKey: "lastName", header: "Apellido" },
      { accessorKey: "email", header: "Correo" },
      {
        accessorKey: "state",
        header: "Estado",
        editVariant: "select",
        editSelectOptions: usStates,
      },
    ],
    []
  );

  return (
    <CrudTable
      title="Usuario"
      columns={columns}
      data={data}
      isError={isError}
      isFetching={isFetching}
      isLoading={isLoading}
      isSaving={creating || updating || deleting}
      onCreate={createUser}
      onUpdate={updateUser}
      onDelete={deleteUser}
      validateFn={validateUser}
    />
  );
}

export default function UsersTableWithProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersTable />
    </QueryClientProvider>
  );
}
