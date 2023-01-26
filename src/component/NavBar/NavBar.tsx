import { FC, useState } from "react";
import cx from "classnames";
import { resources } from "../../util/resources";
import { useNavigate } from "react-router-dom";
import { HOME_PATH, NEWS_PATH } from "../../key/constants";
import styles from "./NavBar.module.scss";
import HamBurgerIcon from "../../assets/icon/HamBurgerIcon.svg";
import SearchIcon from "../../assets/icon/SearchIcon.svg";
import { useData } from "../../dataContext/DataContext";

const NavBar: FC = () => {
  const {
    drawerOnOpen, } = useData();
  const [active, setActive] = useState({ home: true, news: false });
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    if (path === HOME_PATH) {
      setActive({ ...active, home: true, news: false })
    }
    else {
      setActive({ ...active, news: true, home: false })
    }
    navigate(path);
  };
  console.log(drawerOnOpen);
  return (
    <div className={cx("flex_between_center")}>
      <div className={cx("flex_start_center", "sm_gap")}>
        <p
          className={cx("play1221700Primary", styles.tab, active.home ? styles.active : "")}
          onClick={() => handleNavigate(HOME_PATH)}
        >
          {resources?.home}
        </p>
        <p
          className={cx("play1221700Primary", styles.tab, active.news ? styles.active : "")}
          onClick={() => handleNavigate(NEWS_PATH)}
        >
          {resources?.news}
        </p>
      </div>
      <div className={cx("flex_start_center", "md_gap")}>
        <img src={SearchIcon} alt="search icon" />
        <img onClick={drawerOnOpen} src={HamBurgerIcon} alt="hamburger" />
      </div>
    </div>
  )
}

export default NavBar