import { useContext, useState } from "react";
import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import google from "../login/google.svg";
import facebook from "../login/facebook.svg";
import Background from "../login/Background.svg";
import Swal from "sweetalert2";

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  async function login() {
    setError(null);
    setLoading();

    try {
      const response = await fetch("http://localhost:8082/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });
      if (!response.ok) {
        throw new Error(error);
      }

      const user = await response.json();
      setUser(user);
      saveUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    login();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Succesfully signed",
      showConfirmButton: false,
      timer: 1000,
    });

  }

  return (
    <div className={styles.containerMain}>
      <div>
        <img src={Background} alt="Background" />
      </div>
      <div className={styles.login}>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles["form-control"]}>
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              value={userName}
              id="userName"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="password">Password </label>
            <input
              type="password"
              value={password}
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className={styles.error}>Error: {error.message}</p>}
          <div>
            <button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Sign in"}
            </button>
          </div>
        </form>
        <div className={styles.line}>
          <span></span>
          <p>or</p>
          <span></span>
        </div>
        <div className={styles.icons}>
          <div className={styles.container}>
            <img src={google} alt="google" />
            <p>Google</p>
          </div>
          <div className={styles.container}>
            <img src={facebook} alt="facebook" />
            <p>Facebook</p>
          </div>
        </div>
        <div className={styles.signUp}>
          <Link>Do not have account? Sign up</Link>
        </div>
      </div>
    </div>
  );
}
