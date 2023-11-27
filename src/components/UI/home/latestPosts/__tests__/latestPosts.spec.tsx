import { hexToRgbA } from "@/utils/color-util";
import { PostCard } from "../postCard/postCard";
import { render } from "@/test/utils/customRender";
import { generatePostMocked } from "../mocks/postMocked";
import { convertUrlToSrc } from "@/test/utils/convertUrlToSrc";

describe("Latest Posts", () => {
  const postMocked = generatePostMocked();
  function renderComponent(quantity?: number) {
    return render(
      <>
        {new Array(quantity ? quantity : 9).fill(postMocked).map((_, index) => (
          <PostCard posts={postMocked} key={index} />
        ))}
      </>
    );
  }

  it("should render 9 posts", () => {
    const { getAllByText } = renderComponent();

    expect(getAllByText(postMocked.title).length).toBe(9);
  });

  it("should have props color on category background and alpha should be 0.1", () => {
    const { getByTestId } = renderComponent(1);

    const categoryCard = getByTestId("post-card-category");
    const style = window.getComputedStyle(categoryCard);

    expect(style.backgroundColor).toBe(
      hexToRgbA(postMocked.category.color.hex, 0.1)
    );
  });

  it("post link should go to right url", () => {
    const { queryByRole } = renderComponent(1);

    expect(queryByRole("link", { name: postMocked.title })).toHaveAttribute(
      "href",
      `/posts/${postMocked.slug}`
    );
  });

  it("image should have right src",  () => {
    const { getByAltText } = renderComponent(1);

    const image = getByAltText('Go to post');

    expect(image).toHaveAttribute('src', convertUrlToSrc(postMocked.coverImage.url));
  })
});
