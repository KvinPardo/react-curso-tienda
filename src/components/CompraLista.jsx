import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CompraLista = () => {
  return (
    <div className="mx-auto flex justify-center items-center h-screen">
      <div className="w-full text-center flex justify-center items-center flex-col">
        <BsFillCartCheckFill className="text-[100px] text-green-700" />
        <h3 className="uppercase text-4xl text-primary pt-10">¡Compra Exitosa!</h3>
        <Link
          to="/"
          >  
          <button className="border-none px-4 py-4 rounded-md bg-slate-600 mt-5 text-white">Volver a la tienda</button>
        </Link>
        
      </div>
      
    </div>
  );
};

export default CompraLista;
