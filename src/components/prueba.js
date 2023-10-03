//import ExpenseDate from './ExpenseDate';
import "./prueba.css";

function Prueba(props) {
  return (
    <center>
      <div className="button">
        <button class={props.clase}>{props.nombre}</button>
      </div>
    </center>
  );
}

export default Prueba;
