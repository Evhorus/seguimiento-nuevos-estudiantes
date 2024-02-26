const Estudiante = ({ estudiante, setEstudiante, eliminarEstudiante }) => {
  const {
    nombreEstudiante,
    nombrePadre,
    nombreMadre,
    fechaIngreso,
    observaciones,
    id,
  } = estudiante;

  const handleEliminar = () => {
    const respuestaEliminar = confirm("Deseas eliminar el estudiante?");

    if (respuestaEliminar) {
      eliminarEstudiante(id);
    }
  };

  return (
    <div className="mx-3 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre del Estudiante:{" "}
        <span className="font-normal normal-case">{nombreEstudiante}</span>{" "}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre del Padre:{" "}
        <span className="font-normal normal-case">{nombrePadre}</span>{" "}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre de la Madre:{" "}
        <span className="font-normal normal-case">{nombreMadre}</span>{" "}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de ingreso:{" "}
        <span className="font-normal normal-case">{fechaIngreso}</span>{" "}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Observaciones:{" "}
        <span className="font-normal normal-case">{observaciones}</span>{" "}
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg"
          onClick={() => setEstudiante(estudiante)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-500 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Estudiante;
