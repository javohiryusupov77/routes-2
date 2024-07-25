import styles from "./home.module.scss";
import Hamburger from "./hamburger.svg";
import Search from "./search.svg";
import first from "./First.svg";
import second from "./second.svg";
import calendar from "./calendar.svg";
import fourth from "./fourth.svg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Home() {
  const navigate = useNavigate()
  const handleBack = () =>{
    navigate("/today")
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You are in Today page",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  return (
    <div className={styles.container}>
      <div className={styles.part1}>
        <br />
        <div className={styles.hamburger}>
          <h1>Menu</h1>
          <img
            style={{ paddingTop: "0.5rem" }}
            src={Hamburger}
            alt="Hamburger"
          />
        </div>
        <div className={styles.SearchContainer}>
          <img className={styles.search} src={Search} alt="Search" />
          <input
            className={styles.inputType}
            placeholder="Search..."
            type="text"
          />
        </div>
        <h3 style={{ marginLeft: "2rem" }}>Tasks</h3>
        <div className={styles.upcoming}>
          <div className={styles.imagePart}>
            <img src={first} alt="first" />
            <p>Upcoming</p>
          </div>
          <p style={{ background: "#ebebeb", borderRadius: "50%" }}>15+</p>
        </div>
        <div className={styles.arrowRight}>
          <div className={styles.imagePart}>
            <img src={second} alt="second" />
            <p>Today</p>
          </div>
          <p style={{ background: "#ebebeb", borderRadius: "50%" }}>8+</p>
        </div>
        <div style={{ marginLeft: "4rem" }} className={styles.imagePart}>
          <img src={calendar} alt="calendar" />
          <p>Calendar</p>
        </div>
        <div style={{ marginLeft: "4rem" }} className={styles.imagePart}>
          <img src={fourth} alt="fourth" />
          <p>Sticky wall</p>
        </div>
        <h3 style={{ marginLeft: "2rem" }}>Lists</h3>
        <div style={{ marginLeft: "3.5rem" }}>
          <div className={styles.lists}>
            <span
              style={{ background: "red" }}
              className={styles.colorType}
            ></span>
            <p>work</p>
          </div>
          <div className={styles.lists}>
            <span
              style={{ background: "green" }}
              className={styles.colorType}
            ></span>
            <p>personal</p>
          </div>
          <div className={styles.lists}>
            <span
              style={{ background: "blue" }}
              className={styles.colorType}
            ></span>
            <p>study</p>
          </div>
        </div>
      </div>
      <div className={styles.part2}>
        <h1>Welcome to ToDoPy</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          reprehenderit labore animi rem? Dignissimos modi numquam corrupti fuga
          perferendis corporis? Recusandae temporibus, incidunt saepe
          repellendus, quidem excepturi pariatur laborum, reprehenderit possimus
          veritatis quam error in harum corrupti consequatur sint eius ipsam
          nesciunt tempora repudiandae. Voluptates vero dolores similique
          suscipit itaque.
        </p>
        <button onClick={handleBack} style={{ background: "greenyellow" }}>Go to Task</button>
      </div>
    </div>
  );
}
