import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  //  destructure item
  const { id, name, image, price, amount } = item;

  return (
    <div className="w-full flex py-2 lg:px-6 border-b border-gray-200 font-light text-gray-500 ">
      <div className="w-full min-h-[150px] md:flex items-center ">
        <div>
          {/* image */}
          <Link to={`/item/${id}`}>
            <img
              src={image}
              alt=""
              className="md:max-w-[150px] max-w-[200px] py-6 mx-auto"
            />
          </Link>
        </div>
        <div className="w-1/3 md:px-40">
          <span className="">
            {name}
          </span>
        </div>
        <div className="flex h-[36px] text-sm justify-center px-4">
          {/* qty */}
          <div className="flex max-w-[200px] items-center h-full border text-primary font-medium p-2">
            {/* minus icon */}
            <div
              onClick={() => decreaseAmount(id)}
              className="flex justify-center items-center cursor-pointer h-full"
            >
              <IoMdRemove />
            </div>
            {/* amount */}
            <div className="h-full flex justify-center items-center px-4">
              {amount}
            </div>
            {/* plus icon */}
            <div
              onClick={() => increaseAmount(id)}
              className="flex-1 h-full flex justify-center items-center cursor-pointer"
            >
              <IoMdAdd />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-around md:px-[139px] py-12">$ {price}</div>
        {/* final price */}
        {/* make the price at 2 decimals */}
        <div className="flex justify-end items-center text-primary font-medium ">{`$ ${parseFloat(
          price * amount
        ).toFixed(2)}`}</div>
      </div>
      <div
        onClick={() => removeFromCart(id)}
        className="text-xl cursor-pointer"
      >
        <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
      </div>
    </div>
  );
};

export default CartItem;
