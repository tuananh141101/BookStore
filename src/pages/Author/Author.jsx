import "./Author.scss";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";

const Author = () => {
  return (
    <>
      <div>
        <section className="bread-crumb">
          <Container>
            <Row>
              <Col>
                <Breadcrumb className="custom-breadcrumb">
                  <Breadcrumb.Item className="custom-breadcrumb-item" href="/">
                    Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item
                    className="custom-breadcrumb-item"
                    href="blog"
                    active
                  >
                    Author
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="author"></section>
      </div>
    </>
  );
};

export default Author;
