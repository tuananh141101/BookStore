import { useEffect, useState } from "react";
import { dataProducts } from "../../../services/UserServices";
import { Col, Row } from "react-bootstrap";
import "./index.scss";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

const PreviewItem = ({ idItem }) => {
  const [dataItemPreview, setDataItemPreview] = useState([]);
  const [quantityInput, setQuantityInput] = useState(1);
  const getPreviewItem = async () => {
    try {
      let res = await dataProducts();
      let resData = res.data.filter((item) => {
        return item.id === idItem;
      });
      setDataItemPreview(resData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPreviewItem();
  }, []);

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
      <div className="preview-item">
        <Row>
          {dataItemPreview.map((item, index) => {
            return (
              <>
                <Col key={index}>
                  <img
                    src={`https://websitebook-api.vercel.app${item.image}`}
                  />
                </Col>
                <Col className="d-flex align-items-start flex-column custom-col">
                  <Link>
                    <p className="mb-0">{item.name}</p>
                  </Link>
                  <ul className="preview-item__detail mb-0">
                    <li>
                      <span>{item.price}$</span>
                    </li>
                    <li>
                      <span>Publisher:</span>
                      <span>{item.author}</span>
                    </li>
                    <li>
                      <span>Categories:</span>
                      <span>{item.categories}</span>
                    </li>
                  </ul>
                  <section className="d-flex align-items-center">
                    <form action="">
                      <button onClick={(e) => e.preventDefault()}>+</button>
                      <input type="number" value={quantityInput} />
                      <button onClick={(e) => e.preventDefault()}>-</button>
                    </form>
                    <motion.div
                      className="icon add-to-cart d-flex align-items-center justify-content-center"
                      variants={btnIconAnimation}
                      initial="hidden"
                      whileHover="show"
                      onClick={() => {
                        console.log("object");
                      }}
                    >
                      <span>Add To Cart</span>
                    </motion.div>
                    <motion.div
                      className="icon add-to-fav d-flex align-items-center justify-content-center"
                      variants={btnIconAnimation}
                      initial="hidden"
                      whileHover="show"
                    >
                      <FaRegHeart />
                    </motion.div>
                  </section>
                  <ul className="sharing mb-0 d-flex align-items-center">
                    <li>
                      <span>Share:</span>
                    </li>
                    <li className="d-flex align-items-center justify-content-center">
                      <FaFacebookF />
                    </li>
                    <li className="d-flex align-items-center justify-content-center">
                      <FaInstagram />
                    </li>
                    <li className="d-flex align-items-center justify-content-center">
                      <FaTwitter />
                    </li>
                  </ul>
                  <div className="send-email">
                    <span className="d-flex align-items-center justify-content-center">
                      <MdOutlineEmail style={{ paddingRight: "4px" }} />
                      Email to friend.
                    </span>
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
};

export default PreviewItem;
