import Swal from "sweetalert2";

const options = {
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
};

export const successNotification = (title) => {
  const Toast = Swal.mixin(options);

  Toast.fire({
    icon: "success",
    title,
  });
};

export const errorNotification = (title) => {
  const Toast = Swal.mixin(options);

  Toast.fire({
    icon: "error",
    title,
  });
};
