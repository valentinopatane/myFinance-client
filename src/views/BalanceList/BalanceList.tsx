import MonthList from "../../components/MonthList/MonthList";
import "./BalanceList.css";
const Balance = () => {
  return (
    <>
      <section className="balanceSection">
        <div className="yearSelection">{"< 2024 >"}</div>
        <MonthList />
      </section>
    </>
  );
};

export default Balance;
