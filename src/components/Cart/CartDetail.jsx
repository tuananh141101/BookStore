import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

const CartDetail = () => {
  const [quantityInput, setQuantityInput] = useState(1);

  return (
    <>
      <div className="cart-detail">
        <p className="mb-0 border-bottom">Cart - 2 Items</p>
        <div className="border-bottom d-flex align-items-center justify-content-between">
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
        </div>
      </div>
    </>
  );
};

export default CartDetail;
