import Swal from "sweetalert2";

const swalBase = (options) => {
  return Swal.fire({
    confirmButtonText: "Aceptar",
    allowOutsideClick: false,
    customClass: {
      container: "swal2-mui-container",
      popup: "swal2-mui-popup",
    },
    target: document.body,
    ...options,
  });
};

export const swalSuccess = (text) =>
  swalBase({
    title: "¡Acción completada!",
    text,
    icon: "success",
    color: "#005a3a",
    confirmButtonColor: "#005a3a",
  });

export const swalError = (text) =>
  swalBase({
    title: "¡Acción incompletada!",
    text,
    icon: "error",
    color: "#e20000",
    confirmButtonColor: "#e20000",
  });

export const swalConfirm = (
  title = "¿Estás seguro?",
  text = "¿Estás seguro?",
  confirmText = "Sí"
) =>
  Swal.fire({
    title,
    text,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: confirmText,
    confirmButtonColor: "#005a3a",
    cancelButtonText: "Cancelar",
    cancelButtonColor: "#e20000",
    allowOutsideClick: false,
    customClass: {
      container: "swal2-mui-container",
      popup: "swal2-mui-popup",
    },
  });
