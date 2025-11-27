import { Switch } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const WithSwitchForm = ({ name, disabled = false }) => {
  if (!name) {
    return null;
  }

  const { control } = useFormContext();

  const inputProps = {
    style: {
      pointerEvents: disabled ? "none" : "auto",
      cursor: disabled ? "not-allowed" : "pointer",
    },
  };


  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Switch
            {...field}
            name={name}
            onChange={(_, newValue) => field.onChange(newValue)}
            checked={field.value || false}
            inputProps={inputProps}
          />
        )}
      />
    </>
  );
};

export { WithSwitchForm };
