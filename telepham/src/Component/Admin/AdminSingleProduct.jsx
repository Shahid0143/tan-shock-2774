import {
  Box,
  Center,
  Image,
  Button,
  Input,
  Td,
  Tr,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { MdDone, MdOutlineEdit } from "react-icons/md";
import { GoX } from "react-icons/go";

const SingleProduct = ({ product, handleEdit, handleDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [editable, setEditable] = useState(false);
  const [editValue, setEditValue] = useState("");

  const handleSaveEdit = () => {
    handleEdit(product.id, editValue);
    setEditable(false); // Close edit mode after saving
  };

  const handleRemove = () => {
    handleDelete(product.id); // Ensure handleDelete accepts the product id as an argument
    onClose(); // Close the modal after deletion
  };

  return (
    <Tr>
      <Td color={"white"}>
        <Image
          src={product.img}
          alt={product.desc}
          boxSize="90px"
          borderRadius="full"
          fontSize={26}
        />
      </Td>
      <Td>{product.desc}</Td>
      <Td>{product.price}</Td>
      <Td>{product.name}</Td>
      {/* If the following line is redundant, consider removing it */}
      <Td>{product.price}</Td>
      <Td isNumeric>
        {editable ? (
          <>
            <Input
              placeholder="Enter the new Amount"
              w={"auto"}
              type={"number"}
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <Button
              size={"sm"}
              variant={"ghost"}
              onClick={handleSaveEdit}
              aria-label="Save Edit"
            >
              <MdDone />
            </Button>
            <Button
              size={"sm"}
              variant={"ghost"}
              onClick={() => setEditable(false)}
              aria-label="Cancel Edit"
            >
              <GoX />
            </Button>
          </>
        ) : (
          <Box>
            ₹{product.discountPrice}/-{" "}
            <Button
              size={"sm"}
              variant={"ghost"}
              onClick={() => setEditable(true)}
              aria-label="Edit Product"
            >
              <MdOutlineEdit />
            </Button>
          </Box>
        )}
      </Td>
      <Td color={"black"}>
        <Center>
          <Button
            mt={4}
            onClick={onOpen}
            colorScheme={"red"}
            aria-label="Remove Product"
          >
            Remove
          </Button>
        </Center>

        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Item</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Are you sure you want to delete the item?</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme={"red"} onClick={handleRemove}>
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Td>
    </Tr>
  );
};

export default SingleProduct;
