import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
// Components
import App from "./App";

function MockApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

describe("App component", () => {
  it("Renders the main box div on the page", () => {
    render(<MockApp />);
    const mainBox = screen.getByTestId("main-app-box");
    expect(mainBox).toBeInTheDocument();
  });
});
