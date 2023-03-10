import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
// import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
// import MakeOrder from '../components/MakeOrder'

const CartWidget = () => {
  // const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);
  // console.log(useContext(CartContext));

  // const [item, setItem] = useState();
  const [items, setItems] = useState({});

  useEffect(() => {
    // getItemData()
    getItems();
  }, []);

  // const getItemData = () => {
  //   const db = getFirestore();
  //   const docRef = doc(db , 'items', '2z7irLkdAXwyZ0e9jS9Q');
  //   getDoc( docRef ).then( snapshot => {
  //     setItem( {id: snapshot.id, ...snapshot.data()});
  //     // console.log( snapshot.id());
  //   })

  // }

  const getItems = async () => {
    const db = getFirestore();
    const collectionRef = collection(db, "items");
    const snapshot = await getDocs(collectionRef);
    setItems(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  // Si el producto no existe
  if (!cart) {
    return (
      <Loader />

      // <div className="flex items-center justify-center h-screen">
      //   <div className="spinner">
      //     <div className="rect1"></div>
      //     <div className="rect2"></div>
      //     <div className="rect3"></div>
      //     <div className="rect4"></div>
      //     <div className="rect5"></div>
      //   </div>

      // </div>
    );
  }

  return (
    <div className="container mx-auto h-full py-20 md:w-full">
      <div className="uppercase text-xl font-semibold py-5 px-0">Carrito</div>
      <div className="hidden md:flex items-center justify-around gap-20 py-6 border border-collapse">
        <div className="uppercase text-sm font-semibold">Producto</div>
        <div className="uppercase text-sm font-semibold">Nombre</div>
        <div className="uppercase text-sm font-semibold">Cantidad</div>
        <div className="uppercase text-sm font-semibold">Precio</div>
        <div className="uppercase text-sm font-semibold">SubTotal</div>
      </div>
      <div className="block md:flex md:flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border px-8">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
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
        </div>

        <Link
          // onClick= {getItemData}
          to="/formulario"
          className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium"
        >
          CheckOut
        </Link>
      </div>
    </div>
  );
};

export default CartWidget;
