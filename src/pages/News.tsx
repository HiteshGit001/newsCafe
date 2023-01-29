import { FC } from "react";
import cx from "classnames";
import LoadingAnimation from "../component/Loading/LoadingAnimation";
import NewsCard from "../component/NewsCard/NewsCard";
import { useData } from "../dataContext/DataContext";
import page from "./pages.module.scss";

const News: FC = () => {
  const { searchData, loading } = useData();
  console.log(searchData?.length);
  return (
    <div>
      {
        !loading
          ? (
            <div>
              {
                searchData?.length !== 0
                  ? (
                    <div className="grid_new_card md_gap">
                      {
                        searchData?.map((ele: any, index: number) => {
                          return (
                            <NewsCard news={ele} key={index} />
                          )
                        })
                      }
                    </div>
                  )
                  : (
                    <div className={cx("flex_center_center", page.center)}>
                      <p>No Data...</p>
                    </div>
                  )
              }
            </div>
          )
          : <LoadingAnimation />
      }
    </div>
  )
}

export default News;
