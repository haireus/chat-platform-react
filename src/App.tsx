import React from "react";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />}></Route>
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
