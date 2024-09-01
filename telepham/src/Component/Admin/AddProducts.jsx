import React, { useState } from "react";
import {
  FormControl,
  Input,
  Heading,
  FormLabel,
  Button,
  useToast,
  Flex,
  Box,
  Stack,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/AdminReducer/action";

const initForm = {
  desc: "",
  name: "",
  img: "",
  o_price: "",
  price: "",
  category: "",
};

const AddProducts = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [form, setForm] = useState(initForm);

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const discount = form.o_price - form.price;
    const discountPercent = (discount / form.o_price) * 100;

    form.originalPrice = `${form.o_price}-${discountPercent.toFixed(2)}%`;

    try {
      dispatch(addProduct(form));
      toast({
        title: "Product Added",
        description: `${form.desc} has been added successfully`,
        status: "success",
        duration: 6000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error while adding",
        description: `${form.desc} has not been added`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
    setForm(initForm);
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      bg="blue.900"
      p={{ base: 4, md: 8 }}
      minH="100vh"
      w="100%"
    >
      <Box
        bg="white"
        p={{ base: 4, md: 8 }}
        borderRadius="md"
        boxShadow="lg"
        maxW="lg"
        w="100%"
      >
        <Heading size="lg" color="blue.900" textAlign="center" mb={6}>
          Add New Product
        </Heading>
        <form onSubmit={formSubmitHandler}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel color="blue.900">Product Name</FormLabel>
              <Input
                type="text"
                name="desc"
                background="gray.100"
                onChange={formChangeHandler}
                value={form.desc}
                placeholder="Enter Product Name"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="blue.900">Product Brand</FormLabel>
              <Input
                type="text"
                name="name"
                background="gray.100"
                onChange={formChangeHandler}
                value={form.name}
                placeholder="Enter Product Brand"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="blue.900">Product Image Link</FormLabel>
              <Input
                type="url"
                name="img"
                background="gray.100"
                onChange={formChangeHandler}
                value={form.img}
                placeholder="Enter Product Image"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="blue.900">Product Original Price</FormLabel>
              <Input
                type="number"
                name="o_price"
                background="gray.100"
                onChange={formChangeHandler}
                value={form.o_price}
                placeholder="Enter Product Price"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="blue.900">Product Discount %</FormLabel>
              <Input
                type="number"
                name="price"
                background="gray.100"
                onChange={formChangeHandler}
                value={form.price}
                placeholder="Enter Discount %"
              />
            </FormControl>

            <FormControl>
              <FormLabel color="blue.900">Product Rating</FormLabel>
              <Input
                type="text"
                name="rating"
                background="gray.100"
                onChange={formChangeHandler}
                value={form.rating}
                placeholder="Enter Product Rating"
              />
            </FormControl>

            <Button
              type="submit"
              bg="blue.900"
              color="white"
              _hover={{ bg: "blue.700" }}
              size="lg"
              width="full"
            >
              Add New Product
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default AddProducts;
