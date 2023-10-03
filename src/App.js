import "./styles.css";
import Prueba from "./components/prueba";
import Carta from "./components/carta";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Mochiy Pop One:wght@400&display=swap"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen! dda</h2>
      <Prueba clase="btn btn-primary" nombre="boton 1" />
      <Prueba clase="btn btn-warning" nombre="boton 2" />

      <Carta
        src="https://www.grupocoprodumat.com/wp-content/uploads/2021/09/1de10cf4-854d-444b-83fa-70c22893aa4a-1.jpg"
        desc="queso"
      />
    </div>
  );
}

export default App;
