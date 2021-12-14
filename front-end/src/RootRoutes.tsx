import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSession } from "./hooks/useAuth";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Patient from "./screens/Patient";
import PatientData from "./screens/PatientData";
import Prescription from "./screens/Prescription";
import PatientTab from "./screens/PatientTab";
import MedicalReferal from "./screens/MedicalReferal";

export default function RootRoutes() {
  const { user } = useSession();

  return (
    <>
      <BrowserRouter>
        <Routes>
          {user ? (
            <>
              <Route path="/patient" element={<Patient />}></Route>
              <Route path="/patientdata" element={<PatientData />}></Route>
              <Route path="/prescription" element={<Prescription />}></Route>
              <Route path="/patientTab/:id" element={<PatientTab />}></Route>
              <Route
                path="/medicalreferral"
                element={<MedicalReferal />}
              ></Route>
              <Route path="*" element={<Navigate replace to="/patient" />} />
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
