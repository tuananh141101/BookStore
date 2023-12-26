import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Image from "react-bootstrap/Image";

const AuthorCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <>
      <seciton className="author-carousel">
        <Container>
          <Row>
            <Col>
              <p className="mb-0">Author</p>
              <span>Author of the month</span>
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
              <span>View All</span>
            </Col>
          </Row>
          <Row>
            <Slider {...settings}>
              <div className="d-flex align-items-center justify-content-center flex-column author-info">
                <Image
                  src="https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  roundedCircle
                />
                <p className="mb-0">Mario Puzo</p>
                <span>3 Published Books</span>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column author-info">
                <Image
                  src="https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  roundedCircle
                />
                <p className="mb-0">Mario Puzo</p>
                <span>3 Published Books</span>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column author-info">
                <Image
                  src="https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  roundedCircle
                />
                <p className="mb-0">Mario Puzo</p>
                <span>3 Published Books</span>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column author-info">
                <Image
                  src="https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  roundedCircle
                />
                <p className="mb-0">Mario Puzo</p>
                <span>3 Published Books</span>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column author-info">
                <Image
                  src="https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  roundedCircle
                />
                <p className="mb-0">Mario Puzo</p>
                <span>3 Published Books</span>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column author-info">
                <Image
                  src="https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  roundedCircle
                />
                <p className="mb-0">Mario Puzo</p>
                <span>3 Published Books</span>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column author-info">
                <h3>7</h3>
              </div>
              <div>
                <h3>8</h3>
              </div>
              <div>
                <h3>9</h3>
              </div>
              <div>
                <h3>10</h3>
              </div>
            </Slider>
          </Row>
        </Container>
      </seciton>
    </>
  );
};

export default AuthorCarousel;
