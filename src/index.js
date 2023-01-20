import React from "react";
import { createRoot } from "react-dom/client";

const page = (
  <div>
    <img src={require("/react-logo.png")} width="40px" alt="react-logo" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile ap</li>
    </ul>
  </div>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(page);
