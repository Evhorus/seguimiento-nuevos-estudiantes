import { useStudentStore } from "../store/store";
import StudentDetails from "./StudentDetails";

export default function StudentsList() {
  const students = useStudentStore((state) => state.students);

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {students.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado Estudiantes
          </h2>
          <p className="text-xl mt-5 mb-10 font-bold text-center">
            Administra los estudantes
          </p>
          {students.map((student) => (
            <StudentDetails key={student.id} student={student} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay estudiantes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando Estudiantes{" "}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
}
