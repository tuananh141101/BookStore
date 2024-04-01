import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import SidebarCategories from "../../components/Categories/SidebarCategories";
import SideMainCategories from "../../components/Categories/SideMainCategories";
import "./Categories.scss";
import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.products.listProducts);
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
                    Categories
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="categories">
          <Container>
            <Row>
              <Col>
                <p className="mb-0">Categories</p>
                <span>Showing 1–12 of 43 results</span>
              </Col>
            </Row>
            <Row>
              <Col className="custom-col side-bar" lg={3}>
                <SidebarCategories />
              </Col>
              <Col className="custom-col side-main" lg={9}>
                <SideMainCategories />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Categories;
