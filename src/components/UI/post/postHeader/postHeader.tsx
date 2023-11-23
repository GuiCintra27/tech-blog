import Image from "next/image";

import { Container } from "./styles";
import { getDate } from "@/utils/date-util";
import { LoadingPost } from "../content/loadingPost/loadingPost";
import { PostQuery } from "@/generated/graphql";

export function PostHeader({
  data,
  loading,
}: {
  data: PostQuery | undefined;
  loading: boolean;
}) {
  return (
    <Container
      $category_background={data?.post ? data?.post?.category?.color.hex : ""}
    >
      {loading ? (
        <LoadingPost />
      ) : (
        <>
          <div className="category">
            <p>{data?.post?.category?.name}</p>
          </div>
          <div className="title">{data?.post?.title}</div>
          <div className="postData">
            <div className="author">
              <Image
                src={
                  data?.post?.author?.picture
                    ? data?.post?.author?.picture?.url
                    : "/icons/undefined-user.png"
                }
                alt=""
                height={28}
                width={28}
              />
              <p className="light-bold">{data?.post?.author?.name}</p>
            </div>
            <p>{getDate(data?.post ? data.post.date : "")}</p>
          </div>
        </>
      )}
    </Container>
  );
}
