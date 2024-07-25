import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  toggleTaskDone,
  deleteTask,
  setTask,
  setSelectedView,
} from "../../store/taskSlice";
import styles from "./upcoming.module.scss";
import Hamburger from "../home/hamburger.svg";
import Search from "../home/search.svg";
import first from "../home/First.svg";
import second from "../home/second.svg";
import fourt from "../home/fourth.svg";
import calendar from "../home/calendar.svg";

const views = {
  TODAY: "Today",
  WEEK: "Week",
  MONTH: "Month",
};

export default function Upcoming() {
  const dispatch = useDispatch();
  const { tasks, task, selectedView } = useSelector((state) => state.tasks);

  const handleAddTask = () => {
    dispatch(addTask());
  };

  const handleChangeTask = (e) => {
    dispatch(setTask(e.target.value));
  };

  const handleToggleTaskDone = (index) => {
    dispatch(toggleTaskDone({ index }));
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask({ index }));
  };

  const handleViewChange = (view) => {
    dispatch(setSelectedView(view));
  };

  const filterTasksByView = () => {
    return tasks.filter((task) => task.view === selectedView);
  };

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
            style={{
              border: "none",
              borderBottomRightRadius: "50px",
              borderTopRightRadius: "50px",
            }}
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
          <p>15+</p>
        </div>
        <div className={styles.arrowRight}>
          <div className={styles.imagePart}>
            <img src={second} alt="second" />
            <p>Today</p>
          </div>
          <p>8+</p>
        </div>
        <div className={styles.imagePart} style={{ marginLeft: "4rem" }}>
          <img src={calendar} alt="calendar" />
          <p>Calendar</p>
        </div>
        <div style={{ marginLeft: "4rem" }} className={styles.imagePart}>
          <img src={fourt} alt="fourt" />
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
        <div className={styles.viewSwitcher}>
          {Object.values(views).map((view) => (
            <button
              key={view}
              onClick={() => handleViewChange(view)}
              className={selectedView === view ? styles.activeView : ""}
            >
              {view}
            </button>
          ))}
        </div>
        <h2>{selectedView}</h2>
        <div className={styles.todoForm}>
          {selectedView === views.TODAY && (
            <input
              type="text"
              value={task}
              onChange={handleChangeTask}
              placeholder="Add a new task for Today..."
              className={styles.inputType}
            />
          )}
          {selectedView === views.WEEK && (
            <input
              type="text"
              value={task}
              onChange={handleChangeTask}
              placeholder="Add a new task for this Week..."
              className={styles.inputType}
            />
          )}
          {selectedView === views.MONTH && (
            <input
              type="text"
              value={task}
              onChange={handleChangeTask}
              placeholder="Add a new task for this Month..."
              className={styles.inputType}
            />
          )}
          <button onClick={handleAddTask} className={styles.addButton}>
            Add
          </button>
        </div>
        <ul className={styles.todoList}>
          {filterTasksByView().map((task, index) => (
            <li
              key={index}
              className={`${styles.todoItem} ${task.done ? styles.done : ""}`}
            >
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => handleToggleTaskDone(index)}
              />
              <span>{task.text}</span>
              <button
                onClick={() => handleDeleteTask(index)}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
