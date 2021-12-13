import "./App.css";
import RootRoutes from "./RootRoutes";
import {
  Button,
  Container,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { handleDeleteSession, useSession } from "./hooks/useAuth";
import { GoSignOut } from "react-icons/go";

const App = () => {
  const { user } = useSession();

  const handleSignOut = () => {
    handleDeleteSession();
    window.location.reload();
  };

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Sign Out
    </Tooltip>
  );

  return (
    <div className="bg-light h-100 w-100 d-flex flex-column">
      <Navbar bg="primary">
        <Container className="mw-100 px-3">
          <Navbar.Brand href="/" className="text-white font-weight-bold">
            Home
          </Navbar.Brand>

          {user && (
            <div className="d-flex justify-content-center align-items-center">
              <Navbar.Text className="text-white">
                <h6 className="text-white font-weight-normal m-0">{user}</h6>
              </Navbar.Text>

              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <Button className="rounded-circle ml-2" onClick={handleSignOut}>
                  <GoSignOut />
                </Button>
              </OverlayTrigger>
            </div>
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
