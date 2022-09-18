import React, { lazy } from "react";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";

const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Conversations = lazy(() => import("./pages/Conversations"));
const ConversationItem = lazy(() => import("./pages/ConversationItem"));

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/conversations" element={<Conversations />}>
        <Route path=":id" element={<ConversationItem />} />
      </Route>
    </Routes>
  );
}

export default App;
