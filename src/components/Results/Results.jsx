import { calculateInvestmentResults, formatter } from "../../util/investment";
import ResultItems from "../ResultItems/ResultItems";
const Results = ({ investment }) => {
  let returnResults;

  if (
    investment.initialInvestment &&
    investment.annualInvestment &&
    investment.expectedReturn &&
    investment.duration
  ) {
    returnResults = calculateInvestmentResults(investment);
  }

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {returnResults &&
            returnResults.map((result) => {
              return <ResultItems key={result.year} {...result}></ResultItems>;
            })}
        </tbody>
      </table>
    </>
  );
};

export default Results;
