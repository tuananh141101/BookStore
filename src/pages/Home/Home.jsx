import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import BannerSlide from "../../components/Banner-Slide/BannerSlide";
import "./Home.scss";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import { dataProducts } from "../../services/UserServices";

const Home = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, { once: true });
  const [activeElem, setActiveElem] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [listItemBestSelling, setListItemBestSelling] = useState([]);
  const [listItemLatest, setListItemLatest] = useState([]);
  const [listItemSale, setListItemSale] = useState([]);

  const getUsers = async () => {
    try {
      let res = await dataProducts();
      let resBestSelling = res.data.sort(() => Math.random() - 0.5).slice(0, 8);
      let resLatest = res.data.sort(() => Math.random() - 0.5).slice(0, 8);
      let resSale = res.data
        .filter((item) => {
          return item.sale === true;
        })
        .sort(() => Math.random() - 0.5)
        .slice(0, 8);
      setListItemBestSelling(resBestSelling);
      setListItemLatest(resLatest);
      setListItemSale(resSale);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const determineHeightImgProductCarousel = () => {
    return windowWidth <= 575
      ? 725.33
      : windowWidth <= 768
      ? 325.33
      : windowWidth <= 1200
      ? 285.33
      : 405.33;
  };

  // Framer Motion
  const btnIconAnimation = {
    hidden: {
      y: 0,
      background: "#F6F5F3",
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
      <BannerSlide />
      <section className="product-categories">
        <Container>
          <Row>
            <Col className="col_1" xs={8}>
              <span>Featured Categories</span>
            </Col>
            <Col
              className="col_2 d-flex justify-content-end align-items-center"
              xs={4}
            >
              <span>
                <Link to="/categories">
                  All Categories
                  <IoIosArrowForward className="icon" />
                </Link>
              </span>
            </Col>
          </Row>
          <Row>
            <Col className="custom_col_cate">
              <motion.ul
                className="ul_cate d-flex align-items-center mb-0"
                ref={ref}
                style={{
                  opacity: isInView ? 1 : 0,
                  transition: "1.5s opacity",
                }}
              >
                <li>
                  <Link>
                    <div className="product-cate__inner d-flex justify-content-center flex-column">
                      <div className="product-cate__icon"></div>
                      <div className="product-cate__text">
                        <p className="mt-2 mb-0">Fiction</p>
                        <span>Shop Now</span>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link>
                    <div className="product-cate__inner d-flex justify-content-center flex-column">
                      <div className="product-cate__icon"></div>
                      <div className="product-cate__text">
                        <p className="mt-2 mb-0">History</p>
                        <span>Shop Now</span>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link>
                    <div className="product-cate__inner d-flex justify-content-center flex-column">
                      <div className="product-cate__icon"></div>
                      <div className="product-cate__text">
                        <p className="mt-2 mb-0">Mystery</p>
                        <span>Shop Now</span>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link>
                    <div className="product-cate__inner d-flex justify-content-center flex-column">
                      <div className="product-cate__icon"></div>
                      <div className="product-cate__text">
                        <p className="mt-2 mb-0">Family</p>
                        <span>Shop Now</span>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link>
                    <div className="product-cate__inner d-flex justify-content-center flex-column">
                      <div className="product-cate__icon"></div>
                      <div className="product-cate__text">
                        <p className="mt-2 mb-0">Cooking</p>
                        <span>Shop Now</span>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link>
                    <div className="product-cate__inner d-flex justify-content-center flex-column">
                      <div className="product-cate__icon"></div>
                      <div className="product-cate__text">
                        <p className="mt-2 mb-0">Drama</p>
                        <span>Shop Now</span>
                      </div>
                    </div>
                  </Link>
                </li>
              </motion.ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="product-carousel">
        <Container>
          <Row className="custom-row1">
            <Col className="col1" sm={6}>
              <p className="mb-0">Books</p>
              <span>The most recent books that arrived in our bookstore.</span>
            </Col>
            <Col
              className={`col2 d-flex align-items-center ${
                windowWidth <= 576
                  ? "justify-content-center"
                  : "justify-content-end"
              }`}
              sm={6}
            >
              <nav className="d-flex">
                {[0, 1, 2].map((i) => (
                  <a key={i} onClick={() => setActiveElem(i)}>
                    <AnimatePresence>
                      {activeElem === i && (
                        <motion.span
                          layoutId="navlink"
                          animate={{ opacity: 1 }}
                          initial={{ opacity: 0 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </AnimatePresence>
                  </a>
                ))}
              </nav>
            </Col>
          </Row>
          <section className="carousel">
            <motion.div
              className={`carousel-bestselling carousel-card ${
                activeElem === 0 ? "active" : ""
              }`}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: activeElem === 0 ? 1 : 0,
                y: activeElem === 0 ? 0 : 30,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              exit={{ opacity: 0, y: 30 }}
            >
              <Row>
                {listItemLatest &&
                  listItemLatest.map((item, index) => {
                    return (
                      <Col
                        className="custom-col mb-4"
                        xxl={3}
                        xl={3}
                        lg={3}
                        md={4}
                        sm={6}
                        key={index}
                      >
                        <Link>
                          <Card style={{ width: "18rem" }} className="border">
                            <div className="img">
                              <Card.Img
                                variant="top"
                                src={`https://websitebook-api.vercel.app${item.image}`}
                                style={{
                                  height: `${determineHeightImgProductCarousel().toFixed(
                                    2
                                  )}px`,
                                }}
                              />
                              <motion.div
                                className="btn-icon quick-view"
                                variants={btnIconAnimation}
                                initial="hidden"
                                whileHover="show"
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
                              <Card.Text>{item.categories}</Card.Text>
                              <Card.Title>{item.name}</Card.Title>
                              <p className="mb-0">
                                <Link>{item.author}</Link>
                              </p>
                            </Card.Body>
                            <div className="card-price">
                              <ul className="d-flex align-items-center justify-content-between">
                                <li>${item.price}</li>
                                <li>
                                  <motion.div
                                    initial={{
                                      y: 0,
                                      background: "#F6F5F3",
                                    }}
                                    whileHover={{
                                      y: -5,
                                      background: "#161619",
                                    }}
                                    exit={{
                                      y: 0,
                                    }}
                                    transition={{
                                      duration: 0.4,
                                      ease: "easeInOut",
                                    }}
                                  >
                                    <Link>
                                      <MdOutlineShoppingBag />
                                    </Link>
                                  </motion.div>
                                </li>
                              </ul>
                            </div>
                          </Card>
                        </Link>
                      </Col>
                    );
                  })}
              </Row>
            </motion.div>
            <motion.div
              className={`carousel-latest carousel-card ${
                activeElem === 1 ? "active" : ""
              } `}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: activeElem === 1 ? 1 : 0,
                y: activeElem === 1 ? 0 : 30,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              exit={{ opacity: 0, y: 30 }}
            >
              <Row>
                {listItemBestSelling &&
                  listItemBestSelling.map((item, index) => {
                    return (
                      <Col
                        className="custom-col mb-4"
                        xxl={3}
                        xl={3}
                        lg={3}
                        md={4}
                        sm={6}
                        key={index}
                      >
                        <Link>
                          <Card style={{ width: "18rem" }} className="border">
                            <div className="img">
                              <Card.Img
                                variant="top"
                                src={`https://websitebook-api.vercel.app${item.image}`}
                                style={{
                                  height: `${determineHeightImgProductCarousel().toFixed(
                                    2
                                  )}px`,
                                }}
                              />
                              <motion.div
                                className="btn-icon quick-view"
                                variants={btnIconAnimation}
                                initial="hidden"
                                whileHover="show"
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
                              <Card.Text>{item.categories}</Card.Text>
                              <Card.Title>{item.name}</Card.Title>
                              <p className="mb-0">
                                <Link>{item.author}</Link>
                              </p>
                            </Card.Body>
                            <div className="card-price">
                              <ul className="d-flex align-items-center justify-content-between">
                                <li>${item.price}</li>
                                <li>
                                  <motion.div
                                    initial={{
                                      y: 0,
                                      background: "#F6F5F3",
                                    }}
                                    whileHover={{
                                      y: -5,
                                      background: "#161619",
                                    }}
                                    exit={{
                                      y: 0,
                                    }}
                                    transition={{
                                      duration: 0.4,
                                      ease: "easeInOut",
                                    }}
                                  >
                                    <Link>
                                      <MdOutlineShoppingBag />
                                    </Link>
                                  </motion.div>
                                </li>
                              </ul>
                            </div>
                          </Card>
                        </Link>
                      </Col>
                    );
                  })}
              </Row>
            </motion.div>
            <motion.div
              className={`carousel-sale carousel-card ${
                activeElem === 2 ? "active" : ""
              }`}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: activeElem === 2 ? 1 : 0,
                y: activeElem === 2 ? 0 : 30,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              exit={{ opacity: 0, y: 30 }}
            >
              <Row>
                {listItemSale &&
                  listItemSale.map((item, index) => {
                    return (
                      <Col
                        className="custom-col mb-4"
                        xxl={3}
                        xl={3}
                        lg={3}
                        md={4}
                        sm={6}
                        key={index}
                        onClick={() =>
                          console.log("day la index cua item", item.id)
                        }
                      >
                        <Link>
                          <Card style={{ width: "18rem" }} className="border">
                            <div className="img">
                              <Card.Img
                                variant="top"
                                src={`https://websitebook-api.vercel.app${item.image}`}
                                style={{
                                  height: `${determineHeightImgProductCarousel().toFixed(
                                    2
                                  )}px`,
                                }}
                              />
                              <motion.div
                                className="btn-icon quick-view"
                                variants={btnIconAnimation}
                                initial="hidden"
                                whileHover="show"
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
                              <Card.Text>{item.categories}</Card.Text>
                              <Card.Title>{item.name}</Card.Title>
                              <p className="mb-0">
                                <Link>{item.author}</Link>
                              </p>
                            </Card.Body>
                            <div className="card-price">
                              <ul className="d-flex align-items-center justify-content-between">
                                <li>${item.price}</li>
                                <li>
                                  <motion.div
                                    initial={{
                                      y: 0,
                                      background: "#F6F5F3",
                                    }}
                                    whileHover={{
                                      y: -5,
                                      background: "#161619",
                                    }}
                                    exit={{
                                      y: 0,
                                    }}
                                    transition={{
                                      duration: 0.4,
                                      ease: "easeInOut",
                                    }}
                                  >
                                    <Link>
                                      <MdOutlineShoppingBag />
                                    </Link>
                                  </motion.div>
                                </li>
                              </ul>
                            </div>
                          </Card>
                        </Link>
                      </Col>
                    );
                  })}
              </Row>
            </motion.div>
          </section>
        </Container>
      </section>
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
        </Container>
      </seciton>
    </>
  );
};

export default Home;
