import * as yup from "yup";
import { useHookForm } from "../../../hook/useHookForm";

const defaultValues = {
    productId: 0,
    name: "",
    isActive: true,
};

const dataShema = yup.object().shape({
    name: yup
        .string()
        .min(3, "Debe tener al menos 3 caracteres")
        .required("Ingrese una categoria"),
});

const useHookProductService = () => {
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
    useHookProductService
}
