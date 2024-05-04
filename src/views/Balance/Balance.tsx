import { useParams } from "react-router-dom";
import "./Balance.css";

const Balance = () => {
  const { month }: any = useParams();

  const text = month?.charAt(0).toUpperCase() + month?.slice(1);
  return (
    <>
      <article className="balanceView">
        <section className="sectionGraph">
          <h1>Balance mes de {text}</h1>
        </section>
        <nav>
          <button>Ingresos</button>
          <button>Egresos</button>
          <button>Balance</button>
        </nav>
        <section className="sectionData">
          <table>
            <tr>
              <th>Sueldo</th>
            </tr>
            <tr>
              <td>Ingreso Bruto</td>
              <td>Editar</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Descuento</td>
              <td>Editar</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Ingreso Neto</b>
              </td>
              <td>0</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>Ingresos Extra</th>
              <td>Ver detalle</td>
              <td>0</td>
            </tr>
            <tr>
              <th>Ingreso Total</th>
              <td>0</td>
            </tr>
          </table>
        </section>
      </article>
    </>
  );
};

export default Balance;
