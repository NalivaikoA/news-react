import { INews } from "@/entities/news";
import { withSkeleton } from "@/shared/hocs/withSkeleton";
import styles from "./styles.module.css";
import { NewsCard } from "@/entities/news/ui/NewsCard/NewsCard";
import { ReactNode } from "react";

interface Props {
  news?: INews[];
  type?: "banner" | "item";
  direction?: "row" | "column";
  viewNewsSlot?: (news: INews) => ReactNode;
}

const NewsList = ({ news, type = "item", viewNewsSlot }: Props) => {
  return (
    <ul className={`${type === "item" ? styles.items : styles.banners}`}>
      {news?.map((item) => {
        return (
          <NewsCard
            key={item.id}
            item={item}
            type={type}
            viewNewsSlot={viewNewsSlot}
          />
        );
      })}
    </ul>
  );
};

export const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);
