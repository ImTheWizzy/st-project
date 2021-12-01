import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import SignIn from "./screens/SignIn";

export default function RootRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
