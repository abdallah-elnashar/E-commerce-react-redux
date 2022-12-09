import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { cartActions } from "../store/cart-slice";

//
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const addToCartHandler = (item) => {
    dispatch(cartActions.addItemToCartHandler({ ...item }));
  };
  const removeFromCartHandler = (id) => {
    dispatch(cartActions.removeItemFromCartHandler(id));
  };

  const totalQuantity = cart.items.reduce(
    (acc, curr) => acc + curr.totalPrice,
    0
  );

  return (
    <div className=" sm:max-w-full sm:items-center flex justify-between sm:flex-col-reverse sm:gap-4 sm:p-0 sm:mt-20 sm:px-2 items-start md:mx-32 mt-32 p-4 ">
      <div className=" md:w-3/5 ">
        {cart.items.length === 0 && (
          <div className=" text-center text-2xl font-bold">
            <h3>Cart is empty</h3>
          </div>
        )}

        {cart.items.length > 0 && (
          <div className="flex flex-col rounded gap-2 md:p-3 ">
            {cart.items.map((item) => (
              <div
                key={item.id}
                className="flex shadow-md bg-white   sm:gap-2 md:gap-5 p-3 rounded h-42"
              >
                <div className=" sm:w-24 sm:h-24 md:w-32 md:h-32">
                  <img
                    className="w-full h-full"
                    src={item.image}
                    alt={`${item.title} image`}
                  />
                </div>
                <div className="flex sm:w-3/4 w-3/5 flex-col  items-start justify-between">
                  <p className=" text-primary text-sm font-bold">
                    {item.title.slice(0, 120)}
                  </p>
                  <div className="flex items-center gap-2 ml-3">
                    <button
                      onClick={() => {
                        removeFromCartHandler(item.id);
                      }}
                    >
                      <AiOutlineMinusCircle size={20} />
                    </button>
                    <span className=" text-lg">{item.quantity}</span>
                    <button
                      onClick={() => {
                        addToCartHandler(item);
                      }}
                    >
                      <AiOutlinePlusCircle size={20} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:w-1/5 justify-between">
                  <p className="text-primary font-bold">{item.price}</p>
                  <button
                    className="flex items-center gap-1 text-red-500"
                    onClick={() => {
                      removeFromCartHandler(item.id);
                    }}
                  >
                    <BsTrash />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col sm:max-w-full rounded shadow-md bg-white py-5 px-4 gap-3 md:min-w-max">
        <div className=" flex rounded overflow-hidden h-10  ">
          <input
            className="text-gray-300 text-sm min-w-max py-2 px-2 w-72 h-full  border-2 border-gray-300 border-r-0"
            type="text"
            placeholder="Add gift card or promo code"
          />
          <button className=" text-white bg-primary font-bold py-2 px-4 h-full ">
            Apply
          </button>
        </div>
        <p className="font-bold">Order summary</p>
        <div className=" flex justify-between items-center">
          <h3 className="">Total</h3>
          <h3>${totalQuantity}</h3>
        </div>
        <button className="bg-primary text-white font-bold py-2 px-4 rounded-full">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
