import { useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

const SelectedBook = () => {
  const [quantityInput, setQuantityInput] = useState(1);
  return (
    <>
      <section className="selected-book">
        <Container>
          <Row>
            <Col className="d-flex align-items-center justify-content-center">
              <ul>
                <li style={{ textAlign: "center" }}>
                  <p className="mb-0">Book Selected</p>
                </li>
                <li style={{ textAlign: "center" }}>
                  <span>Book selected by our staff</span>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col
              className="d-flex align-items-center justify-content-end"
              md={5}
            >
              <Image src="https://websitebook-api.vercel.app/images/img-book-10.png" />
            </Col>
            <Col className="d-flex align-items-start flex-column info" md={7}>
              <p className="mb-0">Know Why the Caged Bird Sings</p>
              <span style={{ width: "450px" }}>
                Here is a book as joyous and painful, as mysterious and
                memorable, as childhood itself. I Know Why the Caged Bird Sings
                captures the longing of lonely children, the brute insult of
                bigotry, and the wonder of words that can make the world right.
                Maya Angelou's debut memoir is a modern American classic beloved
                worldwide.
              </span>
              <ul>
                <li className="author">
                  <span>Author:</span>
                  <span>Maya Angelou</span>
                </li>
                <li className="categories">
                  <span>Categories:</span>
                  <span>Biography,Family</span>
                </li>
              </ul>
              <form action="" className="d-flex align-items-center">
                <div className="quantity">
                  <label htmlFor="quantity-input"></label>
                  <input
                    type="number"
                    value={quantityInput}
                    onChange={(e) => {
                      setQuantityInput(e.target.value);
                    }}
                  />
                </div>
                <button>Add to cart</button>
              </form>
            </Col>
          </Row>
        </Container>
        <div className="overlay"></div>
      </section>
      <section className="special">
        <Container>
          <Row>
            <Col>Special</Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SelectedBook;
