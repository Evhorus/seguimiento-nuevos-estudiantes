import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Error from "../components/Error";
import { DraftStudent } from "../types";
import { useStudentStore } from "../store/store";
import { useEffect } from "react";
export default function StudentForm() {
  const addStudent = useStudentStore((state) => state.addStudent);
  const activeId = useStudentStore((state) => state.activeId);
  const students = useStudentStore((state) => state.students);
  const updateStudent = useStudentStore((state) => state.updateStudent);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<DraftStudent>();

  useEffect(() => {
    if (activeId) {
      const activeStudent = students.filter(
        (student) => student.id === activeId
      )[0];
      setValue("nameStudent", activeStudent.nameStudent);
      setValue("nameFather", activeStudent.nameFather);
      setValue("nameMother", activeStudent.nameMother);
      setValue("emailContact", activeStudent.emailContact);
      setValue("date", activeStudent.date);
      setValue("observations", activeStudent.observations);
    }
  }, [activeId, students, setValue]);
  const registerStudent = (data: DraftStudent) => {
    if (activeId) {
      updateStudent(data);
      toast.success("Estudiante Actualizado Correctamente");
    } else {
      addStudent(data);
      toast.success("Estudiante Registrado Correctamente");
    }
    reset();
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento Estudiantes
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añadir Estudiantes y {""}
        <span className="text-indigo-600 font-bold">Administrarlos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerStudent)}
      >
        <div className="mb-5">
          <label htmlFor="nameStudent" className="text-sm uppercase font-bold">
            Estudiante
          </label>
          <input
            id="nameStudent"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Estudiante"
            {...register("nameStudent", {
              required: "El Nombre del Estudiante es obligatorio",
            })}
          />
          {errors.nameStudent && <Error>{errors.nameStudent?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="nameFather" className="text-sm uppercase font-bold">
            Padre
          </label>
          <input
            id="nameFather"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Padre"
            {...register("nameFather", {
              required: "El Nombre del Padre es obligatorio",
            })}
          />
          {errors.nameFather && <Error>{errors.nameFather?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="nameMother" className="text-sm uppercase font-bold">
            Madre
          </label>
          <input
            id="nameMother"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre de la Madre"
            {...register("nameMother", {
              required: "El Nombre de la Madre es obligatorio",
            })}
          />
          {errors.nameMother && <Error>{errors.nameMother?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="emailContact" className="text-sm uppercase font-bold">
            Email Contacto
          </label>
          <input
            id="emailContact"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Email de Contacto"
            {...register("emailContact", {
              required: "El Email de Contacto es Obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email No Válido",
              },
            })}
          />
          {errors.emailContact && <Error>{errors.emailContact?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Ingreso
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
            {...register("date", {
              required: "La fecha de ingreso es obligatoria",
            })}
          />
          {errors.date && <Error>{errors.date?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="observations" className="text-sm uppercase font-bold">
            Observaciones
          </label>
          <textarea
            id="observations"
            className="w-full p-3  border border-gray-100"
            placeholder="Observaciones del estudiante"
            {...register("observations", {
              required: "Las observaciones son obligatorias",
            })}
          />
          {errors.observations && <Error>{errors.observations?.message}</Error>}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={activeId ? "Actualizar Estudiante" : "Guardar Estudiante"}
        />
      </form>
    </div>
  );
}
