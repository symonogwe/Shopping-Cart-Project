import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { CartContext } from "../MainApp/App";
import Store from "./Store";
import mockData from "../NavBar/NavUtils";

function MockStore() {
  const updateCart = vi.fn();
  const dataObj = {
    data: mockData(),
    loading: "",
    error: "",
  };
  return (
    <BrowserRouter>
      <CartContext.Provider value={{ updateCart, dataObj }}>
        <Store />
      </CartContext.Provider>
    </BrowserRouter>
  );
}

describe("Store component test", () => {
  it("Should contain the store heading", () => {
    render(<MockStore />);
    const heading = screen.getByRole("heading", { name: /Your Store/i });

    expect(heading).toBeInTheDocument();
  });

  it("Fetches data and displays information on individual cards", async () => {
    render(<MockStore />);

    const allCards = screen.findAllByTestId("product-cards");
    expect((await allCards).length).toBe(20);
  });
});
