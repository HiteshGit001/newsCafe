import { FC, useEffect, useState } from "react";
import { useData } from "../dataContext/DataContext";
import cx from "classnames";
import { fetchTopHedlines } from "../service/fetch";
import Loading from "../assets/gif/Loading.gif";
import page from "./pages.module.scss";
import LoadingAnimation from "../component/Loading/LoadingAnimation";
import { mockdata } from "../mock/mock";
import MainNewsContainer from "../component/MainNewContainer/MainNewsContainer";
import NewsCard from "../component/NewsCard/NewsCard";
import { resources } from "../util/resources";

const Home: FC = () => {
  const { country, topHeadLines, setTopHeadLines, loading, setLoading, } = useData();
  const SearchtopHeadlines = async (): Promise<any> => {
    const res = await fetchTopHedlines(country);
    if (res.status === 200) {
      setLoading(false);
      setTopHeadLines(res.data.articles);
    }
    console.log(res.data.articles, "rded")
  }
  useEffect(() => {
    SearchtopHeadlines();
    setLoading(true)
  }, [country]);
  return (
    <>
      {
        loading
          ? <LoadingAnimation />
          : (
            <div>
              <p className={cx("roboto4856700Primary", page.home_text)}>{resources?.hotTopics}</p>
              {
                topHeadLines?.map((ele: any, index: number) => {
                  return (
                    index === 0
                      ? <MainNewsContainer key={ele?.title} news={ele} />
                      : null
                  )
                })
              }
              <p className={cx("roboto3642700Primary", page.home_text)}>{resources?.latesNews}</p>
              <div className="grid_new_card md_gap">
                {
                  topHeadLines?.map((ele: any, index: number) => {
                    return (
                      index !== 0
                        ? <NewsCard key={ele?.title} news={ele} />
                        : null
                    )
                  })
                }
              </div>
            </div>
          )
      }
    </>
  );
};

export default Home;
