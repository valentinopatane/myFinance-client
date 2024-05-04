import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navMain">
      <h1>myFinance</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/balance">Balance</a>
        </li>
        <li>
          <a href="/balance">Inversiones</a>
        </li>
        <li>
          <a href="/balance">Cotizaciones</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
