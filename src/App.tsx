import React, { FC, lazy } from "react";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import useAuth from "./hooks/useAuth";

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

type Props = {
  name: string;
  children: React.ReactNode;
};
const RequireAuth: FC<Props> = ({ children, name }) => {
  const auth = useAuth();
  return <>{children}</>;
};

export default App;
