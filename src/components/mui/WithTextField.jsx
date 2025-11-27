/* eslint-disable react-hooks/rules-of-hooks */
import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
import { useState } from "react";
// import InputAdornment from "@mui/material/InputAdornment";

const WithTextField = ({
  name,
  label,
  placeholder,
  multiline = false,
  row = 1,
  type = "text",
  disabled = false,
  mask = null,
}) => {
  if (!name) {
    return null;
  }

  const { control, errors } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const inputProps = {
    readOnly: disabled,
    style: {
      border: "none",
      boxShadow: "none",
    },
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, name } }) => {
        const textFieldProps = {
          fullWidth: true,
          name,
          multiline,
          rows: row,
          label,
          value: value || "",
          onChange: (e) => onChange(e.target.value),
          helperText: errors[name]?.message || "",
          error: !!errors[name],
          placeholder,
          InputProps: {
            ...inputProps,
          },
          type: isPassword ? (showPassword ? "text" : "password") : type,
        };

        return <TextField {...textFieldProps} />
      }}
    />
  );
};

WithTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
  row: PropTypes.number,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  mask: PropTypes.string,
};

export { WithTextField };
