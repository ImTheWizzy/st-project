import { useState } from "react";
import { Button, Col, Container, Form, Row, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ISignInData, signIn } from "../api/auth";
import { handleSetSession } from "../hooks/useAuth";

const SignIn = () => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastVariant, setToastVariant] = useState<"success" | "danger">(
    "danger"
  );
  const [toastMessage, setToastMessage] = useState<string>("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target).entries());
    let formIsValid = true;

    const data: ISignInData = {
      username: formData.username.toString(),
      password: formData.password.toString(),
    };

    Object.values(data).forEach((entry) => {
      if (!entry) return (formIsValid = false);
    });

    if (formIsValid) {
      try {
        const response = await signIn(data);

        setToastVariant("success");
        setToastMessage("Successful sign in!");

        response.doctor && handleSetSession(response.userAuth);

        window.location.reload();
      } catch (error) {
        setToastVariant("danger");
        setToastMessage("Invalid sign in data!");
      }
    } else {
      setToastVariant("danger");
      setToastMessage("Incomplete sign in data!");
    }

    setShowToast(true);
  };

  return (
    <Row className="d-flex justify-content-center align-items-start">
      <Col xs="10" sm="10" md="8" lg="6" xl="5">
        <h1 className="text-center mb-4">Sign In</h1>

        <Container className="bg-white shadow rounded-lg py-3 px-5">
          <h5 className="text-center font-weight-normal mb-3">
            Sign in to your account
          </h5>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter your username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>

            <Col className="d-flex flex-row align-items-center justify-content-center mt-3">
              <h6 className="m-0 font-weight-normal">Don't have an account?</h6>

              <Link to="/sign-up">
                <h6 className="ml-2 mb-0">Sign up!</h6>
              </Link>
            </Col>
          </Form>
        </Container>

        <Toast
          bg={toastVariant}
          className="mt-4 text-center w-100"
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
        >
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
};

export default SignIn;
