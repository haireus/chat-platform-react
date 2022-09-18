import React, { lazy } from "react";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";

const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="conversation"
        element={
          <div>
            <div>Conversations</div>
            <Outlet />
          </div>
        }
      >
        <Route path=":id" element={<div>Conversation ID Page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
