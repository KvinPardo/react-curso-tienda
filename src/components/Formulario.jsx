import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { IoMdArrowBack } from "react-icons/io";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
// import CompraLista from "./CompraLista";

const Formulario = () => {
  const { cart, clearCart, total } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [codigo, setCodigo] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //  Validación del formulario
    if ([nombre, correo, password, ciudad, pais, codigo].includes("")) {
      console.log("Hay al menos un campo vacío");

      setError(true);
      return;
    }

    setError(false);
    makeOrder();
    navigate(`/compra-exitosa`)
  };

  const makeOrder = () => {
    const user = {
      name: "Kevin Pardo Veas",
      phone: 232323222,
      email: "kevin.pardov26@gmail.com",
    };

    const order = {
      buyer: user,
      items: cart,
      total: total,
    };
    console.log("Levantando orden", order);
    saveOrder(order);
  };

  const saveOrder = async (order) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const id = await addDoc(orderCollection, order);
    // console.log("Nueva orden: ", id);
  };

  return (
    <div className="container mx-auto md:flex justify-center items-center w-full md:pt-0 md:h-[580px]">
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="md:flex md:flex-col self-start w-full mr-6 md:h-[380px] mt-24">
          <h2 className="font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase">
            Resumen
          </h2>
          <div className="flex flex-col border border-gray-200 p-4 mt-6 h-full justify-center space-y-2">
            <div className="flex flex-row justify-between font-light text-sm text-gray-600 tracking-wide leading-normal">
              <p>Cantidad de Productos:</p>
              <p>1</p>
            </div>
            <div className="flex flex-row justify-between font-light text-sm text-gray-600 tracking-wide leading-normal">
              <p>Gastos de envío:</p>
              <p>¡Envío gratis!</p>
            </div>
            <div className="flex flex-row justify-between font-semibold mt-10 text-xs text-gray-700 tracking-wider leading-loose uppercase">
              <p>Total:</p>
              <p>$1,272.00</p>
            </div>
          </div>
          <Link
            className="font-light text-sm text-gray-600 tracking-wide leading-normal flex flex-row items-center mt-3 lowercase"
            to={`/carrito`}
          >
            <IoMdArrowBack className="" /> Volver al carrito
          </Link>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 max-w-lg container mx-auto md:flex md:flex-col justify-center p-0 md:mt-24 mt-16"
      >
        {error && (
          <div>
            <p className="bg-red-800 text-white uppercase text-center p-2 font-bold mb-3 rounded italic">
              Todos los campos son obligatorios
            </p>
          </div>
        )}
        <div className="flex flex-wrap -mx-3 mb-6 ">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block md:flex uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="nombre"
            >
              Nombre Completo
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="nombre"
              type="text"
              placeholder="Kevin Pardo Veas"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              // onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="correo"
            >
              Correo
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="correo"
              type="email"
              placeholder="correo@correo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6 ">
          <div className="w-full px-3 ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-gray-600 text-xs italic w-full ">
              Debe contener mínimo 6 carácteres.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2 ">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="ciudad"
            >
              Ciudad
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="ciudad"
              type="text"
              placeholder="Santiago"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="pais"
            >
              País
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="pais"
                value={pais}
                onChange={(e) => setPais(e.target.value)}
              >
                <option>Chile</option>
                <option>Argentina</option>
                <option>Perú</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="codigo"
            >
              Código Postal
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="codigo"
              type="text"
              placeholder={90210}
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-between items-center ">
          <div className="w-full mt-4">
            <input
              onClick={makeOrder}
              type="submit"
              value="Proceder al Pago"
              className="uppercase bg-primary flex p-4 justify-center items-center text-white w-full font-medium hover:bg-gray-600 cursor-pointer transition-all"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
