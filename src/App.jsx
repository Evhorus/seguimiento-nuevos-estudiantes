import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoEstudiantes from "./components/ListadoEstudiantes";
import { useState, useEffect } from "react";
function App() {
  const [estudiantes, setEstudiantes] = useState(
    JSON.parse(localStorage.getItem("estudiantes")) ?? []
  );
  const [estudiante, setEstudiante] = useState({});

  useEffect(() => {
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
  }, [estudiantes]);

  const eliminarEstudiante = (id) => {
    const estudiantesActualizados = estudiantes.filter(
      (estudiante) => estudiante.id !== id
    );
    setEstudiantes(estudiantesActualizados);
  };
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-10 md:flex">
        <Formulario
          estudiantes={estudiantes}
          setEstudiantes={setEstudiantes}
          estudiante={estudiante}
          setEstudiante={setEstudiante}
        />
        <ListadoEstudiantes
          setEstudiante={setEstudiante}
          estudiantes={estudiantes}
          eliminarEstudiante={eliminarEstudiante}
        />
      </div>
      <h2 className="text-center">
        <h1>© 2023 - Sebastian Velasco Gonzalez</h1>
      </h2>
    </div>
  );
}

export default App;
