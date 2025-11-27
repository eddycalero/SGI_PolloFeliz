import * as yup from "yup";
import { useHookForm } from "../../../hook/useHookForm";

const defaultValues = {
    categoryId: 0,
    subCategoryId: 0,
    name: "",
    isActive: true,
};

const dataShema = yup.object().shape({
    name: yup
        .string()
        .min(3, "Debe tener al menos 3 caracteres")
        .required("Ingrese una categoria"),
    categoryId: yup.object().required("La categoria es requerida")
});

const useHookSubCategoryService = () => {
    const useHook = useHookForm({ defaultValues, dataShema });

    const reset = () => {
        useHook.reset(defaultValues);
    };

    return {
        useHook,
        reset,
    };
};

export{
    useHookSubCategoryService
}
