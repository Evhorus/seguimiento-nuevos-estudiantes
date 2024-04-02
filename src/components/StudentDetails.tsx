import { Student } from "../types";
import StudentDetailItem from "./StudentDetailItem";
import { useStudentStore } from "../store/store";
import { toast } from "react-toastify";

type StudentDetailsProps = {
  student: Student;
};

export default function StudentDetails({ student }: StudentDetailsProps) {
  const deleteStudent = useStudentStore((state) => state.deleteStudent);
  const getStudentById = useStudentStore((state) => state.getStudentById);

  const handleDelete = () => {
    deleteStudent(student.id);
    toast.error("Estudiante Eliminado Correctamente");
  };

  const handleEdit = () => {
    getStudentById(student.id);
    const formElement = document.getElementById("form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <StudentDetailItem label="ID" data={student.id} />
      <StudentDetailItem label="Nombre" data={student.nameStudent} />
      <StudentDetailItem label="Padre" data={student.nameFather} />
      <StudentDetailItem label="Madre" data={student.nameMother} />
      <StudentDetailItem label="Email Contacto" data={student.emailContact} />
      <StudentDetailItem
        label="Fecha De Ingreso"
        data={student.date.toString()}
      />
      <StudentDetailItem label="Observaciones" data={student.observations} />

      <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEdit}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
