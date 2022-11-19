import React from "react";
import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ setPacientes, pacientes, paciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const fechaId = Date.now().toString(32);

    return fechaId;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("alguno esta vacio");

      setError(true);
      return;
    }
    setError(false);

    /* Objeto de Pacientes */
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generarId(),
    };

    //para editar el registro

    if (paciente.id) {
      objetoPaciente.id = paciente.id;
      const pacienteActualizado = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacienteActualizado);
    } else {
      objetoPaciente.id = generarId();

      // console.log(objetoPaciente)
      // ahora en este caso debemos generar una copia para no reescribirlo
      setPacientes([...pacientes, objetoPaciente]);
    }

    //reiniciamos el formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 ">
      <h2 className="font-black text-3xl text-center ">
        Seguimiento de Pacientes
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 "
      >
        {/* pasandole un mensaje al error */}
        {error && <Error mensaje="Todos los campos son obligatorios" />}

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase">
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 m-2 placeholder-stone-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 m-2 placeholder-stone-400 rounded-md "
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase">
            Email del Propietario
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email del Propietario"
            className="border-2 w-full p-2 m-2 placeholder-stone-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase">
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 m-2 placeholder-stone-400 rounded-md "
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 m-2 placeholder-stone-400 rounded-md"
            placeholder="Escribe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full text-white p-3 font-bold hover:bg-indigo-700 cursor-pointer "
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default Formulario;
