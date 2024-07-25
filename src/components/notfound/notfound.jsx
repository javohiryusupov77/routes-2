import React from "react";
import styles from "./notfound.module.scss";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NotFound = () => {
  const navigate = useNavigate();
  const handleOfNotFound = () => {
    navigate("/today");
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "You are in Today page",
    });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <button onClick={handleOfNotFound} className={styles.homeLink}>
        Go back to the TodayPage
      </button>
    </div>
  );
};

export default NotFound;
