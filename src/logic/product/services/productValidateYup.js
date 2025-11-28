import * as yup from "yup";
import { useHookForm } from "../../../hook/useHookForm";

const defaultValues = {
    productId: 0,
    name: "",
    isActive: true,
    subCategoryId:null,
    unitMeasureId: null
};

const dataShema = yup.object().shape({
    name: yup
        .string()
        .min(3, "Debe tener al menos 3 caracteres")
        .required("Ingrese una categoria"),
    subCategoryId: yup.object().required("La sub categoria es requerida"),
    unitMeasureId: yup.object().required("La unidad de medida es requerida"),
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
