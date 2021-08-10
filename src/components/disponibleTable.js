import "./style/form.scss";
import chekIcon from "../assets/imges/check.png"
import "./style/disponibleTable.scss";
const DisponibleTable = (props) => {
  return (
    <div>
      <div className="disponible" style={{ width: `${props.width}` }}>
        <table className="fl-table">
          <thead>
            <tr>
            <th>HORAIRES</th>
              <th>Lundi</th>
              <th>Mardi</th>
              <th>Mercredi</th>
              <th>Jeudi</th>
              <th>Vendredi</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td>08h - 10h</td>
              <td><img src={chekIcon} className="checkIcon"></img></td>
              <td><img src={chekIcon} className="checkIcon"></img></td>
              <td></td>
              <td></td>
              <td><img src={chekIcon} className="checkIcon"></img></td>

            </tr>
            <tr>
              <td>10h - 12h</td>
              <td><img src={chekIcon} className="checkIcon"></img></td>
              <td><img src={chekIcon} className="checkIcon"></img></td>
              <td><img src={chekIcon} className="checkIcon"></img></td>
              <td><img src={chekIcon} className="checkIcon"></img></td>
              <td></td>

            </tr>
            <tr>
              <td>12h - 14h</td>
              <td><img src={chekIcon} className="checkIcon"></img></td>
              <td><img src={chekIcon} className="checkIcon"></img></td>
              <td></td>
              <td><img src={chekIcon} className="checkIcon"></img></td>
              <td></td>

            </tr>
            <tr>
              <td>14h - 16h</td>
              <td><img src={chekIcon} className="checkIcon"></img></td>
              <td><img src={chekIcon} className="checkIcon"></img></td>
              <td><img src={chekIcon} className="checkIcon"></img></td>
              <td></td>
              <td><img src={chekIcon} className="checkIcon"></img></td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DisponibleTable;
