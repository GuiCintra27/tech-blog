import { DataCard } from "../dataCard/dataCard";
import { render } from "@/test/utils/customRender";
import { BgImage } from "../background/backgroundImage";
import { generatePostData } from "../mocks/postDataMocked";

describe("Post Preview", () => {
  const postDataMocked = generatePostData();

  function renderComponent(date?: Date ) {
    return render(
      <>
        <BgImage url="/logo/logo.svg" />
        <DataCard {...postDataMocked} date={date ? date : postDataMocked.date}/>
      </>
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
      <>
        <BgImage url="/logo/logo.svg" />
        <DataCard {...postDataMocked} />
      </>
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
