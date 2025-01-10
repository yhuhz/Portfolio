import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Public from "../components/Public";
import Login from "../features/auth/Login";
import DashLayout from "../components/DashLayout"; //DashLayout is where you put the DashHeader and DashFooter then you import them to the App.tsx
import Welcome from "../features/auth/Welcome"; //The welcome page is the first page you see when you login
import NotesList from "../features/notes/NotesList";
import UsersList from "../features/users/UsersList";
import "../css/App.css";

function App() {
  return (
    // How to route pages properly
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />}></Route>{" "}
        {/*Public is the first page you see when you go to the website*/}
        <Route path="login" element={<Login />}></Route>{" "}
        {/*Login is the page where you login*/}
        <Route path="dash" element={<DashLayout />}>
          {" "}
          {/*DashLayout is where you put the DashHeader and DashFooter then you import them to the App.tsx*/}
          <Route index element={<Welcome />}></Route>{" "}
          {/*The welcome page is the first page you see when you login*/}
          <Route path="notes">
            <Route index element={<NotesList />}></Route>{" "}
            {/*NotesList is the page where you see all the notes*/}
          </Route>
          <Route path="users">
            <Route index element={<UsersList />}></Route>{" "}
            {/*UsersList is the page where you see all the users*/}
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
