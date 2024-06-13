import { useState } from "react";
import Investment from "./components/Investment/Investment";
import Results from "./components/Results/Results";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });

  const handleSetInvestment = (type, value) => {
    setInvestment((oldInvestment) => {
      let updatedInvestment = {
        ...oldInvestment,
        [type]: type === "expectedReturn" ? +value / 100 : +value,
      };

      return updatedInvestment;
    });
  };

  return (
    <main className="">
      <section id="user-input">
        <Investment handleSetInvestment={handleSetInvestment}> </Investment>
      </section>
      <section>
        <Results investment={investment}></Results>
      </section>
    </main>
  );
}

export default App;
