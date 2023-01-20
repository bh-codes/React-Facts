export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img
          className="nav-logo"
          src={require("../images/react-icon-small.png")}
          alt="react-logo"
        />
        <h3>ReactFacts</h3>
      </nav>
      <h4>React Course - Project 1</h4>
    </header>
  );
}
