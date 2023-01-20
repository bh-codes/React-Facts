export default function MainContent() {
  return (
    <div className="main">
      <h1 className="main--title">Fun facts about React</h1>
      <div className="body-container">
        <ul className="list--items">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        <img
          className="body--image"
          src={require("../images/react-icon-large.png")}
          alt="react logo background"
        />
      </div>
    </div>
  );
}
