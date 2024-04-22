import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const CartDetail = () => {
  const dispatch = useDispatch();
  const getCart = useSelector((state) => state.carts.cart);
  console.log(">>> check get cart = ", getCart);

  return (
    <>
      <div className="cart-detail">
        <p className="mb-0 border-bottom">Cart - 2 Items</p>
        {getCart?.map((item, index) => {
          return (
            <>
              <div
                className="border-bottom d-flex align-items-center justify-content-between"
                key={index}
              >
                <div className="image">
                  <img
                    src={`https://websitebook-api.vercel.app${item.image}`}
                    alt=""
                  />
                </div>

                <div className="name">
                  <ul>
                    <li>{item.name}</li>
                    <li>
                      <span>Author:</span> {item.author}
                    </li>
                    <li>
                      <span>Categories:</span> {item.author}
                    </li>
                  </ul>
                </div>

                <div className="input-quality">
                  <button
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   if (quantityInput > 1) {
                  //     setQuantityInput(quantityInput - 1);
                  //   }
                  // }}
                  // style={{
                  //   opacity: quantityInput === 1 ? "0.8" : "1",
                  // }}
                  >
                    -
                  </button>
                  <input type="number" value={item.quantity} min="0" />
                  <button
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   setQuantityInput(quantityInput + 1);
                  // }}
                  >
                    +
                  </button>
                </div>

                <div className="price">
                  <p className="mb-0">{item.price}$</p>
                </div>

                <div className="delete">
                  <button>
                    <MdOutlineDelete />
                  </button>
                </div>
              </div>
            </>
          );
        })}
        {/* <div className="border-bottom d-flex align-items-center justify-content-between">
          <div className="image">
            <img
              src="https://websitebook-api.vercel.app/images/img-book-1.png"
              alt=""
            />
          </div>

          <div className="name">
            <ul>
              <li>Blessing in Disguise: A Novel</li>
              <li>
                <span>Author:</span> Danielle Steel
              </li>
              <li>
                <span>Categories:</span> Fiction, Uncategoried
              </li>
            </ul>
          </div>

          <div className="input-quality">
            <button
              onClick={(e) => {
                e.preventDefault();
                if (quantityInput > 1) {
                  setQuantityInput(quantityInput - 1);
                }
              }}
              style={{
                opacity: quantityInput === 1 ? "0.8" : "1",
              }}
            >
              -
            </button>
            <input type="number" value={quantityInput} min="0" />
            <button
              onClick={(e) => {
                e.preventDefault();
                setQuantityInput(quantityInput + 1);
              }}
            >
              +
            </button>
          </div>

          <div className="price">
            <p className="mb-0">15$</p>
          </div>

          <div className="delete">
            <button>
              <MdOutlineDelete />
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CartDetail;
