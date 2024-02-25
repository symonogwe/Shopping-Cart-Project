import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { CartContext } from "../MainApp/App";
import Store from "./Store";
import { array, bool, string } from "prop-types";
import mockData from "../NavBar/NavUtils";

function MockStore({ loading, products, errorMessage }) {
  const dataObj = {
    data: products,
    loading: loading,
    error: errorMessage,
  };

  const updateCart = vi.fn();

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

  it("Should show the spinner when loading is true", () => {
    render(<MockStore loading={true} />);

    const spinner = screen.getByTestId("store-spinner");
    expect(spinner).toBeInTheDocument();
  });
  it("Should not show a spinner when loading is false", () => {
    render(<MockStore loading={false} />);
    const spinner = screen.queryByTestId("store-spinner");
    expect(spinner).toBe(null);
  });
  it("Should not display any card while still fetching the products", () => {
    render(<MockStore products={[]} loading={true} />);
    const allCards = screen.queryAllByTestId("product-cards");
    expect(allCards.length).toBe(0);
  });
  it("Should display all cards after fetching is complete", () => {
    const mockDataArr = mockData();
    render(<MockStore products={mockDataArr} loading={false} />);
    const allCards = screen.getAllByTestId("product-cards");
    expect(allCards.length).toBe(20);
  });
  it("Should display the error message if truthy", () => {
    render(
      <MockStore
        products={[]}
        loading={false}
        errorMessage="Network issue encountered"
      />
    );
    const errorP = screen.getByText(/Network issue encountered/i);
    expect(errorP).toBeInTheDocument();
  });
  it("Should not display error message when falsy", () => {
    render(
      <MockStore products={mockData()} loading={false} errorMessage={false} />
    );
    const errorP = screen.queryByText(/Network issue encountered/i);
    expect(errorP).not.toBeInTheDocument();
  });
});

MockStore.propTypes = {
  loading: bool,
  products: array | string,
  errorMessage: string,
};
