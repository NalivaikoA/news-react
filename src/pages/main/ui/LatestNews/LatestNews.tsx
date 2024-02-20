import { BannersListWithSkeleton } from "@/widgets/news/ui/BannersList/BannersList";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./styles.module.css";

export const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersListWithSkeleton
        banners={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
};
