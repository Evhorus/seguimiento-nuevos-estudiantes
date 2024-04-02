import { create } from "zustand";
import { DraftStudent, Student } from "../types";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
type StudentState = {
  students: Student[];
  activeId: Student["id"];
  addStudent: (data: DraftStudent) => void;
  deleteStudent: (id: Student["id"]) => void;
  getStudentById: (id: Student["id"]) => void;
  updateStudent: (data: DraftStudent) => void;
};

const createStudent = (student: DraftStudent): Student => {
  return { ...student, id: uuidv4() };
};

export const useStudentStore = create<StudentState>()(
  devtools(
    persist(
      (set) => ({
        students: [],
        activeId: "",
        addStudent: (data) => {
          const newStudent = createStudent(data);
          set((state) => ({
            students: [...state.students, newStudent],
          }));
        },
        deleteStudent: (id) => {
          set((state) => ({
            students: state.students.filter((student) => student.id !== id),
          }));
        },
        getStudentById: (id) => {
          set(() => ({
            activeId: id,
          }));
        },
        updateStudent: (data) => {
          set((state) => ({
            students: state.students.map((student) =>
              student.id === state.activeId
                ? { id: state.activeId, ...data }
                : student
            ),
            activeId: "",
          }));
        },
      }),
      {
        name: "students-storage",
      }
    )
  )
);
