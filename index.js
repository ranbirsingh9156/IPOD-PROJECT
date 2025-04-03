import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Ensure the root element exists before creating the root
if (rootElement) {
  const root = createRoot(rootElement);

  // Render the React application
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Failed to find the root element. Ensure there is an element with id 'root' in the HTML.");
}
