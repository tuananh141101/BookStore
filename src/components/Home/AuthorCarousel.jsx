import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import PreviewItem from "../PreViewItem/PreviewItem";

const AuthorCarousel = ({ dataItem }) => {
  const [show, setShow] = useState(false);
  const [idItem, setIdItem] = useState();
  const handleClose = () => setShow(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // let danielle = dataItem.filter((item) => item.author === "Danielle Steel");

  const btnIconAnimation = {
    hidden: {
      y: 0,
      background: "#F6F5F3",
      color: "#19110b",
    },
    show: {
      y: -5,
      background: "#161619",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    exit: {
      y: 0,
    },
  };

  return (
    <>
      <section className="author-month">
        <Container>
          <Row>
            <Col className="custom-col d-flex align-items-center justify-content-center flex-column">
              <div className="title d-flex flex-column">
                <span>Author of the month</span>
                <p className="mb-0">Danielle Steel</p>
              </div>
              <p className="mb-0 about">
                Danielle Steel is an American author. Born in Idaho to a father
                opposed to public education, she never attended school. She
                spent her days working in her father's junkyard or stewing herbs
                for her mother, a self-taught herbalist and midwife. She was
                seventeen the first time she set foot in a classroom.
              </p>
              <div className="product d-flex">
                <Card>
                  <div className="img">
                    <Card.Img
                      variant="top"
                      src="https://websitebook-api.vercel.app/images/img-book-1.png"
                    />
                    <motion.div
                      className="btn-icon quick-view"
                      variants={btnIconAnimation}
                      initial="hidden"
                      whileHover="show"
                      onClick={() => {
                        setShow(true);
                        setIdItem(item.id);
                      }}
                    >
                      <FaRegEye />
                    </motion.div>
                    <motion.div
                      className="btn-icon add-fav-book"
                      variants={btnIconAnimation}
                      initial="hidden"
                      whileHover="show"
                    >
                      <FaRegHeart />
                    </motion.div>
                  </div>

                  <Card.Body className="border-bottom">
                    <Card.Text>Fiction, Uncategorized</Card.Text>
                    <Card.Title>Blessing in Disguise: A Novel</Card.Title>
                    <p className="mb-0">
                      <Link>Danielle Steel</Link>
                    </p>
                  </Card.Body>
                  <div className="card-price">
                    <ul className="mb-0 d-flex align-items-center justify-content-between">
                      <li>$19</li>
                      <li>
                        <motion.div
                          variants={btnIconAnimation}
                          initial="hidden"
                          whileHover="show"
                        >
                          <MdOutlineShoppingBag />
                        </motion.div>
                      </li>
                    </ul>
                  </div>
                </Card>
                <Card>
                  <div className="img">
                    <Card.Img
                      variant="top"
                      src="https://websitebook-api.vercel.app/images/img-book-1.png"
                    />
                    <motion.div
                      className="btn-icon quick-view"
                      variants={btnIconAnimation}
                      initial="hidden"
                      whileHover="show"
                      onClick={() => {
                        setShow(true);
                        setIdItem(item.id);
                      }}
                    >
                      <FaRegEye />
                    </motion.div>
                    <motion.div
                      className="btn-icon add-fav-book"
                      variants={btnIconAnimation}
                      initial="hidden"
                      whileHover="show"
                    >
                      <FaRegHeart />
                    </motion.div>
                  </div>

                  <Card.Body className="border-bottom">
                    <Card.Text>Fiction, Uncategorized</Card.Text>
                    <Card.Title>Blessing in Disguise: A Novel</Card.Title>
                    <p className="mb-0">
                      <Link>Danielle Steel</Link>
                    </p>
                  </Card.Body>
                  <div className="card-price">
                    <ul className="mb-0 d-flex align-items-center justify-content-between">
                      <li>$19</li>
                      <li>
                        <motion.div
                          variants={btnIconAnimation}
                          initial="hidden"
                          whileHover="show"
                        >
                          <MdOutlineShoppingBag />
                        </motion.div>
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preview Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PreviewItem idItem={idItem} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AuthorCarousel;

// <Slider {...settings}>
//   {dataItem &&
//     dataItem.slice(0, 10).map((item, index) => {
//       if (!item) return null;
//       return (
//         <div
//           className="d-flex align-items-center justify-content-center flex-column author-info"
//           key={index}
//           onClick={handleClickAuthor(item.id)}
//         >
//           <Image
//             src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             roundedCircle
//           />
//           <p className="mb-0">{item.author}</p>
//           <span>1 Published Books</span>
//         </div>
//       );
//     })}
// </Slider>;
