import { render } from "@testing-library/react";

import { Header } from "..";
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
    const { getByText, getByPlaceholderText, getByTestId } = renderComponent();

    const categories = getByText("Categories");
    const searchBar = getByPlaceholderText("Search");
    const changeThemeButton = getByTestId("change-theme-button");
    
    expect(categories).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
    expect(changeThemeButton).toBeInTheDocument();
  });
});
