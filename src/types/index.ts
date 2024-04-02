export type Student = {
  id: string;
  nameStudent: string;
  nameFather: string;
  nameMother: string;
  emailContact: string;
  date: Date;
  observations: string;
};

export type DraftStudent = Omit<Student, "id">;
