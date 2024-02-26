import { useState, useEffect } from "react";
import Error from "./Error";
const Formulario = ({
  estudiantes,
  setEstudiantes,
  estudiante,
  setEstudiante,
}) => {
  const [nombreEstudiante, setNombreEstudiante] = useState("");
  const [nombrePadre, setNombrePadre] = useState("");
  const [nombreMadre, setNombreMadre] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (Object.keys(estudiante).length > 0) {
      setNombreEstudiante(estudiante.nombreEstudiante);
      setNombrePadre(estudiante.nombrePadre);
      setNombreMadre(estudiante.nombreMadre);
      setFechaIngreso(estudiante.fechaIngreso);
      setObservaciones(estudiante.observaciones);
    }
  }, [estudiante]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [
        nombreEstudiante,
        nombrePadre,
        nombreMadre,
        fechaIngreso,
        observaciones,
      ].includes("")
    ) {
      setError(true);
      return;
    }
    setError(false);

    const objetoEstudiante = {
      nombreEstudiante,
      nombrePadre,
      nombreMadre,
      fechaIngreso,
      observaciones,
    };

    if (estudiante.id) {
      objetoEstudiante.id = estudiante.id;
      const estudiantesActualizados = estudiantes.map((estudianteState) =>
        estudianteState.id === estudiante.id
          ? objetoEstudiante
          : estudianteState
      );
      setEstudiantes(estudiantesActualizados);
      setEstudiante({});
    } else {
      objetoEstudiante.id = generarId();
      setEstudiantes([...estudiantes, objetoEstudiante]);
    }
    console.log("pasa");
    setNombreEstudiante("");
    setNombrePadre("");
    setNombreMadre("");
    setFechaIngreso("");
    setObservaciones("");
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-2xl sm:text-3xl text-center">
        Seguimiento Estudiantes
      </h2>
      <p className="sm:text-lg mt-5 text-center mb-10">
        Añadir Estudiantes y {""}
        <span className="text-violet-500 font-bold text-lg">Administralos</span>
      </p>
      {error && (
        <Error>
          <p>Todos los campos son obligatorios</p>
        </Error>
      )}
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="estudiante"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Estudiante
          </label>
          <input
            id="estudiante"
            type="text"
            placeholder="Nombre del estudiante"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombreEstudiante}
            onChange={(e) => setNombreEstudiante(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="padre"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Padre
          </label>
          <input
            id="padre"
            type="text"
            placeholder="Nombre del padre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombrePadre}
            onChange={(e) => setNombrePadre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="madre"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Madre
          </label>
          <input
            id="madre"
            type="text"
            placeholder="Nombre de la madre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombreMadre}
            onChange={(e) => setNombreMadre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fecha-ingreso"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de Ingreso
          </label>
          <input
            id="fecha-ingreso"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fechaIngreso}
            onChange={(e) => setFechaIngreso(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="obeservaciones"
            className="block text-gray-700 uppercase font-bold"
          >
            Observaciones
          </label>
          <textarea
            id="observaciones"
            type="text-area"
            placeholder="Observaciones del estudiante"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
          value={estudiante.id ? "Actualizar Estudiante" : "Agregar Estudiante"}
        />
      </form>
    </div>
  );
};

export default Formulario;
