import React, { createContext, useContext } from 'react'
import {
  useDisclosure,
} from "@chakra-ui/react";

const DataContext = createContext();
export const useData = () => useContext(DataContext);
const DataContextProvider = ({ children }) => {

  const {
    isOpen: drawerIsOpen,
    onOpen: drawerOnOpen,
    onClose: drawerOnClose
  } = useDisclosure()
  const value = {
    drawerIsOpen,
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
