import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Patient from "./screens/Patient";
import PatientData from "./screens/PatientData";
import Prescription from "./screens/Prescription";
export default function RootRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/patient" element={<Patient />}></Route>
          <Route path="/patientdata" element={<PatientData />}></Route>
          <Route path="/prescription" element={<Prescription />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
