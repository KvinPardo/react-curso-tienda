import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Comprar = () => {
  const { cart, clearCart, total } = useContext(CartContext);

  return (
    <>
      <div className="w-100 container mx-auto flex flex-col gap-y-2 h-[640px] justify-center items-center overflow-y-scroll overflow-x-hidden pt-36 mt-20">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4 justify-center items-center">
        <div className="flex w-full justify-end items-center container mx-auto gap-[50px] border border-gray-500">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>

          {/* Limpiar carrito */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
          <div className="">
            <Link
              // onClick={makeOrder()}
              to="/comprar"
              className="bg-primary flex p-4 text-white w-full font-medium uppercase"
            >
              Comprar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comprar;
