import "./App.css";
import RootRoutes from "./RootRoutes";
import { Container, Navbar } from "react-bootstrap";
import { useSession } from "./hooks/useAuth";

const App = () => {
  const { user } = useSession();

  return (
    <div className="bg-light h-100 w-100 d-flex flex-column">
      <Navbar bg="primary">
        <Container className="mw-100 px-3">
          <Navbar.Brand href="/" className="text-white font-weight-bold">
            Home
          </Navbar.Brand>

          {user && (
            <Navbar.Text className="text-white">
              <h6 className="text-white font-weight-normal m-0">{user}</h6>
            </Navbar.Text>
          )}
        </Container>
      </Navbar>

      <Container className="py-4 flex-grow-1">
        <RootRoutes />
      </Container>
    </div>
  );
};

export default App;
