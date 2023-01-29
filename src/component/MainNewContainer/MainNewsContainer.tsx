import { FC } from "react";
import cx from "classnames";
import styles from "./MainNewsContainer.module.scss";

interface IMainNewsContainer {
  news: object
}
const MainNewsContainer: FC<IMainNewsContainer> = (props: any) => {
  const { news } = props;
  return (
    <div>
      <div className={cx("flex_between_start", "md_gap", styles.container)}>
        <div className={styles.img_box}>
          <a href={news?.url} target="_blank">
            <img className={styles.img_container_lg} src={news?.urlToImage} alt="img" />
            <div className={cx(styles.img_text)}>
              <p className="play3248700Secondary">{news?.description?.slice(0, 50)}</p>
              <div className={cx("flex_start_center", styles.dis_title)}>
                <p className="roboto1218400Secondary">{news?.author}</p>
                <p className="roboto1218400Secondary">{news?.source?.name}</p>
              </div>
            </div>
          </a>
        </div>
        <a href={news?.url} target="_blank" className={cx(styles.content, "play1832400Primary")}
          dangerouslySetInnerHTML={{
            __html:
              `${news?.content?.substring(0, news?.content?.length - 20)} read more...`
          }} />
      </div>
    </div>
  )
}

export default MainNewsContainer