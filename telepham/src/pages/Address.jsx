import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Stack,
  Input,
  FormControl,
  FormHelperText
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

 function Address() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const firstField = React.useRef();
  const [name, setName] = useState("");
  const [num,setNum] = useState();
  const [pin,setPin] = useState();
  const [add, setAdd] = useState("");
  const [street, setStreet] = useState();

  const handleCheckout = () => {
setAdd("")
setName("");
setNum("");
setPin("");
setStreet("");
  }

  return (
    <>
        <Button colorScheme="teal" onClick={onOpen}  variant="solid" w="100%" marginLeft="-18px">
         Continue
        </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Add Delivery Address
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <form isRequired>
                <FormControl isRequired>
                  <Input type="text" placeholder="Deliver to" value={name} onChange={(e)=>setName(e.target.value)} />
                  <br />
                  <br />

                  <Input type="number" placeholder="Mobile no"  value={num} onChange={(e)=>setNum(e.target.value)}/>
                  <FormHelperText>
                    For all delivery related communication.
                  </FormHelperText>
                  <br />

                  <Input type="number" placeholder="Pin Code" w="40%"  value={pin} onChange={(e)=>setPin(e.target.value)} />
                  <br />
                  <br />
                  <Input type="text" placeholder="House no and building"  value={add} onChange={(e)=>setAdd(e.target.value)} />
                  <br />
                  <br />
                  <Input type="text" placeholder="Street no"  value={street} onChange={(e)=>setStreet(e.target.value)} />
                  <br />
                  <Link to="/payment">
                    {" "}
                    <Button mt={4} colorScheme="teal" type="submit" onClick={handleCheckout}>
                    Payment
                    </Button>
                  </Link>
                </FormControl>
              </form>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Address;