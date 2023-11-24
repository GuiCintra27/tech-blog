import { fireEvent, render } from "@testing-library/react";

import { Header } from "..";
import { darkTheme } from "@/theme/dark-theme";
import { hexToRgbA } from "@/utils/color-util";
import { whiteTheme } from "@/theme/white-theme";
import { ComponentWrapper } from "@/test/utils/componentWrapper";

describe("Header", () => {
  function renderComponent(search: string = "") {
    return render(
      <ComponentWrapper>
        <Header search={search} />
      </ComponentWrapper>
    );
  }

  it("should render header components", () => {
    const { queryByText, queryByPlaceholderText, queryByTestId } =
      renderComponent();

    const categories = queryByText("Categories");
    const searchBar = queryByPlaceholderText("Search");
    const changeThemeButton = queryByTestId("change-theme-button");

    expect(categories).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
    expect(changeThemeButton).toBeInTheDocument();
  });

  describe("Navigation Bar", () => {
    it("should load the right links in the navigation bar", () => {
      const { queryByRole } = renderComponent();

      expect(queryByRole("link", { name: "Home" })).toHaveAttribute(
        "href",
        "/"
      );
      expect(queryByRole("link", { name: "Contact" })).toHaveAttribute(
        "href",
        "/contact"
      );
    });

    it("should display an alert when the Categories link is clicked", () => {
      window.alert = jest.fn();
      const { getByText } = renderComponent();

      const categoriesLink = getByText("Categories");

      fireEvent.click(categoriesLink);

      expect(window.alert).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith(
        "This feature is not available"
      );
    });
  });

  describe("Search Bar", () => {
    it("should change page on submit", () => {
      const { getByPlaceholderText, getByTestId, getByRole } =
        renderComponent();

      const input = getByPlaceholderText("Search");
      const form = getByTestId("search-bar-form");
      const button = getByRole("button");

      let formSubmitCount = 0;
      form.addEventListener("submit", (event) => {
        event.preventDefault();

        formSubmitCount++;
      });

      fireEvent.change(input, {
        target: {
          value: "Lorem",
        },
      });

      fireEvent.click(button);

      expect(input).toHaveValue("Lorem");
      expect(formSubmitCount).toBe(1);
    });
  });

  describe("Change Theme", () => {
    it("should change theme when button is clicked", () => {
      const { getByTestId } = renderComponent();

      const changeThemeButton = getByTestId("change-theme-button");
      const searchBar = getByTestId("search-bar-form");
      const style = window.getComputedStyle(searchBar);

      expect(style.backgroundColor).toBe(
        hexToRgbA(whiteTheme.colors.headerSearchBar, 0, true)
      );

      fireEvent.click(changeThemeButton);

      const darkSearchBar = getByTestId("search-bar-form");
      const darkStyle = window.getComputedStyle(darkSearchBar);

      expect(darkStyle.backgroundColor).toBe(hexToRgbA(darkTheme.colors.headerSearchBar, 0, true));
    });
  });
});
