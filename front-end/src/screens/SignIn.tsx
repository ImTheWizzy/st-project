import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ISignInData, signIn } from "../api/auth";

const SignIn = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target).entries());

    const data: ISignInData = {
      username: formData.username.toString(),
      password: formData.password.toString(),
    };

    const res = await signIn(data);

    console.log(res);
  };

  return (
    <Row className="d-flex justify-content-center align-items-start">
      <Col xs="4" className="bg-theme-dark rounded">
        <h1 className="text-center">Sign In</h1>

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

          <Col className="d-flex flex-row align-items-center justify-content-center mt-2">
            <h6 className="m-0">Don't have an account?</h6>

            <Link to="/sign-up">
              <h6 className="ml-2 mb-0">Sign up!</h6>
            </Link>
          </Col>
        </Form>
      </Col>
    </Row>
  );
};

export default SignIn;
