import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import HomePage from "../HomePage/HomePage";
import App, { CartContext } from "./App";

import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

function MockApp() {
  const colorMode = "dark";
  return (
    <BrowserRouter>
      <App />
      <CartContext.Provider value={{ colorMode }}>
        <HomePage />
      </CartContext.Provider>
    </BrowserRouter>
  );
}

describe("App component", () => {
  it("Should render correct initial values and state", async () => {
    render(<MockApp />);

    const navBar = screen.getByTestId("navbar");
    expect(navBar).toBeInTheDocument();

    const homePage = screen.getByText(/virtual store/i);
    expect(homePage).toBeInTheDocument();
  });

  it("Should render the store component when shop now is clicked", async () => {
    const user = userEvent.setup();

    render(<MockApp />);

    const storeBtn = screen.getByRole("link", { name: /shop now/i });

    await user.click(storeBtn);
  });
});
