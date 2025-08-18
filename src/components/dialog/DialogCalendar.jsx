import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
} from "@mui/material";

import { CloseOutlined, Save, Delete } from "@mui/icons-material";

const DialogCalendar = ({ open = false, handleClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle
        id="form-dialog-title"
        sx={{
          fontSize: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Nuevo evento
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          sx={{
            borderRadius: "50%",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <CloseOutlined />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <Typography variant="h5">Fecha y hora inicio</Typography>
            <TextField
              type="datetime-local"
              className="form-control"
              placeholder="Fecha inicio"
              fullWidth
            />
          </div>

          <div className="form-group mb-2">
            <Typography variant="h5">Fecha y hora fin</Typography>
            <TextField
              type="datetime-local"
              className="form-control"
              placeholder="Fecha fin"
              fullWidth
            />
          </div>

          <div className="form-group mb-2 form-text text-muted">
            <label>Ingresar una descripcion</label>
            <TextField
              type="text"
              className="form-control"
              placeholder="Título del evento"
              name="title"
              rows={5}
              multiline
              autoComplete="off"
              fullWidth
            />
          </div>

          <Grid container spacing={{ xs: 0, sm: 1 }}>
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{ borderRadius: 1, mt: 2 }}
                type="submit"
                color="error"
                startIcon={<Delete />}
              >
                Anular
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} order={{ xs: 1, sm: 1 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{ borderRadius: 1, mt: 2 }}
                type="submit"
                color="success"
                startIcon={<Save />}
              >
                Guardar
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { DialogCalendar };
