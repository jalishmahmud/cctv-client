import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import contactImg from "../../../images/client-bg.jpg";
const Contact = () => {
  //   const [isSuccess, setIsSuccess] = useState(false);
  const date = new Date();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.date = date.toLocaleDateString();
    /* fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setIsSuccess(true);
          reset();
        }
      }); */
  };
  const contactBg = {
    background: `url(${contactImg})`,
    backgroundPosition: "center center",
  };
  return (
    <div id="contact-us" className="py-5" style={contactBg}>
      <h2 className="text-center text-light">Contact With Us</h2>
      <h6 className="text-center mb-4 text-light">
        Feel fee to contact with us
      </h6>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control mb-3 mt-2 opacity-50 py-2"
                placeholder="Your Full Name"
                {...register("name")}
              />
              <input
                className="form-control mb-3 mt-2  opacity-50 py-2"
                placeholder="Your Email"
                type="email"
                {...register("email")}
              />
              <textarea
                className="form-control mb-3 mt-2  opacity-50 py-2"
                placeholder="Your Message"
                style={{ height: "100px" }}
                type="number"
                {...register("review")}
              />

              <input
                className="btn btn-primary  opacity-75"
                type="submit"
                value="Submit"
              />
              {/* {isSuccess && (
                <Alert className="my-3" variant="success">
                  Review Accepted, Thanks!
                </Alert>
              )} */}
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
