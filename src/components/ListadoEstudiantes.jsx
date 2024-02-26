import Estudiante from "./Estudiante";
const ListadoEstudiantes = ({
  estudiantes,
  setEstudiante,
  eliminarEstudiante,
}) => {
  return (
    <div className="md:w1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {estudiantes && estudiantes.length > 0 ? (
        <>
          <h2 className="font-black text-2xl sm:text-3xl text-center">
            Listado Estudiantes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra los <span className="text-indi">estudantes</span>
          </p>
          {estudiantes.map((estudiante) => (
            <Estudiante
              key={estudiante.id}
              estudiante={estudiante}
              setEstudiante={setEstudiante}
              eliminarEstudiante={eliminarEstudiante}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-2xl sm:text-3xl text-center">
            No hay Estudiantes
          </h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Comienza agregando Estudiantes {""}
            <span className="text-violet-500 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoEstudiantes;
