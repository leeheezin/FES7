import IncomeInput from "./containers/IncomeInput/IncomeInput";
import ExpenseInput from "./containers/ExpenseInput/ExpenseInput";
import ExpenseList from "./containers/ExpenseList/ExpenseList";
import ExpenseTotal from "./containers/ExpenseTotal/ExpenseTotal";

function App() {
  return (
    <article>
      <header>
        수입 input
        <IncomeInput/>
      </header>
      <main>
        지출 input
        <ExpenseInput/>
        <div>
          지출 기록
          <ExpenseList/>
        </div>
        <div>
          지출 총합
          <ExpenseTotal/>
        </div>
      </main>
    </article>
  );
}
export default App;
