import React, { FC, lazy } from "react";
import "./App.css";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import { Console } from "console";

const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Conversations = lazy(() => import("./pages/Conversations"));
const ConversationItem = lazy(() => import("./pages/ConversationItem"));

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/conversations"
        element={
          <RequireAuth>
            <Conversations />
          </RequireAuth>
        }
      >
        <Route path=":id" element={<ConversationItem />} />
      </Route>
    </Routes>
  );
}

type Props = {
  // name: string;
  children: React.ReactNode;
};
const RequireAuth: FC<Props> = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  console.log(auth);

  if (!auth?.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};

export default App;
