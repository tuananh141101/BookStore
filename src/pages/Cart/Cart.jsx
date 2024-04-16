import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import "./Cart.scss";
import CartDetail from "../../components/Cart/CartDetail";
import CartCheckout from "../../components/Cart/CartCheckout";

const Cart = () => {
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
                    className="custom-breadcrumb-item d-flex align-items-center"
                    href="blog"
                    active
                  >
                    Cart
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="cart">
          <Container>
            <Row>
              <Col className="custom-col" lg={9}>
                <CartDetail />
              </Col>
              <Col className="custom-col" lg={3}>
                <CartCheckout />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Cart;
