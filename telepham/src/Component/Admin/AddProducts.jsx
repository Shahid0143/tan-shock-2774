import React, { useState } from 'react'
import { FormControl, Input, Heading, FormLabel, Button, useToast, Flex, Box, Image, Stack, Text } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/AdminReducer/action';


// "id": 30,
// "img": "https://onemg.gumlet.io/images/q_auto,h_150,w_150,c_fit,f_auto/jozxpcicvvlzl5vciwil/evum-dark-chocolate-cookie.jpg",
// "name": "Evum Dark Chocolate Cookie",
// "desc": "jar of 170 gm Cookie",
// "rating": "2.6",
// "o_price": 3400,
// "price": 3700

const initForm = {
  desc: '',
  name: '',
  img: '',
  o_price: '',
  price: '',
  category: ''
}
const AddProducts = () => {
  const dispatch = useDispatch();

  const toast = useToast();

  const [form, setForm] = useState(initForm);
  const price = form.o_price.split('-');
  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const discount = form.o_price - form.price;
    const discountPercent = price / form.o_price * 100;


    form.originalPrice = `${form.o_price}-${discountPercent.toFixed(2)}%` 

    try {
      dispatch(addProduct(form))
      toast({
        title: 'Product Added',
        description: `${form.description} has been added successfully`,
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error while adding',
        description: `${form.description} has not added`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
    setForm(initForm)
  }

  return (
    <Box bg={"blue.900"} pl={80 } pr={80} w={"100%"} >
      <Heading size='md' color={"white"} >Add New Product</Heading>
      <Box  >
        <form onSubmit={formSubmitHandler}>
          <Stack  >
            <FormControl isRequired>
              <FormLabel m={2} color={"white"}>Product Name</FormLabel>
              <Input m={2} type='text'
                name='desc'
                background='#fff'
                onChange={formChangeHandler}
                value={form.desc}
                placeholder="Enter Product Name"
              />

              <FormLabel m={2} color={"white"} > Product Brand</FormLabel>
              <Input m={2} type='text' name='name' background='#fff' onChange={formChangeHandler}
                value={form.name}
                placeholder="Enter Product Brand" />
              <FormLabel color={"white"} >Product Image Link</FormLabel>

              <Input m={2} type='url' name='img' background='#fff' onChange={formChangeHandler}
               value={form.img} 
               placeholder="Enter Product Image"
               />
              <FormLabel color={"white"} >Product Original Price</FormLabel>

              <Input m={2} type='number' name='o_price' background='#fff' 
              onChange={formChangeHandler} 
              value={form.o_price} 
              placeholder="Enter Product Price"
              />
              <FormLabel m={2} color={"white"} >Product Discount %</FormLabel>

              <Input m={2} type='number' name='price' background='#fff' onChange={formChangeHandler} value={form.price} 
               placeholder="Enter  Discount %"
              />
              <FormLabel color={"white"} >Product Rating</FormLabel>

              <Input m={2} type='text' name='rating' background='#fff'
               onChange={formChangeHandler} 
               value={form.rating}
               placeholder="Enter Product rating"
              />
              <Button m={2} type='submit' colorScheme='teal' marginTop='2' color={"white"}>Add New Product</Button>
            </FormControl>
          </Stack>
        </form>
      </Box>
    </Box>
  )
}

export default AddProducts;