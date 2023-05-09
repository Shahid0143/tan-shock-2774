import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { auth } from "../firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const onSingIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredenditals) => {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        alert(`Invalid email or password`);
      });
  };
  return (
    <div style={{ marginTop: "5%", position: "fixed" }}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Image
          width={"68%"}
          src="https://imageio.forbes.com/specials-images/imageserve/643e9a37f3306b1329052dee//960x0.jpg?format=jpg&width=960"
          alt=""
        />
        <Stack spacing={12} mx={"auto"} maxW={"lg"} py={12} px={6} bg={"teal"}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} color={"white"}>
              Sign in to your account
            </Heading>
            <Text fontSize={"lg"} color={"orange"}>
              to enjoy 2MG cool <Link color={"blue.400"}>features</Link> 💊💉🩺
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  style={{ outline: "none", border: "1px solid orange" }}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  style={{ outline: "none", border: "1px solid orange" }}
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Link color={"teal.400"} onClick={() => navigate("/sign-up")}>
                    + Register Here
                  </Link>
                  <Link color={"teal.400"} onClick={()=> navigate("/admin")}>Admin Login</Link>
                </Stack>
                <Button
                  onClick={onSingIn}
                  bg={"teal.400"}
                  color={"white"}
                  _hover={{
                    bg: "orange",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
}
