import { FC } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useData } from "../../dataContext/DataContext";

const MobileDrawer: FC = () => {
  const { drawerIsOpen,
    drawerOnClose, } = useData();
  return (
    <Drawer
      isOpen={drawerIsOpen}
      placement='right'
      onClose={drawerOnClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
          hi
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileDrawer;
