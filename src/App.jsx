import { Routes, Route, NavLink } from "react-router-dom";

import "./App.scss";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import LogoutButton from "./components/logout-button/LogoutButton";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import Today from "./components/dashboard/Dashboard";
import Students from "./components/students/Student";
import About from "./components/about/about";
import NotFound from "./components/notfound/notfound";
import Upcoming from "./components/upcoming/upcoming";
function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/upcoming">upcoming</NavLink>
            </li>
          </ul>
          <LogoutButton>Log out</LogoutButton>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/today" element={<Today />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/students" element={<Students />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/Upcoming" element={<Upcoming />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
