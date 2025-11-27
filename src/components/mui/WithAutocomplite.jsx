import PropTypes from "prop-types";
import { TextField, Autocomplete } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import _ from "lodash";

const WithAutocomplite = ({
  label = "",
  data = [],
  value,
  disabled = false,
  name,
}) => {
  const defaultProps = {
    getOptionLabel: (option) => option[value] || "",
  };
  const { control } = useFormContext();

  return (
    <Controller
      key={name}
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          {...defaultProps}
          disablePortal
          key={name}
          disabled={disabled}
          autoHighlight
          options={data ?? []}
          defaultValue={null}
          onChange={(_, newValue) => field.onChange(newValue)}
          isOptionEqualToValue={(option, value) => option.id === value?.id}
          sx={{
            "& .MuiInputBase-root": { height: 41, padding: 0, marginTop: 0.3 },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              key={name}
              label={label}
              helperText={error?.message || ""}
              error={Boolean(error)}
            />
          )}
        />
      )}
    />
  );
};

WithAutocomplite.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  data: PropTypes.array,
  disabled: PropTypes.bool,
};

export { WithAutocomplite };
