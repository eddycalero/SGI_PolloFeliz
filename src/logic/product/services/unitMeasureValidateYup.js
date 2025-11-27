import * as yup from "yup";
import { useHookForm } from "../../../hook/useHookForm";

const defaultValues = {
    unitMeasureId: 0,
    name: "",
    isActive: true,
};

const dataShema = yup.object().shape({
    name: yup
        .string()
        .min(3, "Debe tener al menos 5 caracteres")
        .required("Ingrese una unidad de medida"),
});

const useHookUnitMeasureService = () => {
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
    useHookUnitMeasureService
}
