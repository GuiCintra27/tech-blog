import Image from "next/image";
import { Container } from "./styles";
import { PostQuery } from "@/generated/graphql";
import { postLoadingSizes } from "@/utils/loading-util";
import { SkeletonLoading } from "@/components/common/loading";

export function Content({
  data,
  loading,
}: {
  data: PostQuery | undefined;
  loading: boolean;
}) {
  return (
    <Container>
      {loading ? (
        postLoadingSizes.map((item, index) => (
          <SkeletonLoading
            key={index}
            {...item}
            style={{ marginBottom: item.$margin_bottom }}
          />
        ))
      ) : (
        <>
          <Image
            src={data?.post ? data.post.coverImage.url : ""}
            alt=""
            height={450}
            width={800}
            priority
          />
          <div
            dangerouslySetInnerHTML={{
              __html: data?.post ? data.post.content.markdown : <div />,
            }}
          />
        </>
      )}
    </Container>
  );
}
