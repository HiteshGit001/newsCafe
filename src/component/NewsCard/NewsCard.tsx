import { FC } from "react";
import cx from "classnames";
import styles from "./NewsCard.module.scss";
import { differenceInHours } from "date-fns";
import { resources } from "../../util/resources";

interface INewsCard {
  news: object,
}
const NewsCard: FC<INewsCard> = (props: any) => {
  const { news } = props;
  return (
    <a href={news?.url} target="_blank">
      <div className={styles.hover_img}>
        <img className={styles.img_container} src={news?.urlToImage} alt="img" />
        <div className={cx(styles.dis_box, "flex_center_center")}>
          <p className={styles.dis_box_text}>{news?.source?.name}</p>
        </div>
      </div>
      <p className={cx("play2432700Primary", styles.title)}>{`${news?.title?.slice(0, 60)}...`}</p>
      <div className={cx("flex_between_center", styles.dis_title)}>
        <p className="roboto1218400Thirtary">{`${differenceInHours(new Date(), new Date(news?.publishedAt))} ${resources?.hours}`}</p>
        <p className="roboto1218400Thirtary">{news?.source?.name}</p>
      </div>
    </a>
  )
}

export default NewsCard