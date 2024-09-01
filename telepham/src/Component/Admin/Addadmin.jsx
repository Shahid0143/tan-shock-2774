import { useDispatch } from "react-redux";
import {
  useToast,
  Select,
  FormControl,
  Input,
  Heading,
  FormLabel,
  Button,
  Box,
  Stack,
  Flex,
  Grid,
} from "@chakra-ui/react";
import { useState } from "react";
import { addAdmin } from "../../Redux/AdminReducer/action";

const initForm = {
  name: "",
  email: "",
  password: "",
  role: "",
  image: "",
  contact: "",
};

const AddAdmins = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [form, setForm] = useState(initForm);

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(addAdmin(form));
      toast({
        title: "Admin Added",
        description: `${form.name} has been added successfully`,
        status: "success",
        duration: 6000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error while adding",
        description: `${form.name} has not been added`,
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
          Add Admin
        </Heading>
        <form onSubmit={formSubmitHandler}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel color="blue.900">Admin Name</FormLabel>
              <Input
                type="text"
                name="name"
                id="name"
                background="gray.100"
                onChange={formChangeHandler}
                value={form.name}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="blue.900">Admin Image Link</FormLabel>
              <Input
                type="url"
                name="image"
                id="image"
                background="gray.100"
                onChange={formChangeHandler}
                value={form.image}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="blue.900">Admin Email</FormLabel>
              <Input
                type="email"
                name="email"
                id="email"
                background="gray.100"
                onChange={formChangeHandler}
                value={form.email}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="blue.900">Admin Contact No.</FormLabel>
              <Input
                type="number"
                name="contact"
                id="contact"
                background="gray.100"
                onChange={formChangeHandler}
                value={form.contact}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="blue.900">Admin Password</FormLabel>
              <Input
                type="password"
                name="password"
                id="password"
                background="gray.100"
                onChange={formChangeHandler}
                value={form.password}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="blue.900">Admin Category</FormLabel>
              <Select
                placeholder="Select Role"
                name="role"
                id="role"
                background="gray.100"
                onChange={formChangeHandler}
                value={form.role}
              >
                <option value="Technical">Technical</option>
                <option value="Developer">Developer</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Sales">Sales</option>
                <option value="Customer Executive">Customer Executive</option>
              </Select>
            </FormControl>

            <Button
              type="submit"
              bg="blue.900"
              color="white"
              _hover={{ bg: "blue.700" }}
              size="lg"
              width="full"
            >
              Create New Admin
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default AddAdmins;
