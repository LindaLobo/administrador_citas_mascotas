import React from "react";

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente
  console.log(id)

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar al paciente?");

    if(respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl ">
      <p className="font-bold text-gray-700 mb-3 ">
        Nombre: {""}
        <span className="font-normal normal-case ">{nombre}</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 ">
        Propietario: {""}
        <span className="font-normal normal-case ">{propietario}</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 ">
        Email: {""}
        <span className="font-normal normal-case ">{email}</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 ">
        Fecha Alta: {""}
        <span className="font-normal normal-case ">{fecha}</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 ">
        Sintomas: {""}
        <span className="font-normal normal-case ">
          {sintomas}
        </span>
      </p>

      <div className="flex justify-between mt-10 " >
        <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 
        text-white font-bold uppercase rounded-md" onClick={() => setPaciente(paciente)} 
        >Editar</button>
        <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-800
         text-white font-bold uppercase rounded-md" onClick={handleEliminar } 
          >Eliminar</button>
      </div>
    </div>
  );
};

export default Paciente;
