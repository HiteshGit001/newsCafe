import React, { createContext, useContext, useState } from 'react'
import {
  useDisclosure,
} from "@chakra-ui/react";

const DataContext = createContext();
export const useData = () => useContext(DataContext);
const DataContextProvider = ({ children }) => {

  const [country, setCountry] = useState("us");
  const [topHeadLines, setTopHeadLines] = useState({});
  const [search, setsearch] = useState("tesla");
  const [searchDate, setSearchDate] = useState("2022-12-27");
  const [searchData, setSearchData] = useState();
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const {
    isOpen: drawerIsOpen,
    onOpen: drawerOnOpen,
    onClose: drawerOnClose
  } = useDisclosure();
  const {
    isOpen: searchIsOpen,
    onOpen: searchOnOpen,
    onClose: searchOnClose,
  } = useDisclosure();
  const value = {
    drawerIsOpen,
    country,
    topHeadLines,
    searchIsOpen,
    search,
    searchDate,
    searchData,
    loading,
    filterData,
    setFilterData,
    setLoading,
    setSearchData,
    setSearchDate,
    setsearch,
    searchOnOpen,
    searchOnClose,
    setTopHeadLines,
    setCountry,
    drawerOnOpen,
    drawerOnClose,
  }
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider;
