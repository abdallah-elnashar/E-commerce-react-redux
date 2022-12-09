import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { AiOutlineHeart } from "react-icons/ai";

//

const Product = ({ title, salePrice, price, id, image }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCartHandler({ title, price, id, image }));
  };

  let newTitle = title.slice(0, 30);

  return (
    <div
      key={id}
      className=" bg-white p-4 shadow-lg rounded sm:w-44   mb-4 md:w-1/5 sm:h-96  md:h-96"
    >
      <div className="mb-3 sm:mb-10">
        <Link to={`/product/${id}/${title}`}>
          <img className=" w-48 h-48 cursor-pointer" src={image} alt="mage" />
        </Link>
      </div>
      <div className="flex flex-col items-start">
        <p className=" mb-2 text-secondary sm:text-sm font-bold">{newTitle}</p>
        <p className="mb-2 text-primary sm:text-sm text-lg  font-bold">
          ${price}
        </p>
        <div className="flex items-center justify-between sm:mt-3 mt-5 w-full mb-3">
          <button
            onClick={addToCartHandler}
            className="bg-primary text-white sm:px-3 sm:py-2 sm:text-xs px-3 py-1 rounded-md "
          >
            Add To Cart
          </button>
          <AiOutlineHeart className=" ml-8 text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Product;
