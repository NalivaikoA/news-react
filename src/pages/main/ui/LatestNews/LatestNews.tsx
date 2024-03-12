import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./styles.module.css";
import { NewsListWithSkeleton } from "@/widgets/news";

export const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <NewsListWithSkeleton
        type="banner"
        direction="row"
        news={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
};
