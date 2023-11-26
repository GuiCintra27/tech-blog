import Link from "next/link";
import Image from "next/image";

import { Card } from "./styles";
import { getDate } from "@/utils/date-util";
import { hexToRgbA } from "@/utils/color-util";
import { PostPreviewData } from "@/models/posts";

export function PostCard({ posts }: PostPreviewData) {
  const { coverImage, category, title, author, date } = posts;
  const backgroundColor = hexToRgbA((category ? category.color.hex : "929292"), 0.05);

  return (
    <Card.Root>
      <Link href={`/posts/${posts.slug}`}>
        <Image src={coverImage.url} alt="Go to post" width={350} height={240} />
      </Link>
      <Card.Category
        $background_color={backgroundColor}
        data-testid="post-card-category"
      >
        <p>{category?.name}</p>
      </Card.Category>
      <Card.Title href={`/posts/${posts.slug}`}>{title}</Card.Title>
      <Card.PostData>
        <div className="author">
          <Image src={author?.picture ? author?.picture?.url : "/icons/undefined-user.png"} height={36} width={36} alt="" />
          <p className="light-bold">{author?.name}</p>
        </div>
        <p>{getDate(date)}</p>
      </Card.PostData>
    </Card.Root>
  );
}