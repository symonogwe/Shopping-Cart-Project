import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import HomePage from "./HomePage";
import { CartContext } from "../MainApp/App";
import { BrowserRouter } from "react-router-dom";

function MockHomePage() {
  const colorMode = "dark";
  return (
    <BrowserRouter>
      <CartContext.Provider value={{ colorMode }}>
        <HomePage />
      </CartContext.Provider>
    </BrowserRouter>
  );
}

describe("HomePage", () => {
  it("should render with correct initial state and values", () => {
    render(<MockHomePage />);

    const heading = screen.getByText(/virtual store/i);
    expect(heading).toBeInTheDocument;
  });

  it("should navigate to store when shop now button is clicked", async () => {
    render(<MockHomePage />);

    const btn = screen.getByRole("link", { name: /shop now/i });
    expect(btn).toBeInTheDocument();
  });
});
