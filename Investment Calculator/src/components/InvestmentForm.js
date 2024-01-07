import calculateHandler from "./calculateHandler";
import React, {useState} from "react";
import TableRolls from "./TableRolls";

export default function InvestmentForm(props){

    const [savings, setSavings] = useState();
    const [contribution, setContribution] = useState();
    const [expectedReturn, setExpectedReturn] = useState();
    const [duration, setDuration] = useState();

      function currentSavingsHandler(ev){

        setSavings(ev.target.value);
      }

      function yearlyContributionHandler(ev){
        
        setContribution(ev.target.value);
      }

      function expectedReturnHandler(ev){

        setExpectedReturn(ev.target.value);
      }

      function durationHandler(ev){

        setDuration(ev.target.value);
      }

      let userInput = {

        'current-savings': savings,
        'yearly-contribution': contribution,
        'expected-return': expectedReturn,
        'duration': duration
    };

    let result = [];

      function CalculateHandler(ev){
        ev.preventDefault();

        calculateHandler(userInput);

      }


    return(
 <div>
     <form className="form" onSubmit={CalculateHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" onChange={currentSavingsHandler} id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" onChange={yearlyContributionHandler} id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" onChange={expectedReturnHandler} id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" onChange={durationHandler} id="duration" />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
      <div>
            <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
</div>
   </div>
    );
}