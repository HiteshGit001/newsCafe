import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import LoadingAnimation from "../component/Loading/LoadingAnimation";
import NewsCard from "../component/NewsCard/NewsCard";
import { useData } from "../dataContext/DataContext";
import { fetchFilter } from "../service/fetch";
import pages from "./pages.module.scss";
import { resources } from "../util/resources";

const News: FC = () => {
  const {
    country,
    loading,
    filterData,
    setFilterData,
    setLoading,
  } = useData();
  const [catagory, setCatagory] = useState("business");
  const filterTab = async (): Promise<any> => {
    const res = await fetchFilter(country, catagory);
    console.log(res, "filt");
    if (res?.status === 200) {
      setLoading(false);
      setFilterData(res?.data);
    }
  }

  const handleCatagory = (event: any) => {
    setCatagory(event?.target?.value);
  }

  useEffect(() => {
    filterTab()
    setLoading(true)
  }, [catagory, country]);

  return (
    <div>
      <div>
        <Tabs className={pages?.news_page} variant='soft-rounded' colorScheme='green'>
          <TabList className={pages?.news_tab_list}>
            {
              resources?.catagoryTab?.map((ele: any) => {
                return (
                  <Tab _selected={{ color: 'white', bg: 'gray' }} className={pages?.news_tab} value={ele} onClick={(event) => handleCatagory(event)}>{ele}</Tab>
                )
              })
            }
          </TabList>
          <TabPanels>
            {
              loading
                ? <LoadingAnimation />
                : (
                  resources?.catagoryTab?.map((ele: any) => {
                    return (
                      <TabPanel className="grid_new_card md_gap">
                        {
                          filterData?.articles?.map((ele: any) => {
                            return (
                              <div>
                                <NewsCard news={ele} />
                              </div>
                            )
                          })
                        }
                      </TabPanel>
                    )
                  })
                )
            }
          </TabPanels>
        </Tabs>
      </div>
    </div>
  )
}

export default News;
