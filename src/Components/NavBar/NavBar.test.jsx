import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { CartContext } from "../MainApp/App";
import mockData, { mockCart } from "./NavUtils";
// Components
import NavBar from "./NavBar";
import HomePage from "../HomePage/HomePage";
import Store from "../Store/Store";
import Cart from "../CartPage/Cart";

function MockNavBAr() {
  const colorMode = "dark";
  const dataObj = mockData();
  const cart = mockCart;

  return (
    <BrowserRouter>
      <NavBar />
      <CartContext.Provider value={{ colorMode, dataObj, cart }}>
        <HomePage />
        <Store />
        <Cart />
      </CartContext.Provider>
    </BrowserRouter>
  );
}

describe("NavBar component tests", () => {
  describe("Contains all required elements", () => {
    it("Is rendered and visible to the user", () => {
      render(<MockNavBAr />);
      const navBarElement = screen.getByTestId("navbar");
      expect(navBarElement).toBeInTheDocument();
      expect(navBarElement).toBeVisible();
    });

    it("Contains 3 link elements", () => {
      render(<MockNavBAr />);
      const allNavElements = screen.getAllByRole("link");
      expect(allNavElements.length).toBe(4);
    });
  });
  describe("Clicking a link should display required page", () => {
    it("Clicking the Home link should render the HomePage component", async () => {
      const user = userEvent.setup();

      render(<MockNavBAr />);

      const homeLink = screen.getByRole("link", { name: /home/i });

      await user.click(homeLink);

      const homePage = screen.getByText(/Welcome to this virtual store/i);

      expect(homePage).toBeInTheDocument();
    });

    it("Clicking the Store link should render the Store component", async () => {
      const user = userEvent.setup();

      render(<MockNavBAr />);

      const storeLink = screen.getByRole("link", { name: /store/i });

      await user.click(storeLink);

      const storePage = screen.getByRole("heading", { name: /Your Store/i });

      expect(storePage).toBeInTheDocument();
    });
    it("Clicking the Cart link should render the Cart component", async () => {
      const user = userEvent.setup();

      render(<MockNavBAr />);

      const cartLInk = screen.getByRole("link", { name: /cart/i });

      await user.click(cartLInk);

      const cartPage = screen.getByRole("heading", {
        name: /MY SHOPPING CART/i,
      });

      expect(cartPage).toBeInTheDocument();
    });
  });
});
