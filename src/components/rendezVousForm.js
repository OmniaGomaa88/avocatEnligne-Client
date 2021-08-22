import { useState, React } from "react";
import "./style/RNDForm.scss";
import rendezVousService from "../services/rendes_Vous";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import * as moment from "moment";
const RendezVousForm = (props) => {
  const [client_situation, setSituation] = useState("");
  const [date, setDate] = useState(new Date("2021-08-11T12:00:00"));
  const [error, setError] = useState(false);

  const hendelDateChange = (date) => {
    setDate(date);
  };

  const hendelClick = async () => {
    try {
      let avocatId = props.avocatId;
      const beginDate = moment(date).format("YYYY-MM-DD");
      await rendezVousService.addRendezVous(
        client_situation,
        beginDate,
        avocatId
      );
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <div className="rendezVousForm">
        <div className="RDVContainer">
          <div>
            <div className="situation">
              <p className="RNDText"> Votre situation</p>
              <textarea
                className
                onChange={(e) => setSituation(e.target.value)}
              ></textarea>
            </div>

            <div className="date">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="dialog"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-Picker"
                    value={date}
                    onChange={hendelDateChange}
                    KeyboardButtonProps={{
                      "aria-lable": "change date",
                    }}
                    className="dateTime-picker"
                  />
                  <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    value={date}
                    onChange={hendelDateChange}
                    KeyboardButtonProps={{
                      "aria-lable": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </div>

            <button className="RDVBtn" onClick={() => hendelClick()}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RendezVousForm;
