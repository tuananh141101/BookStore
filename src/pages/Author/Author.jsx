import "./Author.scss";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { dataProducts } from "../../services/UserServices";
import { useEffect, useState } from "react";

const Author = () => {
  const [author, setAuthor] = useState([]);
  const [product, setProduct] = useState([]);

  const getAuthor = async () => {
    try {
      const res = await dataProducts();
      let authorName = [...res.data].map((item) => {
        return item.author;
      });

      const getUniqueNamesAuthor = (arr) => {
        const seenNames = {};
        const uniqueNames = [];

        arr.map((item) => {
          if (!seenNames[item]) {
            uniqueNames.push(item);
            seenNames[item] = true;
          }
        });
        return uniqueNames;
      };

      const uniqueNamesAuthor = getUniqueNamesAuthor(authorName);
      setAuthor(uniqueNamesAuthor);

      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("useEff is called");
    getAuthor();
  }, []);

  console.log(author);

  return (
    <>
      <div>
        <section className="bread-crumb">
          <Container>
            <Row>
              <Col>
                <Breadcrumb className="custom-breadcrumb">
                  <Breadcrumb.Item
                    className="custom-breadcrumb-item d-flex align-items-center"
                    href="/"
                  >
                    Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item
                    className="custom-breadcrumb-item d-flex align-items-center"
                    href="about"
                    active
                  >
                    Author
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="author">
          <Container>
            <Row>
              <ul className="mb-0 author-filter d-flex align-items-center">
                <li>All</li>
                <li>A</li>
                <li>B</li>
                <li>C</li>
              </ul>
              <Col>hello</Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Author;
