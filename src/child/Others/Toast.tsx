// Toast.js
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const ToastSuccess = () => {
  toast.success("1 task completed", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: "dark",
  })

  return null
}
