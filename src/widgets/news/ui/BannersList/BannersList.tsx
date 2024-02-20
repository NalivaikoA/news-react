import { INews, NewsBanner } from "@/entities/news";
import { withSkeleton } from "@/shared/hocs/withSkeleton";
import styles from "./styles.module.css";

interface Props {
  banners?: INews[] | null;
}

const BannersList = ({ banners }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

export const BannersListWithSkeleton = withSkeleton(
  BannersList,
  "banner",
  10,
  "row"
);
