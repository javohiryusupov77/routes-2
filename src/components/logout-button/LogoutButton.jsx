import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Swal from "sweetalert2";

export default function LogoutButton({ children }) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  function removeUser() {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login", { replace: true });

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });

    Toast.fire({
      icon: "error",
      title: "Login and Password have been removed",
    });
  }

  if (!user) return null;

  return (
    <button
      onClick={removeUser}
      style={{ color: "red", borderColor: "currentcolor" }}
    >
      {children}
    </button>
  );
}
