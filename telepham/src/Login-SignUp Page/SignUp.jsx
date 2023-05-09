import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {auth} from "../firebase";
import Swal from 'sweetalert2';
import {useNavigate} from "react-router-dom"
import {createUserWithEmailAndPassword} from "firebase/auth"
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
const [email, setEmail] = useState('');
const [password, setPassword] = useState('')
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('')
const onSignUp = async () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials)=> {
            const res = fetch(`https://tele-pharma-project-default-rtdb.firebaseio.com/userDataRecords.json`,{
                method : "POST",
                headers : {
                    "Content-type" : "application/json"
                },
                body : JSON.stringify({
                    firstName : firstName,
                    lastName : lastName,
                    email : email,
                    password : password
                })
            })
            if(res){
               Swal.fire(
         'Good job!',
        'You have been registered!',
      'success'
        )
        setTimeout(()=>{
          navigate("/")
        },1500)
            }
        })
        .catch((error)=> console.log(error))
}
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text"  value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email"  value={email} onChange={(e)=> setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e)=> setPassword(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
              onClick={onSignUp}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} 
                >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'} onClick={()=> navigate("/login")} >Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
} 