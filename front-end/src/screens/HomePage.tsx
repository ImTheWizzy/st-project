import { Button } from "react-bootstrap";
import { handleDeleteSession } from "../hooks/useAuth";

const HomePage = () => {
  const handleSignOut = () => {
    handleDeleteSession();
    window.location.reload();
  };

  return (
    <div>
      Home Page <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  );
};

export default HomePage;
