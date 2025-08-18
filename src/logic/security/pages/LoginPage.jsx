import { Link } from "react-router-dom";
import { Grid, Stack, Typography } from "@mui/material";
import { AuthLoginForm } from "../forms/AuthLoginForm";
import AuthWrapper from "../layout/AuthWrapper";

const LoginPage = () => {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"baseline"}
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <Typography variant="h3">Acceso</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLoginForm />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export { LoginPage };
