import { Switch } from "@mui/material";

const WithSwitch = ({ checked, onChange }) => {
  return (
    <>
      <Switch
        checked={checked}
        onChange={onChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </>
  );
};

export { WithSwitch };
