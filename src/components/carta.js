import "./carta.css";

function Carta(props) {
  return (
    <center>
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-12 col-md-6">
            <div class="custom-card">
              <img
                src="https://via.placeholder.com/100"
                alt="Imagen de ejemplo"
              />
              <p>Descripción de la carta</p>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}

export default Carta;
