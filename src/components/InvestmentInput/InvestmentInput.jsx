let InvestmentInput = ({ inputTitle, type, handleSetInvestment }) => {
  return (
    <div>
      <label>{inputTitle}</label>
      <span className={"expectedReturn" ? "percentageInput" : ""}>
        <input
          type="text"
          onChange={() => handleSetInvestment(type, event.target.value)}
        ></input>
        {type === "expectedReturn" && <span className="percentage">%</span>}
      </span>
    </div>
  );
};

export default InvestmentInput;
