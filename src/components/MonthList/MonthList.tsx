import "./MonthList.css";
const MonthList = () => {
  const year = "2024";
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <ul className="monthList">
      {months.map((m) => (
        <li>
          <a href={`/balance/${year}/${m.toLowerCase()}`}> {m}</a>
        </li>
      ))}
    </ul>
  );
};

export default MonthList;
