import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const useHookForm = ({ defaultValues, dataShema }) => {
  const {
    reset,
    register,
    handleSubmit,
    getValues,
    setValue,
    setError,
    control,
    formState: { errors },
    watch,
    trigger,
  } = useForm({
    defaultValues,
    resolver: yupResolver(dataShema),
    mode: "onSubmit",
  });

  const methods = useForm({
      defaultValues,
    resolver: dataShema ? yupResolver(dataShema) : undefined,
    mode: "onSubmit",
  });

  return {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    errors,
    control,
    watch,
    setError,
    trigger,
    methods,
  };
};

export { useHookForm };
