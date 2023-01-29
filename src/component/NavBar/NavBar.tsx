import { FC, useState } from "react";
import cx from "classnames";
import { resources } from "../../util/resources";
import { useNavigate } from "react-router-dom";
import { HOME_PATH, NEWS_PATH, SEARCH_NEWS_PATH } from "../../key/constants";
import styles from "./NavBar.module.scss";
import HamBurgerIcon from "../../assets/icon/HamBurgerIcon.svg";
import SearchIcon from "../../assets/icon/SearchIcon.svg";
import { useData } from "../../dataContext/DataContext";
import { Button, Input, Select } from "@chakra-ui/react";
import CustomModal from "../CustomModal/CustomModal";
import { fetchSearch } from "../../service/fetch";

const NavBar: FC = () => {
  const {
    drawerOnOpen,
    setCountry,
    country,
    searchIsOpen,
    searchOnOpen,
    searchOnClose,
    search,
    searchData,
    setSearchData,
    searchDate,
    setSearchDate,
    setsearch,
    setLoading,
  } = useData();
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

  const handleSearch = (event: any) => {
    const { value } = event.target;
    setsearch(value);
  }

  const handleDate = (date: any) => {
    setSearchDate(date?.target.value);
  }

  const handleSubmit = async (event: any): Promise<any> => {
    event.preventDefault();
    const res = await fetchSearch(search, searchDate);
    if (res?.status === 200) {
      setSearchData(res?.data?.articles);
      setLoading(false);
      navigate(SEARCH_NEWS_PATH);
    }
    console.log(res, "reds");
  }

  return (
    <div className={cx("flex_between_center")}>
      <CustomModal
        isOpen={searchIsOpen}
        onClose={searchOnClose}
        component={(
          <div className={styles.input_box}>
            <p className="play1221700Primary">{resources?.search}</p>
            <label className={styles.label_text}>{resources?.key}</label>
            <Input onChange={handleSearch} />
            <label className={styles.label_text}>{resources?.fromDate}</label>
            <Input onChange={handleDate} type="date" />
            <Button className={styles.label_text} onClick={handleSubmit} type="submit">{resources?.search}</Button>
          </div>
        )}
      />
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
        <Select onChange={(value) => { setCountry(value?.target?.value); console.log(value?.target?.value); }}>
          {
            resources?.countyName?.map((ele: string) => {
              return (
                <option key={ele} value={ele}>
                  {ele}
                </option>
              )
            })
          }
        </Select>
        <img onClick={searchOnOpen} src={SearchIcon} alt="search icon" />
        <img onClick={drawerOnOpen} src={HamBurgerIcon} alt="hamburger" />
      </div>
    </div>
  )
}

export default NavBar;
