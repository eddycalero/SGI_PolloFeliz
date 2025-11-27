import * as yup from "yup";
import { useHookForm } from "../../../hook/useHookForm";

const defaultValues = {
    categoryId: 0,
    name: "",
    isActive: true,
};

const dataShema = yup.object().shape({
    name: yup
        .string()
        .min(3, "Debe tener al menos 3 caracteres")
        .required("Ingrese una categoria"),
});

const useHookCategoryService = () => {
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
    useHookCategoryService
}
