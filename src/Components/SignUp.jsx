import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getUrl } from "../Apis/axios";

export default function SignUp({ modal, setModal }) {
  const [email, setEmail] = useState("");
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);

  const handleSubmitButton = (e) => {
    e.preventDefault();
    if (email === "") {
      setError(true);
    } else {
      // The endpoint server is down, I checked it in Postman, but I assumed it was working.
      const Axios = getUrl();
      var params = {
        email,
      };
      const myJSON = JSON.stringify(params);
      Axios.post("/", myJSON)
        .then((res) => {
          // console.log(res);
          setSuccess(true);
          setMessageSuccess("This email is valid. Welcome!");
        })
        .catch((error) => {
          // console.log(error);
          setError(true);
          setMessageError(error.errors.email);
        });
    }
  };

  return modal ? (
    <section className="modal__bg">
      <div className="modal__align">
        <div className="modal-signup__content p-5" modal={modal.toString()}>
          <IoCloseOutline
            className="modal__close"
            arial-label="Close modal"
            onClick={() => {
              setModal(false);
              setError(false);
              setSuccess(false);
            }}
          />
          <Form className="modal-signup__form">
            {error && <p className="error">{messageError}</p>}
            {success && <p className="error">{messageSuccess}</p>}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubmitted(false);
                }}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={handleSubmitButton}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </section>
  ) : null;
}
