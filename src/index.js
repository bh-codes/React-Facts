import { createRoot } from "react-dom/client";
import Header from "/components/Header";
import MainContent from "/components/MainContent";
import "./styles.css";

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Page />);
