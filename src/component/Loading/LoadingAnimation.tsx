import { FC } from "react";
import cx from "classnames";
import styles from "./LoadingAnimation.module.scss";
import Loading from "../../assets/gif/Loading.gif";
import { resources } from "../../util/resources";

const LoadingAnimation: FC = () => {
  return (
    <div className={cx(styles.container, "flex_center_center")}>
      <img src={Loading} alt="loading" />
      <p className="play1221700Primary">{resources.loadingYourNews}</p>
    </div>
  )
}

export default LoadingAnimation;
