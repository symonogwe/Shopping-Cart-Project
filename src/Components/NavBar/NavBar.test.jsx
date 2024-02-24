import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { CartContext } from "../MainApp/App";
import mockData, { mockCart } from "./NavUtils";
// Components
import NavBar from "./NavBar";
import HomePage from "../HomePage/HomePage";
import Store from "../Store/Store";
import Cart from "../CartPage/Cart";

function MockNavBAr() {
  let colorMode = "dark";
  const dataObj = mockData();
  const cart = mockCart;

  const toggleColorMode = vi.fn(() => (colorMode = "light"));

  return (
    <BrowserRouter>
      <NavBar colorMode={colorMode} toggleColorMode={toggleColorMode} />
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
  describe("Clicking the switch should toggle the color mode", () => {
    it("Should initially have a className of 'nav-link' before toggling switch", () => {
      render(<MockNavBAr />);
      const togglePara = screen.getByRole("toggle-paragraph");
      expect(togglePara).toHaveClass("nav-link");
    });

    it("Should have a className of 'nav-link-light' after toggling switch", async () => {
      let colorMode = "dark";
      const toggleColorMode = vi.fn(() => (colorMode = "light"));
      const dataObj = mockData();
      const cart = mockCart;

      const user = userEvent.setup();

      render(
        <BrowserRouter>
          <NavBar colorMode={colorMode} toggleColorMode={toggleColorMode} />
          <CartContext.Provider value={{ colorMode, dataObj, cart }}>
            <HomePage />
            <Store />
            <Cart />
          </CartContext.Provider>
        </BrowserRouter>
      );

      const toggleTheme = screen.getByTestId("theme-toggle");
      toggleTheme.onchange = () => {
        toggleColorMode();
      };

      await user.click(toggleTheme);

      expect(toggleColorMode).toHaveBeenCalled();
      expect(colorMode).toBe("light");
    });
  });
});
