import { FC } from "react";
import LoadingAnimation from "../component/Loading/LoadingAnimation";
import NewsCard from "../component/NewsCard/NewsCard";
import { useData } from "../dataContext/DataContext";

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
                searchData?.length !== 0 || searchData
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
                  : <p>No Data</p>
              }
            </div>
          )
          : <LoadingAnimation />
      }
    </div>
  )
}

export default News;
