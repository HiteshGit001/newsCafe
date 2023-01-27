import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface IModalOptionalProps {
  size?: string,
  closeOnOverLayClick?: boolean,
  autoFocus?: boolean,
  isOpen: boolean,
  onClose: () => void,
  component: ReactNode,
}

const CustomModal: FC<IModalOptionalProps> = (props: any) => {
  const { isOpen, onClose, component, size = "", closeOnOverLayClick = true, autoFocus = true, } = props;
  return (
    <Modal isOpen={isOpen} autoFocus={autoFocus} closeOnOverlayClick={closeOnOverLayClick} onClose={onClose} size={size} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent className={`${size === "" ? "custom_modal" : "custom_full_scree"}`}>
        <ModalBody className={`${size === "" ? null : "custom_full_scree"}`}>
          {component}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default CustomModal;
