import { render } from "@testing-library/react";

import { DataCard } from "../dataCard/dataCard";
import { BgImage } from "../background/backgroundImage";
import { generatePostData } from "../mocks/postDataMocked";
import { ComponentWrapper } from "@/test/utils/componentWrapper";

describe("Post Preview", () => {
  const postDataMocked = generatePostData();

  function renderComponent(date?: Date ) {
    return render(
      <ComponentWrapper>
        <BgImage url="/logo/logo.svg" />
        <DataCard {...postDataMocked} date={date ? date : postDataMocked.date}/>
      </ComponentWrapper>
    );
  }

  it("should render Post Preview components", () => {
    const { queryByTestId } = renderComponent();

    expect(queryByTestId("post-preview-background")).toBeInTheDocument();
    expect(queryByTestId("post-preview-data-card")).toBeInTheDocument();
  });

  it("should change content when props change", () => {
    const { queryByText, rerender } = renderComponent();

    expect(queryByText(postDataMocked.title)).toBeInTheDocument();

    postDataMocked.title = "title";

    rerender(
      <ComponentWrapper>
        <BgImage url="/logo/logo.svg" />
        <DataCard {...postDataMocked} />
      </ComponentWrapper>
    );

    expect(queryByText("title")).toBeInTheDocument();
  });

  it("should have props color on category background", () => {
    const { getByTestId } = renderComponent();

    const categoryCard = getByTestId("post-preview-category");

    expect(categoryCard.getAttribute("color")).toBe(
      postDataMocked.category.color.hex
    );
  });

  it("date should be in the format 'MM DD, YYYY'", () => {
    const date = new Date("2022-01-02");

    const { queryByText } = renderComponent(date);

    expect(queryByText("January 1, 2022")).toBeInTheDocument();
  });
});
