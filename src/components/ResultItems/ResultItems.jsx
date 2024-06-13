import { formatter } from "../../util/investment";

const ResultItems = ({
  year,
  valueEndOfYear,
  interest,
  totalInterest,
  investedCapital,
}) => {
  return (
    <tr>
      <td>{year}</td>
      <td>{formatter.format(valueEndOfYear)}</td>
      <td>{formatter.format(interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(investedCapital)}</td>
    </tr>
  );
};

export default ResultItems;
