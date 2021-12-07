import "./App.css";
import RootRoutes from "./RootRoutes";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container className="py-4 h-100">
      <RootRoutes />
    </Container>
  );
};

export default App;
