import { useState } from "react";
import InvestmentInput from "../InvestmentInput/InvestmentInput";

const Investment = ({ handleSetInvestment }) => {
  return (
    <>
      <div className="input-group">
        <InvestmentInput
          inputTitle={"initial investment"}
          type={"initialInvestment"}
          handleSetInvestment={handleSetInvestment}
        ></InvestmentInput>
        <InvestmentInput
          inputTitle={"annual investment"}
          type={"annualInvestment"}
          handleSetInvestment={handleSetInvestment}
        ></InvestmentInput>
      </div>
      <div className="input-group">
        <InvestmentInput
          inputTitle={"expected return"}
          type={"expectedReturn"}
          handleSetInvestment={handleSetInvestment}
        ></InvestmentInput>
        <InvestmentInput
          inputTitle={"duration"}
          type={"duration"}
          handleSetInvestment={handleSetInvestment}
        ></InvestmentInput>
      </div>
    </>
  );
};

export default Investment;
