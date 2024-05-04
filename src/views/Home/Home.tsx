import "./Home.css";
const Home = () => {
  return (
    <main className="homeMain">
      <section>
        <h1>Bienvenido Valentino.</h1>
      </section>
      <section className="sectionMoney">
        <ul>
          <li>
            <span>0</span>
            <span>Dinero disponible</span>
          </li>
          <li>
            <span>0</span>
            <span>Dinero Invertido</span>
          </li>
          <li>
            <span>0</span>
            <span>Dinero Ahorrado</span>
          </li>
          <li>
            <span>0</span>
            <span>Total</span>
          </li>
          <li>
            <span>0</span>
            <span>Meta</span>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
