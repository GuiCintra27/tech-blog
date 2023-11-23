"use client";

import Image from "next/image";

import { Card } from "./styles";
import { getDate } from "@/utils/date-util";
import { DataCardType } from "@/models/posts";

export function DataCard({ category, title, author, date }: DataCardType) {
  return (
    <Card.Root>
      <Card.Category color={category?.color.hex}>
        <p>{category?.name}</p>
      </Card.Category>
      <Card.Title>{title}</Card.Title>
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
