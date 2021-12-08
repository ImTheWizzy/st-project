import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSession } from "./hooks/useAuth";
import HomePage from "./screens/HomePage";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

export default function RootRoutes() {
  const { user } = useSession();

  return (
    <>
      <BrowserRouter>
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="*" element={<Navigate replace to="/" />} />
            </>
          ) : (
            <>
              <Route path="/sign-in" element={<SignIn />}></Route>
              <Route path="/sign-up" element={<SignUp />}></Route>
              <Route path="*" element={<Navigate replace to="/sign-up" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}
