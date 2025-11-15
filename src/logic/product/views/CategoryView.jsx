import CrudTable from "./CrudTable";
import { fakeData, usStates } from "./makeData";
import axios from "axios";
import { useState, useEffect} from "react"


const API_URL = "https://192.168.1.25:5070/api/Category";

export default function CategoryView() {
    const [dataCategory, useDataCategory] = useState([])
    const columns = [
    { accessorKey: "categoryId", header: "Id" },
    { accessorKey: "name", header: "Category" },
    {
      accessorKey: "isActive",
      header: "State",
    
    
    },

  ];
  const getCategories = () => axios.get(API_URL);
  const handleCreate = (values) => console.log("Crear:", values);
  const handleUpdate = (values) => console.log("Actualizar:", values);
  const handleDelete = (id) => console.log("Eliminar:", id);

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) errors.firstName = "Campo requerido";
    if (!values.email) errors.email = "Campo requerido";
    return errors;
  };

  useEffect(() => {
   getCategories().then(res =>{ 
   console.log (res)
   useDataCategory(res.data)
    });
    
  }, []);

  return (
    <CrudTable
      title="Usuario"
      columns={columns}
      data={dataCategory}
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
