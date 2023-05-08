import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../Redux/Product/action";
import { Link, useParams } from "react-router-dom";
import { FaShareAlt, FaStar } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";
import { FaRegStar } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { Box,  Button,  Flex,  IconButton,  Text} from "@chakra-ui/react";
import { addToCart } from "../Redux/Cart/action";

function SingleProductPage() {
  const dispatch = useDispatch();
  const {id} = useParams();
  const product = useSelector(
    (store) => store.singleProductReducer.singleProduct
  );
  let {cart} = useSelector((store)=>store.cartReducer)

  useEffect(() => {
    dispatch(getSingleProduct({id: id}));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    
  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    alert("Product already present in the cart");
  } else {
    addToCart(dispatch, product);
    alert("Product added to the cart");
  }
  }

  return (
    <Box marginTop={"5%"} px="40px" width={"100%"}  boxShadow= "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" >
    <Box >
       <Flex className="content" >
      <div className="leftInd" style={{width:"70%"
}}>
        <Box >
          <Flex className="product" w={"100%"} h="450px" justify="space-between">
            <Flex
              className="img"
              w="100%"
              // border="1px solid green"
              direction="column"
              // justify="space-between"
            >
              <Flex
              // overflow="hidden"
                h="100%"
                border={"2px solid #ede6e6"}
                w="80%"
                borderRadius="md"
                align="center"
                justify="center"
                p="10px"
                cursor="pointer"
                margin={"3%"}
              >
                <div className="figure" style={{padding:"20px"}}>
                  <img className="image-main" style={{width:"130%"}} src={product.img} alt=""/>
                 </div>
              </Flex>
              
              {/* <IconButton
                aria-label="Search database"
                isRound="true"
                position="absolute"
                size="sm"
                bottom="20"
                left="350"
                icon={<FaShareAlt color="gray" />}
                boxShadow=" rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
                transition="all 0.8s ease"
                _hover={{
                  transform: "scale(1.2)",
                  transition: "all 0.4s ease",
                }}
              /> */}
            </Flex>
            <Box
              className="description"
              w="65%"
              margin="40px"
              textAlign="left"
              color="#4f585e"
              py="10px"
             >
              <Text
                istruncated="true"
                fontSize="20px"
                fontWeight="500"
                noOfLines={1}
                height="30px"
                margin="2%"
              >
                {product.name}
              </Text>
               <Flex
                className="price"
                h="2rem"
                align="center"
                w="40%"
                justify="space-between"
                margin="2%"
              >
                <Text fontSize="20px" fontWeight="600">
                  ₹{product.o_price}
                </Text>
                <Text fontSize="14px" fontWeight="500" color="#8e9ca7">
                  MRP{" "}
                  <span style={{ textDecoration: "line-through", fontSize: "14px", fontWeight: "400" }}>₹{product.price}</span>{" "}
                </Text>
                
              </Flex>
              <Text fontSize="14px" color="#8e9ca7" 
                margin="2%">
                Inclusive of all taxes
              </Text><Flex
                  align="center"
                  justify="start"
                  margin="10px"
                  px="25px"
                  color="white"
                  fontSize="11px"
                  fontWeight="600"
                  height="%"
                  w="36%"
                  bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
                >
                  20% OFF
                </Flex>
           
              <Flex
                className=" rating"
                paddingBottom="20px"
                w="35%"
                justify="space-between"
                align="center"
              >
                <Flex color="#ffd344" fontSize="20px" align="center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <TiStarHalfOutline fontSize="24px" />
                  <FaRegStar />
                </Flex>
                <Text color="#8e9ca7" fontSize="14px">
                  ({product.rating} ratings)
                </Text>
              </Flex>
               <Text py="14px" fontSize="12px">
                Delivery within <span style={{ fontWeight: "700" }}>2-3 business days</span>
              </Text>
              <Button
                className="addToStore"
                variant="teal"
                bg="teal"
                color="white"
                fontWeight="700"
                fontSize="16px"
                right="4"
                height="2.8rem"
                w="9rem"
                margin="2%"
                transition="all 0.4s ease"
                _hover={{bg:"#129b94", transition:"all 0.4s ease"}}
                onClick={handleAddToCart}
              >
                Add To Cart
              </Button>
             <Text fontSize="16px" color="teal" py="6px">
               Or Visit nearby Store
              </Text>
              </Box>
          </Flex>
        </Box>
      </div>


      <Box className="right" w="25%" color="#4f585e" textAlign="left">      
        <Box className="cartDetails" padding="50px ">
          <Link to="/cart"><Button
                className="viewCart"
                variant="teal"
                bg="teal"
                color="white"
                fontWeight="700"
                h="3rem"
                fontSize="90%"
                transition="all 0.4s ease"
                borderRadius="md"
                w="50%"
                display="flex"
                align="center"
                marginLeft={"20%"}
                _hover={{bg:"#075854", transition:"all 0.4s ease"}}
              >
                View Cart <BiChevronRight />
              </Button></Link>
              <br />
              <br />
              <br />
                  <Box border={"2px solid #ede6e6"} margin={"3%"} borderRadius={"10%"} padding={"2%"}>
                <Text fontFamily={"16px"} fontWeight={"bold"} textAlign={"center"} > MORE INFORMATION </Text>
              <br />
              <Text as={"span"} fontWeight={"bold"}>
            Description:
          </Text>{" "}
          {product.desc}
              <br />
              <br />
              <Text as={"span"} fontWeight={"bold"}>
                    Expires on:
                  </Text>{" "}
                  29/09/2024
                  <br />
                  <br />
                  <Text as={"span"} fontWeight={"bold"}>
                    Brand:
                  </Text>{" "}
                  EVER HERB
                  <br />
                  <br />
              </Box>
              <br />
              <br />
                
         </Box>
      </Box>
    </Flex>
    </Box>
     
  </Box>

  );
} 

export default SingleProductPage;
