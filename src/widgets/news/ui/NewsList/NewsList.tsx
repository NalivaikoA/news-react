import { INews, NewsItem } from "@/entities/news";
import { withSkeleton } from "@/shared/hocs/withSkeleton";
import styles from "./styles.module.css";

interface Props {
  news?: INews[];
}

const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);
