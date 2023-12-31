import { SkeletonLoading } from "@/components/common/loading";

export function LoadingPost() {
  return (
    <>
      <SkeletonLoading
        $height="3.2rem"
        $width="10rem"
        $border_radius="0.6rem"
      />
      <SkeletonLoading $height="8rem" $width="100%" $border_radius="0.6rem" />
      <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
        <SkeletonLoading
          $height="3.6rem"
          $width="3.6rem"
          $border_radius="10rem"
        />
        <SkeletonLoading
          $height="2.8rem"
          $width="8rem"
          $border_radius="0.6rem"
        />
        <SkeletonLoading
          $height="2.8rem"
          $width="15rem"
          $border_radius="0.6rem"
          style={{ marginLeft: "1rem" }}
        />
      </div>
    </>
  );
}
